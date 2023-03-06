<script lang="ts">
    import state from "../../../Storage/AppState";
    import { openApps } from "../../../Storage/AppStores";
    import Clock from "../../Scalable/Clock.svelte";
    import LanguageSelection from "../../Scalable/SettingsOptions/LanguageSelection.svelte";
    import LauncherButton from "../LauncherButton.svelte";
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
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 1fr 8fr 1fr 1.2fr;
        grid-template-columns: 1fr 8fr 1fr 1.2fr;
        /* z-index: 1; */
    }
    .open-apps{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        /* height: var(--toolbar-height); */
    }
</style>
