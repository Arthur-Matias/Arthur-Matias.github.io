<script lang="ts">
    import state from "../../../Storage/state";
    import { eThemeMode } from "../../../../Global/consts/enums";
    import {activeLang, activeTheme} from "../../../../Global/consts/stores";
    import ColorController from "../../../Controllers/ColorController";

    function handleClick(mode: eThemeMode){
        
        console.log($activeTheme !== mode)
        if ($activeTheme !== mode) {
            ColorController.changeActiveTheme(mode)
        }
    }

</script>

<div id="theme-setting">
    <button 
        class="theme-option {$activeTheme == eThemeMode.Dark?"active":""}"
        on:click={()=>handleClick(eThemeMode.Dark)}
    >
        {state.texts[$activeLang].config.options[1].options[0]}
    </button>
    <button 
        class="theme-option {$activeTheme == eThemeMode.Light?"active":""}"
        on:click={()=>handleClick(eThemeMode.Light)}
    >
        {state.texts[$activeLang].config.options[1].options[1]}
    </button>
</div>

<style>
    #theme-setting{
        height: 100%;
        width: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        padding: .2rem;
    }
    .theme-option{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        height: 4rem;
    }
    .theme-option:hover, .theme-option.active{
        background-color: var(--bg-dark);
        -webkit-box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.60);
                box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.60);
        cursor: pointer;
    }
</style>
