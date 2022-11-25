<script lang="ts">
    import state from "../../../../AppData/Storage/state";
    import Wallpaper from "../../../Components/Scalable/Wallpaper.svelte";
    import Clock from "../../../../Global/Components/Scalable/Clock.svelte";
    import IconSelector from "../../../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons } from "../../../../Global/consts/enums";
    import AppIcon from "../../../Components/Scalable/AppIcon.svelte";
    import { isLauncherOpen } from "../../../Storage/stores";
    import { openApps } from "../../../../AppData/Storage/stores";
    import OpenAppsMobile from "../../../../AppData/Components/Mobile/OpenAppsMobile.svelte";

    const apps = state.apps
    let launcherEl: HTMLDivElement;
    let timeout;

    let initialPos = {
        x: 0,
        y: 0
    }
    let currPos = {
            x: 0,
            y: 0
    }
    let moveY = 0
    function handleTouchStart(e: TouchEvent){
        initialPos.x = e.touches[0].pageX
        initialPos.y = e.touches[0].pageY
    }
    function handleTouchMove(e: TouchEvent){
        
        currPos = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        }
        if(currPos.y > initialPos.y){
            clearTimeout(timeout)
            moveY = currPos.y - initialPos.y;
            console.log(currPos)
        }
        
    }
    function handleTouchEnd(){
        if(currPos.y > initialPos.y + 200){
                isLauncherOpen.set(false)
            }
            timeout = setTimeout(()=>{
                resetPosition()
            }, 100)
    }
    function resetPosition(){
        currPos.x = 0;
        currPos.y = 0;
        initialPos.x = 0;
        initialPos.y = 0;
        moveY = 0;
    }
</script>

<div id="workspace-mobile">
    <div class="wallpaper-wrapper">
        <Wallpaper />
    </div>
    <div class="workspace-wrapper">
        <div class="wrapper">
            <div class="clock-container glass-light shadow-medium">
                <Clock big={true} />
            </div>
        </div>
        <div class="apps-container">
            {#each apps as app, i}
                {#if i < 4}
                    <AppIcon props={app} openAtfirstClick={true} iconColor={"var(--accent)"} onRun={()=>{}}/>
                {/if}
            {/each}
        </div>
        <div class="menu-btn-container">
            <button on:click={()=>isLauncherOpen.set(true)} class="menu-btn glass-light shadow-medium">
                <div>
                    <IconSelector iconName={eIcons.menu} />
                </div>
            </button>
        </div>
        {#if $isLauncherOpen}
            <div bind:this={launcherEl} class="launcher-container glass-strong" style="top: {moveY}px;" on:touchstart={handleTouchStart} on:touchmove={handleTouchMove} on:touchend={ handleTouchEnd } >
                <!-- <Launcher onRun={()=>{isLauncherOpen.set(false)}} /> -->
            </div>
        {/if}
        {#if $openApps.length > 0}
            <div class="open-apps-container">
                <OpenAppsMobile />
            </div>
        {/if}
        <header class="glass-light">
            <div class="running-apps-container">
    
            </div>
            <div class="system-stats-container">
                
            </div>
        </header>
    </div>
</div>

<style>
    #workspace-mobile{
        height: 100%;
        max-height: 100%;
        width: 100%;
        color: white;
        position: relative;
        overflow: hidden;
    }
    .workspace-wrapper{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    .workspace-wrapper > header{
        z-index: 3;
        position: fixed;
        left: 0;
        top: 0;
        height: 2rem;
        width: 100%;
    }
    .wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wallpaper-wrapper{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .clock-container{
        height: 12rem;
        width: 12rem;
        border-radius: 50%;
        margin-top: 6rem;
    }
    .menu-btn-container{
        position: absolute;
        bottom: 1rem;
        left: 0;
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    .menu-btn{
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        padding: 1.3rem;
        border-radius: 50%;
    }
    .menu-btn > div{
        height: 100%;
        width: 100%;
    }
    .menu-btn:active > div{
        transform: scale(.7);
    }
    .apps-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        padding: 0 2rem;
        z-index: 1;
    }
    .launcher-container{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
        
    }
    .open-apps-container{
        position: absolute;
        left: 0;
        top: 0;
        /* background-color: black; */
        height: 100%;
        width: 100%;
        z-index: 2;
    }
    @media screen and (max-height: 600px){
        .clock-container{
            margin-top: 3rem;
        }
        .apps-container{
            height: 200px;
        }
    }
</style>
