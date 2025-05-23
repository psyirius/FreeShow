import { get, Unsubscriber } from "svelte/store"
import type { Recording } from "../../../types/Show"
import { activeShow, activeSlideRecording, outLocked, outputs, playingAudio, videosData, videosTime } from "../../stores"
import { getActiveOutputs, setOutput } from "./output"
import { updateOut } from "./showActions"
import { _show } from "./shows"
import { updateVideoData, updateVideoTime } from "./video"

///// SLIDE RECORDING /////

export function playRecording(recording: Recording, { showId, layoutId }, startIndex: number = 0, subtractTime: number = 0) {
    if (get(outLocked)) return

    // WIP play multiple recordings at the same time in different outputs...
    if (get(activeSlideRecording)) clearTimeout(get(activeSlideRecording).timeout)

    let layoutRef = _show(showId).layouts([layoutId]).ref()[0]

    let layoutData = layoutRef[recording.sequence?.[0]?.slideRef?.index]?.data || {}
    let showMedia = _show(showId).get("media")
    const audioPath = showMedia[layoutData.audio?.[0] || ""]?.path || ""
    const backgroundPath = layoutData.background && showMedia[layoutData.background]?.muted === false ? showMedia[layoutData.background]?.path : ""
    if (audioPath || audioListener) {
        // WIP pause / change audio duration!!

        // reset playing audio
        if (startIndex === 0) {
            let playing = get(playingAudio)[audioPath]?.audio
            if (playing) {
                playingAudio.update((a) => {
                    a[audioPath].audio.currentTime = 0
                    a[audioPath].paused = false
                    return a
                })
            }
        }

        startAudioListener(audioPath)
    } else if (backgroundPath || backgroundListener) {
        // reset playing video
        if (startIndex === 0) {
            const data = get(videosData)[backgroundPath]
            if (data) {
                updateVideoTime(0)
                updateVideoData({ ...data, paused: false })
            }
        }

        startBackgroundListener()
    }

    let rootTime = Date.now()
    let totalTime = recording.sequence.slice(0, startIndex).reduce((time, value) => (time += value.time), 0)
    if (startIndex > 0) rootTime -= totalTime

    playSequence(startIndex)
    function playSequence(index: number) {
        let sequence = recording.sequence[index]

        if (audioPath && get(playingAudio)[audioPath]?.audio?.paused) return

        let outputId = getActiveOutputs()[0]
        let outSlide = get(outputs)[outputId]?.out?.slide
        if (outSlide?.id !== showId || outSlide?.layout !== layoutId || outSlide?.index !== index) {
            updateOut("active", index, layoutRef)
            let slideIndex = sequence.slideRef.index
            // WIP check that slide is the correct ID ??
            setOutput("slide", { id: showId, layout: layoutId, index: slideIndex, line: 0 })
        }

        // next
        let nextIndex = index + 1
        while (recording.sequence[nextIndex] && recording.sequence[nextIndex]?.time === 0 && nextIndex < recording.sequence.length - 1) nextIndex++
        if (!recording.sequence[nextIndex]) {
            activeSlideRecording.set(null)
            return
        }

        let timeToNext = recording.sequence[index].time - (index === startIndex ? subtractTime : 0)
        // calculate precise time
        totalTime += timeToNext
        let newTime = totalTime - (Date.now() - rootTime)
        timeToNext = Math.max(0, newTime)

        activeSlideRecording.set({ ref: { showId, layoutId }, index, timeToNext, audioPath, backgroundPath, sequence: recording.sequence, timeout: setTimeout(() => playSequence(nextIndex), timeToNext) })
    }
}

let audioListener: Unsubscriber | null = null
let audioPathListener: string = ""
function startAudioListener(path: string) {
    audioPathListener = path
    if (audioListener) return

    audioListener = playingAudio.subscribe((a) => {
        let audio = a[audioPathListener]?.audio
        // let audio = a[get(activeSlideRecording)?.audioPath]?.audio
        if (!audio || !get(activeSlideRecording)) return

        checkTimeDifference(audio.currentTime * 1000)
    })
}

let backgroundListener: Unsubscriber | null = null
function startBackgroundListener() {
    if (backgroundListener) return

    // this might not get correct output if background is not playing in first output..
    const activeOutputId = getActiveOutputs(get(outputs), true, true, true)[0]

    backgroundListener = videosTime.subscribe((a) => {
        let time = a[activeOutputId]
        if (!time || !get(activeSlideRecording)) return

        checkTimeDifference(time * 1000)
    })
}

function checkTimeDifference(currentTime: number) {
    // find closest sequence
    let addedTime: number = 0
    let sequenceIndex = get(activeSlideRecording).sequence.findIndex((sequence) => {
        addedTime += sequence.time
        return addedTime > currentTime
    })
    if (sequenceIndex < 0) return

    let sequenceStartTime = addedTime - get(activeSlideRecording).sequence[sequenceIndex].time
    let difference = currentTime - sequenceStartTime

    let margin = 500
    if (difference < margin) return

    let ref = get(activeSlideRecording).ref
    let recording: Recording = _show(ref.showId).layouts([ref.layoutId]).get("recording")[0]?.[0]

    // change recording time if audio time changes!
    playRecording(recording, ref, sequenceIndex, difference)
}

export function stopSlideRecording() {
    if (!get(activeSlideRecording)) return

    clearTimeout(get(activeSlideRecording).timeout)
    activeSlideRecording.set(null)

    if (audioListener) audioListener()
    audioListener = null
}

// slide click update recording to closest same slide
export function getClosestRecordingSlide(ref, slideIndex: number) {
    let activeRec = get(activeSlideRecording)
    if (!activeRec || activeRec.ref.showId !== ref.showId || activeRec.ref.layoutId !== ref.layoutId) return

    let closest = getClosestIndexes(activeRec.index, activeRec.sequence.length)

    let findFirstWithSameSlideIndex = closest.find((index) => activeRec.sequence[index].slideRef.index === slideIndex)
    if (!findFirstWithSameSlideIndex) return

    let recording: Recording = _show(ref.showId).layouts([ref.layoutId]).get("recording")[0]?.[0]
    if (!recording) return

    let index = findFirstWithSameSlideIndex
    playRecording(recording, activeRec.ref, index)

    // change time of playing audio
    let audioPath = get(activeSlideRecording).audioPath
    if (audioPath) playAudioTrack(audioPath, index, recording)
    // change time of playing background
    let backgroundPath = get(activeSlideRecording).backgroundPath
    if (backgroundPath) playVideo(backgroundPath, index, recording)

    // e.g: index=2, [0, 1, 2, 3, 4, 5, 6] = [2, 1, 3, 0, 4, 5, 6]
    function getClosestIndexes(index: number, length: number) {
        const arr = Array.from({ length }, (_, i) => i)
        return arr.sort((a, b) => Math.abs(a - index) - Math.abs(b - index))
        // prefer right values?
        // e.g: index=2, [0, 1, 2, 3, 4, 5, 6] = [2, 3, 1, 4, 0, 5, 6]
        // arr.sort((a, b) => {
        //     const diff = Math.abs(a - index) - Math.abs(b - index);
        //     return diff === 0 ? a - b : diff;
        // })
    }
}

export function updateSlideRecording(state: "next" | "previous") {
    if (get(outLocked)) return

    let ref = get(activeSlideRecording).ref
    let recording: Recording = _show(ref.showId).layouts([ref.layoutId]).get("recording")[0]?.[0]
    if (!recording) return

    let index = get(activeSlideRecording).index
    let increment = 0
    if (state === "next") increment = 1
    else if (state === "previous") increment = -1

    index += increment
    while (recording.sequence[index] && recording.sequence[index]?.time === 0) index += increment

    playRecording(recording, ref, Math.min(recording.sequence.length - 1, Math.max(0, index)))

    // change time of playing audio
    let audioPath = get(activeSlideRecording).audioPath
    if (audioPath) playAudioTrack(audioPath, index, recording)
    // change time of playing background
    let backgroundPath = get(activeSlideRecording).backgroundPath
    if (backgroundPath) playVideo(backgroundPath, index, recording)
}

function playAudioTrack(path: string, index: number, recording: Recording) {
    let playing = get(playingAudio)[path]?.audio
    if (!playing) return

    let recordingTime: number = recording.sequence.slice(0, index).reduce((time, value) => (time += value.time), 0)
    playingAudio.update((a) => {
        let newTime = recordingTime / 1000
        if (newTime > a[path].audio.duration) return a

        a[path].audio.currentTime = newTime
        return a
    })
}

function playVideo(path: string, index: number, recording: Recording) {
    const data = get(videosData)[path] || {}
    if (!data) return

    let recordingTime: number = recording.sequence.slice(0, index).reduce((time, value) => (time += value.time), 0)
    let newTime = recordingTime / 1000
    if (newTime > data.duration) return

    updateVideoTime(newTime)
}

export function playSlideRecording() {
    let showId = get(activeShow)?.id
    let activeLayout = _show(showId).get("settings.activeLayout")
    let recording: Recording | null = _show(showId).layouts([activeLayout]).get("recording")[0]?.[0]
    if (!recording) return

    playRecording(recording, { showId, layoutId: activeLayout })
}
