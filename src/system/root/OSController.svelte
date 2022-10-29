<script lang="ts">
    import LoadingScreen from "../components/LoadingScreen.svelte";
    
    import ToolBar from "./SystemComponents/ToolBar.svelte";
    
    import Desktop from "./SystemComponents/Desktop.svelte";
    import Settings from "./SystemComponents/Settings.svelte";
    import { isBootLoading, isTurnedOff } from "../../consts/stores";
    import Boot from "./SystemComponents/Boot.svelte";

    isBootLoading.set(true)

    isTurnedOff.set(false)
    function handleKeyDown(e: KeyboardEvent){
        if($isTurnedOff){
            if( e.key === "Enter" || e.code === "Space" ){
                isBootLoading.set(true)
                isTurnedOff.set(false)
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown}/>

<div id="os">
    {#if !$isTurnedOff}
        <Desktop/>
        <ToolBar/>
        <Settings />
        <LoadingScreen />
        <Boot />
    {/if}
</div>

<style>
    #os{
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        background-color: black;
        position: relative;
    }
</style>
