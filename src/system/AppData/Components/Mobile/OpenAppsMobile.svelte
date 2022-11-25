<script lang="ts">
    import state from "../../Storage/state";
    import type { AppProps } from "../../../Global/consts/types";
    import { activeLang } from "../../../Global/consts/stores";
    import { openApps } from "../../Storage/stores"
    import MobileApp from "../../../SystemData/Components/Mobile/MobileApp.svelte";
    import MobileAppWithOptions from "../../../SystemData/Components/Mobile/MobileAppWithOptions.svelte";

    const allApps: AppProps[] = state.apps;
</script>

<div id="open-apps">
    {#if $openApps.length > 0}
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
    {/if}
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