<script lang="ts">
    import Logo from "../../../../Global/Components/Scalable/Icons/Logo.svelte";
    import type { Link } from "../../../../Global/consts/types";
    import state from "../../../Storage/state";
    import { activeLang } from "../../../../Global/consts/stores";

    const logoFillColor = "var(--main-color)";
    export let props;
</script>

<div id="nav-bar-about">
    <div class="section">
        <Logo animated={false} fill={logoFillColor}/>
    </div>
    <div class="section">
        {#each props.links[$activeLang] as link}
            <button class="about-link" on:click={link.exec}>{link.name}</button>
        {/each}
    </div>
    <div class="section">

    </div>
</div>

<style>
   #nav-bar-about{
       display: -webkit-box;
       display: -ms-flexbox;
       display: flex;
       -webkit-box-align: center;
           -ms-flex-align: center;
               align-items: center;
       -ms-flex-pack: distribute;
           justify-content: space-around;
       width: 100%;
       height: 2rem;
       -ms-flex-item-align: start;
           align-self: flex-start;
       justify-self: flex-start;
       padding-top: .5rem;
       padding-bottom: .5rem;
       -webkit-box-shadow: 0px 1px 1px rgba(0,0,0, 0.6);
               box-shadow: 0px 1px 1px rgba(0,0,0, 0.6);
    }
    #nav-bar-about .section{
        height: 100%;
        width: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .about-link{
        color: var(--accent);
        text-decoration: none;
        text-transform: capitalize;
        -webkit-filter: opacity(.7);
                filter: opacity(.7);
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .about-link:first-of-type{
        margin-right: 1rem;
    }
    .about-link:hover{
        -webkit-filter: opacity(1);
                filter: opacity(1);
    }
</style>
