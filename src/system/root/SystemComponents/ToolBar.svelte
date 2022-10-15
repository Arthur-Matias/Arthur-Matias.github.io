<script lang="ts">
    import state from "../../../consts/state";
    import { openApps } from "../../../consts/stores";
    import Clock from "../../components/Clock.svelte";
    import LanguageSelection from "./LanguageSelection.svelte";
    import LauncherButton from "./LauncherButton.svelte";
    import ToolbarAppIcon from "../../components/ToolbarAppIcon.svelte";

    $: openAppsArr = $openApps
    const allApps = state.allApps

</script>

<div id="toolbar" class="glass-dark">
    <div id="launcher">
        <LauncherButton />
    </div>
    <div class="open-apps">
        {#each openAppsArr as openApp}
            <ToolbarAppIcon id={allApps[openApp].id} icon={allApps[openApp].icon} />
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
        height: var(--toolbar-height);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: grid;
        grid-template-columns: 1fr 9fr 1fr 1.2fr;
        z-index: 3;
    }
    .open-apps{
        display: flex;
        align-items: center;
        height: var(--toolbar-height);
    }
</style>
