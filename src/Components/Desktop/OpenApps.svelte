<script lang="ts">
    import state from "../../Storage/AppState";
    import type { AppProps } from "../../Storage/GlobalTypes";
    import { openApps } from "../../Storage/AppStores"
    import Window from "./Window.svelte";
    import WindowWithOptions from "./WindowWithOptions.svelte";

    const allApps: AppProps[] = state.apps;

</script>

<div id="open-apps">
    {#if $openApps.length > 0}
        {#each $openApps as openApp, i}
            {#if allApps[openApp].options}
                <WindowWithOptions props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]}/>
                </WindowWithOptions>
            {:else}
                <Window props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
                </Window>
            {/if}
        {/each}
    {/if}
</div>