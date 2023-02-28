<script lang="ts">
    import { PageStorage } from "../../../Storage/AppStores" 
    import About from "./About.svelte";
    import FindMe from "./FindMe.svelte";
    import Home from "./Home.svelte";
    import NavBarAbout from "./NavBarAbout.svelte";

    export let props;
</script>

<div id="page">
    <NavBarAbout props={props}/>
    {#if $PageStorage.isHomeActive}
        <Home props={props}/>
    {:else if $PageStorage.isAboutActive}
        <About props={props}/>
    {:else if $PageStorage.isFindMeActive}
        <FindMe props={props}/>
    {/if}
</div>

<style>
   #page{
        height: 100%;
        width: 100%;
        position: static;
        background-color: var(--bg-dark);
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
   }
</style>
