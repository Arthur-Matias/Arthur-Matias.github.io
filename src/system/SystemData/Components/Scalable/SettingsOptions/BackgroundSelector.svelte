<script lang="ts">
    import state from "../../../Storage/state";
    import { activeBg } from "../../../Storage/stores";

    const backgroundImages = state.images

    function handleClick(index: number){
        activeBg.set(index)
    }

</script>

<div id="background-selector">
    {#each backgroundImages as image, index}
        <button class="mini-background {$activeBg === index?"active":""}" on:click={()=>handleClick(index)}>
            <img preload="true" src={image} alt="">
        </button>
    {/each}
</div>

<style>
    #background-selector{
        height: 100%;
        max-height: 300px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        padding-top: 1rem;
        padding-bottom: 1rem;
        overflow-y: auto;
    }
    .mini-background{
        margin: .5rem 0;
        width: 40%;
        aspect-ratio: 16 / 9;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        border: .2rem solid transparent;
        transition: ease-in-out .2s;
        content-visibility: auto
    }
    .mini-background.active, .mini-background:hover{
        border: .2rem solid var(--accent);
        cursor: pointer;
    }
    .mini-background:active{
        transform: scale(.7);
    }
    .mini-background>img{
        border-radius: 1rem;
        aspect-ratio: 16 / 9;
        max-width: calc(100% - 1rem);
        content-visibility: auto
    }
</style>
