<script lang="ts">
    import { activeLang, isLanguageSelectionOpen } from "../../../consts/stores";
    import type { lang } from "../../../consts/types";
    import LanguageSelector from "./LanguageSelector.svelte";

    let active = false;

    function showOptions(){
        console.log($isLanguageSelectionOpen)
        isLanguageSelectionOpen.update(()=>!$isLanguageSelectionOpen)
    }
    function toggleOptions(){
        active = !active
    }
</script>

<div 
    id="language-button" 
    on:click={showOptions} 
    on:mouseover={toggleOptions} 
    on:mouseout={toggleOptions}
    on:focus={()=>{console.log("focus")}}
    on:blur={()=>{console.log("blur")}}
    >
    <p class={$isLanguageSelectionOpen?"glass-inset round":""}>{$activeLang}</p>
    <LanguageSelector />
</div>

<style>
    #language-button{
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
        text-transform: uppercase;
        cursor: pointer;
        user-select: none;
    }
    #language-button p{
        padding: 1rem;
    }
</style>
