<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import { Main } from "../../../../types/IPC/Main"
    import { sendMain } from "../../../IPC/main"
    import { os, outputs } from "../../../stores"
    import { findMatchingOut } from "../../helpers/output"
    import SelectElem from "../../system/SelectElem.svelte"
    import Card from "../Card.svelte"

    interface Cam {
        id: string
        name: string
        group: string
    }
    export let cam: Cam
    export let item: boolean = false
    export let style: string = ""

    let loaded: boolean = false
    // $: active = $outBackground?.type === "camera" && $outBackground.id === cam.id

    let videoElem: HTMLVideoElement | undefined

    // https://stackoverflow.com/questions/33761770/what-constraints-should-i-pass-to-getusermedia-in-order-to-get-two-video-media
    // https://blog.addpipe.com/getusermedia-video-constraints/
    let constraints = {
        video: {
            deviceId: { exact: cam.id },
            groupId: cam.group,
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            // aspectRatio: 1.777777778,
            // frameRate: { max: 30 },
            // facingMode: { exact: "user" }
        },
    }

    let error: null | string = null

    onMount(capture)

    function capture() {
        error = ""

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((mediaStream) => {
                if (!videoElem) return

                videoElem.srcObject = mediaStream
                loaded = true
                videoElem.play()
            })
            .catch((err) => {
                let msg: string = err.message
                if (err.name === "NotReadableError") {
                    msg += "<br />Maybe it's in use by another program."
                    sendMain(Main.ACCESS_CAMERA_PERMISSION)
                }
                error = err.name + ":<br />" + msg
                loaded = true

                // retry
                if ($os.platform === "darwin") setTimeout(capture, 5000)
            })
    }

    onDestroy(() => {
        if (!videoElem) return
        ;(videoElem.srcObject as MediaStream)?.getTracks()?.forEach((track) => track.stop())
        videoElem.srcObject = null
    })
</script>

{#if item}
    {#if !error}
        <video style="width: 100%;height: 100%;{style}" bind:this={videoElem}>
            <track kind="captions" />
        </video>
    {/if}
{:else}
    <Card class="context #live_card" {loaded} outlineColor={findMatchingOut(cam.id, $outputs)} active={findMatchingOut(cam.id, $outputs) !== null} on:click label={cam.name} icon="camera" white={!cam.id.includes("cam")} showPlayOnHover>
        <SelectElem id="camera" data={{ id: cam.id, type: "camera", name: cam.name, cameraGroup: cam.group }} draggable>
            {#if error}
                <div class="error">
                    {@html error}
                </div>
            {:else}
                <video bind:this={videoElem}>
                    <track kind="captions" />
                </video>
            {/if}
        </SelectElem>
    </Card>
{/if}

<style>
    /* video {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  } */

    video {
        aspect-ratio: 1920/1080;
    }

    .error {
        align-self: center;
        text-align: center;
        color: #ff9a9a;
    }
</style>
