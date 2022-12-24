<script lang="ts">
    import { isHomeActive } from "../../../Storage/stores" 
    import About from "./About.svelte";
    import Home from "./Home.svelte";
    import NavBarAbout from "./NavBarAbout.svelte";

    export let props;
</script>

<div id="page">
    <NavBarAbout props={props}/>
    {#if $isHomeActive}
        <Home props={props}/>
    {:else}
        <About props={props}/>
    {/if}
</div>

<style>
   #page{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: var(--bg-dark);
        overflow-y: auto;
   }
</style>
