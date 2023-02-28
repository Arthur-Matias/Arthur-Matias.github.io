<script lang="ts">
    import state from "../../Storage/AppState";
    import type { AppProps } from "../../Storage/GlobalTypes";
    import { openApps } from "../../Storage/AppStores"
    import MobileApp from "./MobileApp.svelte";
    import MobileAppWithOptions from "./MobileAppWithOptions.svelte";

    const allApps: AppProps[] = state.apps;
</script>

<div id="open-apps">
        {#each $openApps as openApp, i}
            {#if allApps[openApp].options}
                <MobileAppWithOptions props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
                </MobileAppWithOptions>
            {:else}
                <MobileApp props={allApps[openApp]}>
                    <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
                </MobileApp>
            {/if}
        {/each}
</div>

<style>
    #open-apps{
        top: 2rem;
        height: calc(100% - 2rem);
        width: 100%;
        position: relative;
        overflow-y: hidden;
    }
</style>