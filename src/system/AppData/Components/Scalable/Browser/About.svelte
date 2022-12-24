<script lang="ts">
    import { activeLang } from "../../../../Global/consts/stores";
    import type { AppProps } from "../../../../Global/consts/types";
    import state from "../../../Storage/state";
    // import VectorDraw from "../VectorDraw.svelte";
    export let props: AppProps;
    $: mouseOver = false
    
    function onMouseOver(e:MouseEvent){
        mouseOver = true
    }
    function onMouseOut(e:MouseEvent){
        mouseOver = false
    }

</script>

<div id="about">
    <section>
        <div class="image-container" on:mouseover={onMouseOver} on:mouseout={onMouseOut} on:focus={()=>{}} on:blur={()=>{}}>
            {#if mouseOver}
                <div class="photo">

                </div>
            {:else}
                <!-- <VectorDraw /> -->
            {/if}
        </div>
    </section>
    <section class="text-wrapper">
        <h2>
            {props.texts[$activeLang].title}
        </h2>
        {#each props.texts[$activeLang].texts as text}
            <p>
                {text}
            </p>
        {/each}
    </section>
    <!-- COMPONENT HERE -->
</div>

<style>
    #about{
        position: static;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
   }
   #about > section{ 
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
   }
   .image-container{
        height: 50%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
   }
   .photo{
        height: 100%;
        width: 100%;
        background-image: url("/photo.png");
        background-position: top;
        background-size: 135%;
        background-repeat: no-repeat;
        border-radius: 50%;
        background-color: var(--bg-light);
   }
   .text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 1rem;
        position: relative;
   }
   .text-wrapper > p{
        font-size: 1rem;
        max-width: 80%;
        align-self: flex-start;
        hyphens: auto;
        text-align: justify;
   }
   .text-wrapper > p:first-of-type{
    margin-bottom: 1rem;
   }
   .text-wrapper > h2 {
        font-size: 2rem;
        align-self: flex-start;
        margin-bottom: 1rem;
        text-transform: uppercase;
        color: var(--main-color);
        font-family: distant-galaxy;
   }
   @media screen and (orientation:portrait) { 
        #about{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .image-container{
            width: 80%;
            aspect-ratio: 1 / 1;
            /* margin-top: 22rem; */
            margin-bottom: 2rem;
        }
        #about > section{ 
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .text-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-bottom: 2rem;
        }
    }
</style>
