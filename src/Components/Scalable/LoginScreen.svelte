<script lang="ts">
    import Clock from "./Clock.svelte";
    import { activeLang, isMobile } from "../../Storage/GlobalStores";
    import Wallpaper from "./Wallpaper.svelte";
    import ScreenController from "../../Controllers/ScreenController";
    import state from "../../Storage/SystemState";

    let loggedIn = false;
    let currPos = {
        x: 0,
        y: 0,
    };
    let newPos = {
        x: 0,
        y: 0,
    };
    let timeout;
    let moveY = 0;
    function handleKeyDown(e: KeyboardEvent) {
        const time = 700;
        let step = 0;
        setInterval(() => {
            step += window.innerHeight / time;
            moveY -= step;
        }, 10);

        logIn(time);
    }
    function logIn(time) {
        loggedIn = true;
        setTimeout(() => ScreenController.toggleWorkspace(), time);
    }
    function handleTouchStart(e: TouchEvent) {
        if (e.touches[0].pageY > currPos.x) {
            // console.log(e.touches[0].pageY);
            currPos = {
                x: 0,
                y: e.touches[0].pageY,
            };
        }
    }
    function handleTouchEnd(e: TouchEvent) {
        if (newPos.y < currPos.y - 400) {
            logIn(0);
        }
        timeout = setTimeout(() => {
            resetPosition();
        }, 100);
    }
    function handleTouchMove(e: TouchEvent) {
        newPos = {
            x: 0,
            y: e.touches[0].pageY,
        };
        if (newPos.y < currPos.y) {
            clearTimeout(timeout);
            moveY = newPos.y - currPos.y;
            // console.log(newPos);
        }
    }
    function resetPosition() {
        newPos.x = 0;
        newPos.y = 0;
        currPos.x = 0;
        currPos.y = 0;
        moveY = 0;
    }
    function handleMouseDown(e: MouseEvent) {
        if (e.pageY > currPos.x) {
            // console.log(e.pageY);
            currPos = {
                x: 0,
                y: e.pageY,
            };
            newPos = {
                x: 0,
                y: 0,
            };
        }
    }
    function handleMouseMove(e: MouseEvent) {
        newPos = {
            x: 0,
            y: currPos.y - (currPos.y - e.pageY),
        };
        if (newPos.y < currPos.y) {
            clearTimeout(timeout);
            moveY = newPos.y - currPos.y;
            // console.log(newPos);
        }
    }
    function handleMouseUp(e: MouseEvent) {
        if (newPos.y < currPos.y - 400) {
            logIn(200);
        }
        timeout = setTimeout(() => {
            resetPosition();
        }, 50);
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="login">
    <div class="wallpaper">
        <Wallpaper />
    </div>
    <div
        class="login-wrapper glass-strong shadow-big {loggedIn
            ? 'logged'
            : ''} {$isMobile ? 'mobile' : 'desktop'}"
        style="transform: translateY({moveY}px) !important;"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
        on:touchmove={handleTouchMove}
        on:mousedown={handleMouseDown}
        on:mousemove={handleMouseMove}
        on:mouseup={handleMouseUp}
        on:blur={()=>{}}
    >
        <div class="login-section">
            <Clock big={true} />
        </div>
        <div class="login-section" >
            {$isMobile?state.texts[$activeLang].login.mobileMessage:state.texts[$activeLang].login.desktopMessage}
        </div>
    </div>
</div>

<style>
    #login {
        height: 100vh;
        width: 100vw;
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        top: 0;
        left: 0;
        background-color: black;
    }
    .wallpaper {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .login-wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        -webkit-transition: ease-in-out;
        -o-transition: ease-in-out;
        transition: ease-in-out;
    }
    .login-section:last-of-type{
        margin-top: 4rem;
        font-size: 1.6rem;
        justify-self: end;
    }
    .logged {
        -webkit-transform: translateY(-100vh);
        -ms-transform: translateY(-100vh);
        transform: translateY(-100vh);
    }
    @media screen and (orientation:portrait){
        .login-section:last-of-type{
            font-size: 1rem;
        }
    }
</style>
