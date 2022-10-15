<script lang="ts">
    import state from "../../../consts/state";
    import type { AppProps } from "../../../consts/types";
    import { openApps } from "../../../consts/stores";
    import Window from "../../components/Window.svelte";

    $: openAppsArr = $openApps;
    const allApps: AppProps[] = state.allApps;
</script>

<div id="open-apps">
    {#if openAppsArr.length}
        {#each openAppsArr as openApp}
            <Window props={allApps[openApp]}>
                <svelte:component this={allApps[openApp].appContent} props={allApps[openApp]} />
            </Window>
        {/each}
    {/if}
</div>