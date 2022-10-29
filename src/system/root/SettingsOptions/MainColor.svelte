<script lang="ts">
    import state from "../../../consts/state";
    import {activeColor} from "../../../consts/stores";
    import ColorController from "../Controllers/ColorController";

    function handleClick(i: number){
        console.log(i)
        if($activeColor !== i){
            ColorController.changeActiveColor(i)
        }
    }
    
</script>

<div id="accent-color-setting">
    {#each ColorController.AllMainColors as color, index}
        <div class="color-btn {$activeColor === index?"active":""}" style="background-color: {color} !important;" on:click={()=>handleClick(index)}></div>
    {/each}
</div>

<style>
    #accent-color-setting{
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem;
    }

    .color-btn{
        aspect-ratio: 1 / 1;
        height: 1rem;
        width: auto;
        border-radius: 50%;
        filter: opacity(.4);
        transition: ease-in-out .1s;
    }
    .color-btn:hover, .color-btn.active{
        filter: opacity(1);
        cursor: pointer;
        box-shadow: 0px 0px 4px var(--bg-dark-transparent);
        border: 2px solid var(--accent);
    }
</style>
