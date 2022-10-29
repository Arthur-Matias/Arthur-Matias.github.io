<script lang="ts">
    import state from "../../../consts/state";
    import type { AppProps } from "../../../consts/types";
    import { openApps, activeLang } from "../../../consts/stores";
    import Window from "../../components/Window.svelte";
    import WindowWithOptions from "../../components/WindowWithOptions.svelte";

    const allApps: AppProps[] = state.allApps;
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