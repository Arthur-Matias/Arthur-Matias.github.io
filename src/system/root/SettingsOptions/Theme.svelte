<script lang="ts">
    import state from "../../../consts/state";
    import { eThemeMode } from "../../../consts/enums";
    import {activeLang, activeTheme} from "../../../consts/stores";
    import ColorController from "../Controllers/ColorController";

    function handleClick(mode: eThemeMode){
        
        console.log($activeTheme !== mode)
        if ($activeTheme !== mode) {
            ColorController.changeActiveTheme(mode)
        }
    }

</script>

<div id="theme-setting">
    <div 
        class="theme-option {$activeTheme == eThemeMode.Dark?"active":""}"
        on:click={()=>handleClick(eThemeMode.Dark)}
    >
        {state.allTexts[$activeLang].config.options[1].options[0]}
    </div>
    <div 
        class="theme-option {$activeTheme == eThemeMode.Light?"active":""}"
        on:click={()=>handleClick(eThemeMode.Light)}
    >
        {state.allTexts[$activeLang].config.options[1].options[1]}
    </div>
</div>

<style>
    #theme-setting{
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: .2rem;
    }
    .theme-option{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 3rem;
    }
    .theme-option:hover, .theme-option.active{
        background-color: var(--bg-dark);
        box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.60);
        cursor: pointer;
    }
</style>
