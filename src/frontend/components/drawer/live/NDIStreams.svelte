<script lang="ts">
    import { onDestroy } from "svelte"
    import { NDI } from "../../../../types/Channels"
    import { outLocked, outputs } from "../../../stores"
    import { destroy, receive, send } from "../../../utils/request"
    import { getActiveOutputs, setOutput } from "../../helpers/output"
    import T from "../../helpers/T.svelte"
    import Loader from "../../main/Loader.svelte"
    import { clearBackground } from "../../output/clear"
    import Center from "../../system/Center.svelte"
    import NDIStream from "./NDIStream.svelte"

    let sources: { name: string; id: string }[] = []

    $: currentOutput = $outputs[getActiveOutputs()[0]] || {}

    let loading: boolean = true
    const receiveNDI = {
        RECEIVE_LIST: (msg) => {
            loading = false
            if (!msg || sources.length) return

            sources = JSON.parse(msg).map(({ name, urlAddress }) => ({ name, id: urlAddress }))
        },
    }

    send(NDI, ["RECEIVE_LIST"])
    receive(NDI, receiveNDI, "NDI_CAPTURE")
    onDestroy(() => destroy(NDI, "NDI_CAPTURE"))
</script>

{#if loading}
    <Center>
        <Loader />
    </Center>
{:else if sources.length}
    {#each sources as screen}
        <NDIStream
            {screen}
            on:click={(e) => {
                if ($outLocked || e.ctrlKey || e.metaKey) return
                if (currentOutput.out?.background?.id === screen.id) clearBackground()
                else setOutput("background", { id: screen.id, type: "ndi" })
            }}
        />
    {/each}
{:else}
    <Center faded>
        <T id="empty.general" />
    </Center>
{/if}
