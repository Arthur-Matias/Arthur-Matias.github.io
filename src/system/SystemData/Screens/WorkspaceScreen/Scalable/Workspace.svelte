<script lang="ts">
    import { isMobile } from "../../../../Global/consts/stores";
    import WorkspaceMobile from "../Mobile/index.svelte";
    import WorkspaceDesktop from "../Desktop/index.svelte";
    
</script>

<div id="workspace">
    {#if $isMobile}
        <WorkspaceMobile />
    {:else}
        <WorkspaceDesktop />
    {/if}
</div>

<style>
    #workspace{
        height: 100%;
        max-height: 100%;
        width: 100%;
    }
</style>
