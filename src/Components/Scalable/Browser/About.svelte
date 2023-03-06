<script lang="ts">
    import type { AppProps } from "../../../Storage/GlobalTypes";
    import { activeLang, isMobile } from "../../../Storage/GlobalStores";
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
    {#if !$isMobile}
        <section class="image-wrapper">
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
    {/if}
    <section class="text-wrapper">
        <div>
            <h2>
                {props.texts[$activeLang].title}
            </h2>
            {#each props.texts[$activeLang].texts as text}
                <p>
                    {text}
                </p>
            {/each}
        </div>
        <div>
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
        height: calc(100% - 8rem);
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
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image-container{
        height: 80%;
        width: 80%;
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .text-wrapper > *{
        width: 80%;
    }
    .text-wrapper > div > p{
        text-align: left;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .vector{
        width: 100%;
    }
    .soft-skills{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        align-items: center;
        justify-content: center;
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
        #about{
            display: flex;
            flex-direction: column;
        }
    }
</style>
