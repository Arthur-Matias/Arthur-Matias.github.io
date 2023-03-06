<script lang="ts">
  import { isMobile } from "./Storage/GlobalStores"
  import { screens } from "./Storage/SystemStores"
  import { onMount } from "svelte";
  import { openApps } from "./Storage/AppStores"
  import ScreenController from "./Controllers/ScreenController";
  import LoadingScreen from "./Components/Scalable/LoadingScreen.svelte";
  import LoginScreen from "./Components/Scalable/LoginScreen.svelte"
  import BootScreen from "./Components/Scalable/BootScreen.svelte"
  import Workspace from "./Components/Scalable/Workspace.svelte"
    import WindowManager from "./Controllers/WindowManager";


  function checkIfMobile(){
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    console.log()
    if(
      orientation === "portrait-primary" || 
      windowWidth < windowHeight
    ){
      isMobile.set(true)
    }else{
      isMobile.set(false)
    }
  }
  onMount(checkIfMobile)
  $: workspaceActive = false;
  function activateWorkspace(){
    setTimeout(()=>{
      WindowManager.openApp(0);
      workspaceActive = true;
    }, 100)
    return ""
  }
</script>

<svelte:window on:resize={checkIfMobile} on:keydown={()=>{
  if($screens.isOff){
    ScreenController.toggleBoot()
  }
}} />

<div id="os">
  {#if !$screens.isOff}
    {#if $screens.isBootActive}
      <BootScreen />
    {/if}
    {#if $screens.isLoginActive}
      <LoginScreen />
    {/if}
    {#if $screens.isWorkspaceActive}
      {activateWorkspace()}
      {#if workspaceActive}
        <Workspace />
      {/if}
    {/if}
    {/if}
    {#if $screens.isLoadingActive}
      <div class="loading">
        <LoadingScreen />
      </div>
    {/if}
</div>

<style>
  #os{
      height: 100vh;
      width: 100vw;
      max-width: 100vw;
      max-height: 100vh;
      background-color: black;
      position: static;
  }
  .loading{
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
  }
</style>