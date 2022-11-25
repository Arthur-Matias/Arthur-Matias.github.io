<script lang="ts">
    import Clock from "../../Global/Components/Scalable/Clock.svelte";
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";
    import Wallpaper from "../Components/Scalable/Wallpaper.svelte";
    import ScreenController from "../Controllers/ScreenController";
    // import { isBootLoading, activeLang } from "../Storage/stores";

    const logoFill = "none",
          logoStroke = "white",
          logoStrokeSize = 16;


    let loggedIn = false;

    function handleKeyDown(e: KeyboardEvent){
        logIn()
    }
    function logIn(){
        loggedIn = true
        setTimeout(()=>ScreenController.toggleWorkspace(), 800)
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="login">
    <div class="wallpaper">
        <Wallpaper />
    </div>
    <div class="login-wrapper glass-strong shadow-big {loggedIn?"logged":""}">
        <div class="login-section">
            <Clock big={true} />
        </div>
        <div class="login-section">
            
        </div>
    </div>
</div>

<style>
    #login{
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        background-color: black;
    }
    .wallpaper{
        position: absolute;
        height: 100%;
        width: 100%;
        
    }
    .login-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        transition: ease-in-out 700ms;
    }
    .logged{
        transform: translateY(-100vh);
    }
</style>
