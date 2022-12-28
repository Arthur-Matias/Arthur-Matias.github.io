<script lang="ts">

  import { isMobile } from "./Global/consts/stores"
  import { screens} from "./SystemData/Storage/stores";
  import LoadingScreen from "./Global/Components/Scalable/LoadingScreen.svelte"
  import Workspace from "./SystemData/Screens/WorkspaceScreen/Scalable/Workspace.svelte";
  import BootScreen from "./SystemData/Screens/BootScreen.svelte";
  import LoginScreen from "./SystemData/Screens/LoginScreen.svelte";
  import { onMount } from "svelte";
    import ScreenController from "./SystemData/Controllers/ScreenController";
    import { openApps } from "./AppData/Storage/stores";

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
      $openApps.push(0);
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