<script lang="ts">

  import { isMobile } from "./Global/consts/stores"
  import { screens} from "./SystemData/Storage/stores";
  import LoadingScreen from "./Global/Components/Scalable/LoadingScreen.svelte"
  import Workspace from "./SystemData/Screens/WorkspaceScreen/Scalable/Workspace.svelte";
  import BootScreen from "./SystemData/Screens/BootScreen.svelte";
  import LoginScreen from "./SystemData/Screens/LoginScreen.svelte";
    import { onMount } from "svelte";

  function checkIfMobile(){
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log()
    if(
      screen.orientation.type === "portrait-primary" || 
      windowWidth < windowHeight
    ){
      isMobile.set(true)
    }else{
      isMobile.set(false)
    }
  }
  onMount(checkIfMobile)
</script>

<svelte:window on:resize={checkIfMobile} />

<div id="os">
  {#if !$screens.isOff}
    {#if $screens.isBootActive}
      <BootScreen />
    {/if}
    {#if $screens.isLoginActive}
      <LoginScreen />
    {/if}
    {#if $screens.isWorkspaceActive}
      <Workspace />
    {/if}
    {#if $screens.isLoadingActive}
      <LoadingScreen />
    {/if}
  {/if}
</div>

<style>
  #os{
      height: 100vh;
      width: 100vw;
      max-width: 100vw;
      max-height: 100vh;
      background-color: black;
      position: relative;
  }
</style>