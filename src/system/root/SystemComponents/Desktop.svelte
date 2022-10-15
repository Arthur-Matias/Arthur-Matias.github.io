<script lang="ts">
    import state from "../../../consts/state";
    import type { AppProps } from "../../../consts/types";
    import BackgroundImage from "./BackgroundImage.svelte";
    import Shortcut from "../../components/Shortcut.svelte"
    import Launcher from './Launcher.svelte'
    import OpenApps from './OpenApps.svelte'

    const allApps: AppProps[] = state.allApps
</script>

<div id="desktop">
    <BackgroundImage />
    {#each allApps as shortcut}
        <Shortcut onRun={()=>{}} props={shortcut} />
    {/each}
    <div class="empty-space" style="height: 100%; width:100%;"></div>
    <OpenApps />
    <Launcher />
</div>

<style>
    #desktop{
        height: calc(100vh - var(--toolbar-height));
        max-height: calc(100vh - var(--toolbar-height));
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        flex-flow: column wrap;
        align-items: flex-start;
        position: relative;
        margin-bottom: 11vh;
        padding-bottom: var(--toolbar-height);
    }
</style>
