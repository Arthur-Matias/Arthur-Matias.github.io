<script lang="ts">
    import { homeActive } from "../../../consts/stores" 
    import About from "./About.svelte";
    import Home from "./Home.svelte";
    import NavBarAbout from "./NavBarAbout.svelte";
</script>

<div id="page">
    <NavBarAbout />
    {#if $homeActive}
        <Home />
    {:else}
        <About />
    {/if}
</div>

<style>
   #page{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--bg-dark);
   }
</style>
