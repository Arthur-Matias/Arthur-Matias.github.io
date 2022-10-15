<script lang="ts">
    import state from "../../../consts/state";
    import type { eThemeMode } from "../../../consts/enums";
    import { transparency } from "../../../consts/stores";
    import ColorController from "../Controllers/ColorController";

    let value = 60;

    function handleInput(){
        const opacity = value/100
        transparency.set(opacity)
        ColorController.updateColors()
    }

</script>

<div id="transparency">
    <input type="range" name="transparency" id="transparency-input" start="{value}" min="0" max="100" step="1" on:input={handleInput} bind:value={value}>
</div>

<style>
    #transparency{
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem;
    }
    #transparency>input{
        width: 100%;
    }
</style>
