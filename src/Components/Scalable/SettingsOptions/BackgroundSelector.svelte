<script lang="ts">
    import state from "../../../Storage/SystemState";
    import { activeBg } from "../../../Storage/SystemStores";

    const backgroundImages = state.images

    function handleClick(index: number){
        activeBg.set(index)
    }

</script>

<div id="background-selector">
    {#each backgroundImages as image, index}
        <button class="mini-background {$activeBg === index?"active":""}" on:click={()=>handleClick(index)}>
            <img src={image} alt="">
        </button>
    {/each}
</div>

<style>
    #background-selector{
        height: 100%;
        max-height: 300px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -ms-flex-flow: wrap;
            flex-flow: wrap;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        border-radius: 1rem;
        border: .2rem solid transparent;
        -webkit-transition: ease-in-out .2s;
        -o-transition: ease-in-out .2s;
        transition: ease-in-out .2s;
        content-visibility: auto
    }
    .mini-background.active, .mini-background:hover{
        border: .2rem solid var(--accent);
        cursor: pointer;
    }
    .mini-background:active{
        -webkit-transform: scale(.7);
            -ms-transform: scale(.7);
                transform: scale(.7);
    }
    .mini-background>img{
        border-radius: 1rem;
        aspect-ratio: 16 / 9;
        max-width: calc(100% - 1rem);
        content-visibility: auto
    }
</style>
