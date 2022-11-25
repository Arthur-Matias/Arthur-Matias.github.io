<script lang="ts">
    import state from "../../Storage/state";
    import type { AppProps } from "../../../Global/consts/types";
    import { activeLang } from "../../../Global/consts/stores";
    import { openApps } from "../../Storage/stores"
    import Window from "../../../SystemData/Components/Desktop/Window.svelte";
    import WindowWithOptions from "../../../SystemData/Components/Desktop/WindowWithOptions.svelte";

    const allApps: AppProps[] = state.apps;
</script>

<div id="open-apps">
    {#if $openApps.length > 0}
        {#each $openApps as openApp, i}
            {#if allApps[openApp].options}
                <WindowWithOptions props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
                </WindowWithOptions>
            {:else}
                <Window props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
                </Window>
            {/if}
        {/each}
    {/if}
</div>