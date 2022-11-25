<script lang="ts">
    import Wallpaper from "../../../SystemData/Components/Scalable/Wallpaper.svelte";
    import Shortcut from "./Shortcut.svelte";
    import { eIcons } from "../../../Global/consts/enums";
    import state from "../../Storage/state";

    let arr = state.apps

</script>

<div id="workspace-icons">
    {#each arr as item, index}    
        <Shortcut
            onRun={() => {}}
            iconColor="var(--accent)"
            openAtfirstClick={false}
            props={item}
            index={index}
        />
    {/each}
</div>

<style>
    #workspace-icons {
        height: 100%;
        max-height: 100%;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: start;
        justify-items: start;
        align-content: flex-start;
    }
</style>
