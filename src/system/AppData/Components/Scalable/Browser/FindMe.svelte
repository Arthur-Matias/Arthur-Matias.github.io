<script lang="ts">
    import state from "../../../Storage/state";
    import Logo from "../../../../Global/Components/Scalable/Icons/Logo.svelte";
    import { activeLang, isMobile }  from '../../../../Global/consts/stores'
    import {openApps } from "../../../Storage/stores" 
    import { onMount, onDestroy } from "svelte";
    import type { AppProps } from "../../../../Global/consts/types";
    import IconSelector from "../../../../Global/Components/Scalable/IconSelector.svelte";
    const fillColor = "var(--bg-light)"


    export let props: AppProps;
    
</script>

<div id="find-me">
   <h2>{props.texts[$activeLang].social.title}</h2>
   <p>{props.texts[$activeLang].social.description}</p>
   <div class="social-icons">
    {#each props.texts[$activeLang].social.social as socialLink}
        <a href="{socialLink.link}">
            <IconSelector iconName={socialLink.icon} />
        </a>
    {/each}
   </div>
</div>

<style>

    #find-me{
        height: 100%;
        width: 80%;
        padding-top: 2rem;
    }
    #find-me h2{
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    #find-me p{
        margin-bottom: 2rem;
    }
    .social-icons{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .social-icons a{
        height: 100%;
    }
    .social-icons a:not(:first-of-type){
        margin-left: 2rem;
    }
    @media screen and (orientation:portrait) { 

    }
</style>
