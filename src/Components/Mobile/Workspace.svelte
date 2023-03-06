<script lang="ts">
    import state from "../../Storage/AppState";
    import { eIcons } from "../../Storage/GlobalEnums";
    import { isLauncherOpen } from "../../Storage/SystemStores";
    import { openApps } from "../../Storage/AppStores";
    import OpenAppsMobile from "./OpenAppsMobile.svelte";
    import Clock from "../Scalable/Clock.svelte";
    import AllApps from "../Scalable/AllApps.svelte";
    import AppIcon from "../Scalable/AppIcon.svelte";
    import Wallpaper from "../Scalable/Wallpaper.svelte";
    import IconSelector from "../Scalable/IconSelector.svelte";

    const apps = state.apps;
    let launcherEl: HTMLDivElement;
    let timeout;

    let initialPos = {
        x: 0,
        y: 0,
    };
    let currPos = {
        x: 0,
        y: 0,
    };
    let moveY = 0;
    function handleTouchStart(e: TouchEvent) {
        initialPos.x = e.touches[0].pageX;
        initialPos.y = e.touches[0].pageY;
    }
    function handleTouchMove(e: TouchEvent) {
        currPos = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY,
        };
        if (currPos.y > initialPos.y) {
            clearTimeout(timeout);
            moveY = currPos.y - initialPos.y;
            // console.log(currPos);
        }
    }
    function handleTouchEnd() {
        if (currPos.y > initialPos.y + 200) {
            isLauncherOpen.set(false);
        }
        timeout = setTimeout(() => {
            resetPosition();
        }, 100);
    }
    function resetPosition() {
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
                    <AppIcon
                        props={app}
                        openAtfirstClick={true}
                        iconColor={"var(--accent)"}
                        onRun={() => {}}
                    />
                {/if}
            {/each}
        </div>
        <div class="menu-btn-container">
            <button
                on:click={() => isLauncherOpen.set(true)}
                class="menu-btn glass-light shadow-medium"
            >
                <div>
                    <IconSelector iconName={eIcons.menu} />
                </div>
            </button>
        </div>
        {#if $isLauncherOpen}
            <div
                bind:this={launcherEl}
                class="launcher-container glass-strong"
                style="top: {moveY}px;"
                on:touchstart={handleTouchStart}
                on:touchmove={handleTouchMove}
                on:touchend={handleTouchEnd}
            >
                <AllApps />
            </div>
        {/if}
        {#if $openApps.length > 0}
            <div class="open-apps-container">
                <OpenAppsMobile />
            </div>
        {/if}
        <header class="glass-light">
            <div class="running-apps-container">
                <IconSelector />
            </div>
            <div class="system-stats-container">
                <div class="header-icon">
                    <IconSelector iconName={eIcons.mobileNetwork} />
                </div>
                <div class="header-icon">
                    <IconSelector iconName={eIcons.wifi} />
                </div>
                <div class="header-icon">
                    <IconSelector iconName={eIcons.battery} />
                </div>
            </div>
        </header>
    </div>
</div>

<style>
    #workspace-mobile {
        height: 100%;
        max-height: 100%;
        width: 100%;
        color: white;
        position: relative;
        overflow: hidden;
    }
    .workspace-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .workspace-wrapper > header {
        z-index: 3;
        position: fixed;
        left: 0;
        top: 0;
        height: 2rem;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .wrapper {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .wallpaper-wrapper {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .clock-container {
        height: 16.3rem;
        width: 16.3rem;
        border-radius: 50%;
        margin-top: 8rem;
        background: -o-radial-gradient(
            50% 50%,
            50% 50%,
            rgba(0, 0, 0, 0.3) 92.71%,
            rgba(255, 255, 255, 0) 100%
        );
        background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(0, 0, 0, 0.3) 92.71%,
            rgba(255, 255, 255, 0) 100%
        );
        -webkit-filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.3));
    }
    .menu-btn-container {
        position: absolute;
        bottom: 1rem;
        left: 0;
        height: 5.3rem;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 2;
    }
    .menu-btn {
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        padding: 1.3rem;
        border-radius: 50%;
    }
    .menu-btn:active{
        transform: scale(.9);
        transition: ease-in 0s;
    }
    .menu-btn > div {
        height: 100%;
        width: 100%;
    }
    .menu-btn:active > div {
        -webkit-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
    }
    .apps-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 300px;
        padding: 0 2rem;
        z-index: 1;
    }
    .launcher-container {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
        padding-top: 2rem;
    }
    .open-apps-container {
        position: absolute;
        left: 0;
        top: 0;
        /* background-color: black; */
        height: 100%;
        width: 100%;
        z-index: 2;
    }
    .running-apps-container {
        height: 60%;
        margin-left: 0.8rem;
    }
    .system-stats-container {
        height: 70%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .header-icon {
        margin-right: 0.8rem;
        height: 70%;
    }
    @media screen and (max-height: 600px) {
        .clock-container {
            margin-top: 3rem;
            /* height: 11rem;
            width: 11rem; */
        }

        .apps-container {
            height: 200px;
        }
    }
    @media screen and (max-height: 450px) {
        .apps-container {
            height: 100px;
        }
    }
</style>
