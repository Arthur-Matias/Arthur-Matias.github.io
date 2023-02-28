<script lang="ts">
    import { isMobile } from "../../Storage/GlobalStores"
    import WorkspaceMobile from "../Mobile/Workspace.svelte";
    import WorkspaceDesktop from "../Desktop/Workspace.svelte";
    
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
