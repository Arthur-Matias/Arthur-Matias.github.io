<script lang="ts">
    import Wallpaper from "../../../Components/Scalable/Wallpaper.svelte";
    import WorkspaceShortcuts from "../../../../AppData/Components/Desktop/WorkspaceShortcuts.svelte";
    import Toolbar from "../../../Components/Desktop/ToolbarComponents/Toolbar.svelte";
    import OpenApps from "../../../../AppData/Components/Desktop/OpenApps.svelte";
    import Launcher from "../../../Components/Desktop/Launcher.svelte";
    import LanguageSelector from "../../../Components/Scalable/LanguageSelector.svelte";
    import Settings from "../../../Components/Scalable/Settings.svelte";
</script>

<div id="workspace-desktop">
    <div class="wallpaper-wrapper">
        <Wallpaper />
    </div>
    <div class="icons-wrapper">
        <WorkspaceShortcuts />
    </div>
    <div class="open-apps">
        <OpenApps />
    </div>
    <div class="launcher">
        <Launcher />
        <LanguageSelector />
        <Settings />
    </div>
    <div class="toolbar">
        <Toolbar />
    </div>
</div>

<style>
    #workspace-desktop{
        height: 100%;
        max-height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .wallpaper-wrapper{
        height: 100%;
        width: 100%;
        position: absolute;
        /* position: absolute; */
        top: 0;
        left: 0;
        /* z-index: 1; */
    }
    .icons-wrapper{
        height: calc(100% - var(--toolbar-height));
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .open-apps{
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .toolbar{
        /* position: absolute; */
        /* left: 0;
        bottom: 0; */
        height: var(--toolbar-height);
        width: 100%;
    }
    .launcher{
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
