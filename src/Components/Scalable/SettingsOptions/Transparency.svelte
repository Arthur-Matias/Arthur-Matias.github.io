<script lang="ts">
    import { transparency } from '../../../Storage/GlobalStores'
    import ColorController from "../../../Controllers/ColorController";

    $: value = 60;

    function handleInput(){
        const opacity = value/100
        transparency.set(opacity)
        ColorController.updateColors()
    }

</script>

<div id="transparency">
    <input type="range" name="transparency" id="transparency-input" min="0" max="100" step="1" on:input={handleInput} bind:value={value}>
</div>

<style>
    #transparency{
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
        padding: 1rem;
    }
    #transparency>input{
        width: 100%;
    }
</style>
