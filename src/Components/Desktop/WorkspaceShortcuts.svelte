<script lang="ts">
    import Shortcut from "./Shortcut.svelte";
    import state from "../../Storage/AppState";

    let arr = state.apps

</script>

<div id="workspace-icons">
    {#each arr as item, index}    
        {#if !item.mobileOnly}
            <Shortcut
                onRun={() => {}}
                iconColor="var(--accent)"
                openAtfirstClick={false}
                props={item}
                index={index}
            />  
        {/if}
    {/each}
</div>

<style>
    #workspace-icons {
        height: 100%;
        max-height: 100%;
        width: 100%;
        color: white;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: start;
        justify-items: start;
        -ms-flex-line-pack: start;
            align-content: flex-start;
    }
</style>
