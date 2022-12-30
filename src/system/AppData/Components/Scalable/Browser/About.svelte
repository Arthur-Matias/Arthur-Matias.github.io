<script lang="ts">
    import IconSelector from "../../../../Global/Components/Scalable/IconSelector.svelte";
import { activeLang } from "../../../../Global/consts/stores";
    import type { AppProps } from "../../../../Global/consts/types";
    import state from "../../../Storage/state";
    import VectorDraw from "../VectorDraw.svelte";
    import SoftSkill from "./SoftSkill.svelte";
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
                <div class="photo"></div>
            {:else}
                <div class="vector">
                    <VectorDraw />
                </div>
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
        <h2 class="hard-skills-title">
            {props.texts[$activeLang].skills.hard.title}
        </h2>
        <div class="hard-skills">
            {#each props.texts[$activeLang].skills.hard.skills as skill}
                <a href="{skill.link}">
                    {skill.text}
                </a>
                ,&nbsp
            {/each}
        </div>
    </section>
    <section>
        <div class="soft-skills">
            <h2>{props.texts[$activeLang].skills.soft.title}</h2>
            <div class="skills">
                {#each props.texts[$activeLang].skills.soft.skills as softSkill}
                    <SoftSkill name={softSkill.name} value={softSkill.value} />
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    #about{
        height: calc(100% - 4rem);
        width: 90%;
        display: grid;
        grid-template-columns: 4fr 7fr 7fr;
        overflow-y: auto;
        padding-top: 2rem;
        justify-items: center;
        align-items: center;
        
    }
    #about section{
        height: 100%;
        width: 100%;
    }
    .image-container{
        height: 100%;
        width: 100%;
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-wrapper > *{
        width: 80%;
    }
    .text-wrapper h2{
        font-size: 2rem;
        color: var(--main-color);
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 2rem;
    }
    .photo{
        background-image: url("/me-img.png");
        height: 100%;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .vector{
        /* width: 80%; */
        height: 30%;
    }
    .soft-skills{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        align-items: center;
    }
    .soft-skills h2{
        font-size: 1.6rem;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
    .skills{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    h2.hard-skills-title{
        color: var(--accent);
        font-size: 1.6rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .hard-skills{
        display: flex;
        flex-wrap: wrap;
        
        text-align: center;
        justify-content: center;
        margin-bottom: 2rem;
    }
   @media screen and (orientation:portrait) { 
        
    }
</style>
