<script lang="ts">
    import state from "../../../../AppData/Storage/state";
    import { openApps } from "../../../../AppData/Storage/stores";
    import Clock from "../../../../Global/Components/Scalable/Clock.svelte";
    import LanguageSelection from "../LanguageSelection.svelte";
    import LauncherButton from "../../../../AppData/Components/Desktop/LauncherButton.svelte";
    import ToolbarAppIcon from "./ToolbarAppIcon.svelte";

    $: openAppsArr = $openApps
    const allApps = state.apps

</script>

<div id="toolbar" class="glass-strong">
    <div id="launcher">
        <LauncherButton />
    </div>
    <div class="open-apps">
        {#each openAppsArr.sort() as openApp}
            <ToolbarAppIcon id={allApps[openApp].id} icon={allApps[openApp].shortcutIcon} />
        {/each}
    </div>
    <div class="lang">
        <LanguageSelection />
    </div>
    <div class="clock">
        <Clock />
    </div>
</div>

<style>
    #toolbar{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 8fr 1fr 1.2fr;
        /* z-index: 1; */
    }
    .open-apps{
        display: flex;
        align-items: center;
        /* height: var(--toolbar-height); */
    }
</style>
