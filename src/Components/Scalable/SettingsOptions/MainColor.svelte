<script lang="ts">
    import { activeColor } from '../../../Storage/GlobalStores';
    import ColorController from "../../../Controllers/ColorController";

    function handleClick(i: number){
        // console.log(i)
        if($activeColor !== i){
            ColorController.changeActiveColor(i)
        }
    }
    
</script>

<div id="accent-color-setting">
    {#each ColorController.AllMainColors as color, index}
        <button class="color-btn {$activeColor === index?"active":""}" style="background-color: {color} !important;" on:click={()=>handleClick(index)}></button>
    {/each}
</div>

<style>
    #accent-color-setting{
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

    .color-btn{
        aspect-ratio: 1 / 1;
        height: 2rem;
        width: auto;
        border-radius: 50%;
        -webkit-filter: opacity(.4);
                filter: opacity(.4);
        -webkit-transition: ease-in-out .1s;
        -o-transition: ease-in-out .1s;
        transition: ease-in-out .1s;
    }
    .color-btn:hover, .color-btn.active{
        -webkit-filter: opacity(1);
                filter: opacity(1);
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 4px var(--bg-dark-transparent);
                box-shadow: 0px 0px 4px var(--bg-dark-transparent);
        border: 2px solid var(--accent);
    }
</style>
