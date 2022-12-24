<script lang="ts">
    import Clock from "../../Global/Components/Scalable/Clock.svelte";
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";
    import { isMobile } from "../../Global/consts/stores";
    import Wallpaper from "../Components/Scalable/Wallpaper.svelte";
    import ScreenController from "../Controllers/ScreenController";
    // import { isBootLoading, activeLang } from "../Storage/stores";

    const logoFill = "none",
          logoStroke = "white",
          logoStrokeSize = 16;


    let loggedIn = false;
    let currPos = {
        x: 0,
        y: 0
    }
    let newPos = {
        x: 0,
        y: 0
    }
    let timeout;
    let moveY = 0;
    function handleKeyDown(e: KeyboardEvent){
        const time = 700;
        let step = 0;
        setInterval(()=>{
            step+=window.innerHeight/time
            moveY-=step
        },10)

        logIn(time)
    }
    function logIn(time){
        loggedIn = true
        setTimeout(()=>ScreenController.toggleWorkspace(), time)
    }
    function handleTouchStart(e: TouchEvent){
        if(e.touches[0].pageY > currPos.x){
            console.log(e.touches[0].pageY)
            currPos = {
                x: 0,
                y: e.touches[0].pageY
            }
        }
    }
    function handleTouchEnd(e: TouchEvent){
        if(newPos.y < currPos.y - 200){
                logIn(0)
            }
            timeout = setTimeout(()=>{
                resetPosition()
            }, 100)
    }
    function handleTouchMove(e: TouchEvent){
        newPos = {
            x: 0,
            y: e.touches[0].pageY
        }
        if(newPos.y < currPos.y){
            clearTimeout(timeout)
            moveY = newPos.y - currPos.y;
            console.log(newPos)
        }
    }
    function resetPosition(){
        newPos.x = 0;
        newPos.y = 0;
        currPos.x = 0;
        currPos.y = 0;
        moveY = 0;
    }
    function handleMouseDown(e: MouseEvent){
        if(e.pageY > currPos.x){
            console.log(e.pageY)
            currPos = {
                x: 0,
                y: e.pageY
            }
        }
    }
    function handleMouseMove(e: MouseEvent){
        newPos = {
            x: 0,
            y: e.pageY
        }
        if(newPos.y < currPos.y){
            clearTimeout(timeout)
            moveY = newPos.y - currPos.y;
            console.log(newPos)
        }
    }
    function handleMouseUp(e: MouseEvent){
        if(newPos.y < currPos.y - Math.floor(window.innerHeight/3)){
            logIn(0)
        }
        timeout = setTimeout(()=>{
            resetPosition()
        }, 50)
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="login">
    <div class="wallpaper">
        <Wallpaper />
    </div>
    <div 
        class="login-wrapper glass-strong shadow-big {loggedIn?"logged":""} {$isMobile?"mobile":"desktop"}"
        style="transform: translateY({moveY}px) !important;"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
        on:touchmove={handleTouchMove}
        on:mousedown={handleMouseDown}
        on:mousemove={handleMouseMove}
        on:mouseup={handleMouseUp}
        on:blur={()=>console.log("blurring login")}
    >
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
        transition: ease-in-out;
    }
    .logged{
        transform: translateY(-100vh);
    }
    .login-wrapper.desktop{
        /* transition: ease-in-out 700ms; */
    }
    .login-wrapper.mobile{
        
    }
</style>
