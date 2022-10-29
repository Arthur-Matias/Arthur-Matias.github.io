<script lang="ts">
    import Logo from "../Logo.svelte";
    import type { Link } from "../../../consts/types";
    import state from "../../../consts/state";
    import { activeLang } from "../../../consts/stores";

    const logoFillColor = "var(--main-color)";

</script>

<div id="nav-bar-about">
    <div class="section">
        <Logo animated={false} fill={logoFillColor}/>
    </div>
    <div class="section">
        {#each state.allTexts[$activeLang].about.links as link}
            <div class="about-link" on:click={link.exec}>{link.name}</div>
        {/each}
    </div>
    <div class="section">

    </div>
</div>

<style>
   #nav-bar-about{
       display: flex;
       align-items: center;
       justify-content: space-around;
       width: 100%;
       height: 2rem;
       align-self: flex-start;
       justify-self: flex-start;
       padding-top: .5rem;
    }
    #nav-bar-about .section{
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about-link{
        color: var(--accent);
        text-decoration: none;
        text-transform: capitalize;
        filter: opacity(.7);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about-link:first-of-type{
        margin-right: 1rem;
    }
    .about-link:hover{
        filter: opacity(1);
    }
</style>
