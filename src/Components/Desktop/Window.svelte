<script lang="ts">
    import type { AppProps } from "../../Storage/GlobalTypes";
    import { minimizedApps } from "../../Storage/AppStores";
    import WindowManager from "../../Controllers/WindowManager";
    import IconSelector from "../Scalable/IconSelector.svelte";
    import { activeLang } from "../../Storage/GlobalStores";
    import state from "../../Storage/AppState";
    import EventController from "../../Controllers/EventController";

    export let props: AppProps;

    let moving = false;
    $: maximized = false;
    // const eventController = EventController();
    // ------------------------------------------------
    // Window Controls
    // ------------------------------------------------

    function maximize() {
        const windowHeight = window.innerHeight - 76;

        if (props.geometry.currSize.y < windowHeight) {
            maximized = true;

            props.geometry.currSize.x = window.innerWidth;
            props.geometry.currSize.y = windowHeight;
            props.geometry.position.x = 0;
            props.geometry.position.y = 0;
        } else {
            maximized = false;
            props.geometry.currSize.x = props.geometry.minSize.x;
            props.geometry.currSize.y = props.geometry.minSize.y;
            props.geometry.position.x =
                window.innerWidth / 2 - props.geometry.currSize.x / 2;
            props.geometry.position.y =
                window.innerHeight / 2 - props.geometry.currSize.y / 2;
        }
    }
    function close() {
        if (maximized) {
            maximize();
        }
        WindowManager.closeApp(props.id);
    }
    export function minimize() {
        WindowManager.minimizeApp(props.id);
    }

    // ------------------------------------------------
    // Window Drag
    // ------------------------------------------------

    function onMouseDown(e: MouseEvent) {
        if (maximized) {
            maximize();
            props.geometry.position.x = e.pageX - props.geometry.currSize.x / 2;
            props.geometry.position.y = e.pageY;
        }
        moving = true;
    }
    function onMouseMove(e) {
        if (moving) {
            if (
                props.geometry.position.x +
                    e.movementX +
                    props.geometry.currSize.x / 2 <
                    window.innerWidth &&
                props.geometry.position.x + e.movementX >
                    0 - props.geometry.currSize.x / 2
            ) {
                props.geometry.position.x += e.movementX;
            }
            if (
                props.geometry.position.y +
                    e.movementY +
                    props.geometry.currSize.y / 2 <
                    window.innerHeight &&
                props.geometry.position.y + e.movementY > 0
            ) {
                props.geometry.position.y += e.movementY;
            }
        }
    }
    function onMouseUp() {
        moving = false;
    }
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<div
    class="
        window 
        {maximized ? 'maximized ' : 'shadow-light round'} 
        {$minimizedApps.includes(props.id) ? 'minimized' : ''}"
    style={`
        width: ${props.geometry.currSize.x}px; 
        height: ${props.geometry.currSize.y}px; 
        top: ${props.geometry.position.y}px; 
        left: ${props.geometry.position.x}px;
    `}
    on:keydown={() => WindowManager.changeActiveAppIndex(props.id)}
    on:click={() => WindowManager.changeActiveAppIndex(props.id)}
>
    <div
        on:dblclick={maximize}
        on:touchend={maximize}
        
        class={`header ${maximized ? "maximized" : "round-top"}`}
    >
        <div class="window-icon">
            <IconSelector iconName={props.icon} />
        </div>
        <div class="window-name" on:mousedown={onMouseDown}>
            <p>{state.apps[props.id].texts[$activeLang].name}</p>
        </div>
        <div class="window-controls">
            <button 
                class="window-btn minimize" 
                on:click={minimize}
                on:touchend={minimize}
            >
                <div class="btn-icon">
                    <svg
                        class="scale7"
                        viewBox="0 0 11.2 1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1C16 1.26522 15.8946 1.51957 15.7071 1.70711C15.5196 1.89464 15.2652 2 15 2Z"
                            fill="var(--bg-dark)"
                        />
                    </svg>
                </div>
            </button>
            <button 
                class="window-btn maximize" 
                on:click={maximize}
                on:touchend={maximize}
            >
                {#if maximized}
                    <div class="btn-icon">
                        <svg
                            class="scale9"
                            viewBox="0 0 17 17"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.0059 5.00409H12.4259L15.7159 1.71409C15.9042 1.52579 16.01 1.27039 16.01 1.00409C16.01 0.73779 15.9042 0.482395 15.7159 0.294092C15.5276 0.105788 15.2722 0 15.0059 0C14.7396 0 14.4842 0.105788 14.2959 0.294092L11.0059 3.57409V1.00409C11.0059 0.738875 10.9005 0.484522 10.713 0.296985C10.5254 0.109449 10.2711 0.00409174 10.0059 0.00409174C9.74064 0.00409174 9.48629 0.109449 9.29875 0.296985C9.11122 0.484522 9.00586 0.738875 9.00586 1.00409V6.00409C9.00586 6.26931 9.11122 6.52366 9.29875 6.7112C9.48629 6.89873 9.74064 7.00409 10.0059 7.00409H15.0059C15.2711 7.00409 15.5254 6.89873 15.713 6.7112C15.9005 6.52366 16.0059 6.26931 16.0059 6.00409C16.0059 5.73888 15.9005 5.48452 15.713 5.29699C15.5254 5.10945 15.2711 5.00409 15.0059 5.00409Z"
                                fill="var(--bg-dark)"
                            />
                            <path
                                d="M6.0058 9.00391H1.0058C0.740582 9.00391 0.486228 9.10926 0.298692 9.2968C0.111155 9.48434 0.00579834 9.73869 0.00579834 10.0039C0.00579834 10.2691 0.111155 10.5235 0.298692 10.711C0.486228 10.8985 0.740582 11.0039 1.0058 11.0039H3.5758L0.295798 14.2939C0.20207 14.3869 0.127676 14.4975 0.0769072 14.6193C0.0261385 14.7412 0 14.8719 0 15.0039C0 15.1359 0.0261385 15.2666 0.0769072 15.3885C0.127676 15.5103 0.20207 15.6209 0.295798 15.7139C0.388761 15.8076 0.499362 15.882 0.621222 15.9328C0.743081 15.9836 0.873786 16.0097 1.0058 16.0097C1.13781 16.0097 1.26852 15.9836 1.39038 15.9328C1.51223 15.882 1.62284 15.8076 1.7158 15.7139L5.0058 12.4239V15.0039C5.0058 15.2691 5.11116 15.5235 5.29869 15.711C5.48623 15.8986 5.74058 16.0039 6.0058 16.0039C6.27101 16.0039 6.52537 15.8986 6.7129 15.711C6.90044 15.5235 7.0058 15.2691 7.0058 15.0039V10.0039C7.0058 9.73869 6.90044 9.48434 6.7129 9.2968C6.52537 9.10926 6.27101 9.00391 6.0058 9.00391Z"
                                fill="var(--bg-dark)"
                            />
                        </svg>
                    </div>
                {:else}
                    <div class="btn-icon">
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.9999 1C15.9999 0.734784 15.8946 0.48043 15.707 0.292893C15.5195 0.105357 15.2652 0 14.9999 0H9.99994C9.73472 0 9.48037 0.105357 9.29283 0.292893C9.1053 0.48043 8.99994 0.734784 8.99994 1C8.99994 1.26522 9.1053 1.51957 9.29283 1.70711C9.48037 1.89464 9.73472 2 9.99994 2H12.5699L9.28994 5.29C9.19621 5.38296 9.12182 5.49356 9.07105 5.61542C9.02028 5.73728 8.99414 5.86799 8.99414 6C8.99414 6.13201 9.02028 6.26272 9.07105 6.38458C9.12182 6.50644 9.19621 6.61704 9.28994 6.71C9.3829 6.80373 9.4935 6.87812 9.61536 6.92889C9.73722 6.97966 9.86793 7.0058 9.99994 7.0058C10.132 7.0058 10.2627 6.97966 10.3845 6.92889C10.5064 6.87812 10.617 6.80373 10.7099 6.71L13.9999 3.42V6C13.9999 6.26522 14.1053 6.51957 14.2928 6.70711C14.4804 6.89464 14.7347 7 14.9999 7C15.2652 7 15.5195 6.89464 15.707 6.70711C15.8946 6.51957 15.9999 6.26522 15.9999 6V1Z"
                                fill="var(--bg-dark)"
                            />
                            <path
                                d="M6.71 9.28994C6.61704 9.19621 6.50644 9.12182 6.38458 9.07105C6.26272 9.02028 6.13201 8.99414 6 8.99414C5.86799 8.99414 5.73728 9.02028 5.61542 9.07105C5.49356 9.12182 5.38296 9.19621 5.29 9.28994L2 12.5699V9.99994C2 9.73472 1.89464 9.48037 1.70711 9.29283C1.51957 9.1053 1.26522 8.99994 1 8.99994C0.734784 8.99994 0.48043 9.1053 0.292893 9.29283C0.105357 9.48037 0 9.73472 0 9.99994V14.9999C0 15.2652 0.105357 15.5195 0.292893 15.707C0.48043 15.8946 0.734784 15.9999 1 15.9999H6C6.26522 15.9999 6.51957 15.8946 6.70711 15.707C6.89464 15.5195 7 15.2652 7 14.9999C7 14.7347 6.89464 14.4804 6.70711 14.2928C6.51957 14.1053 6.26522 13.9999 6 13.9999H3.42L6.71 10.7099C6.80373 10.617 6.87812 10.5064 6.92889 10.3845C6.97966 10.2627 7.0058 10.132 7.0058 9.99994C7.0058 9.86793 6.97966 9.73722 6.92889 9.61536C6.87812 9.4935 6.80373 9.3829 6.71 9.28994Z"
                                fill="var(--bg-dark)"
                            />
                        </svg>
                    </div>
                {/if}
            </button>
            <button 
                class="window-btn close" 
                on:click={close}
                on:touchend={close}
                >
                <div class="btn-icon">
                    <svg
                        class="scale6"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                            fill="var(--bg-dark)"
                        />
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <div class="content {maximized ? '' : 'round-bottom'}">
        <slot />
    </div>
</div>

<style>
    .window {
        
        z-index: 1;
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }
    .window.maximized {
        top: 0 !important;
        -webkit-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
        -o-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    }
    .window.minimized {
        -webkit-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        -o-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        top: 100vh !important;
        left: -20% !important;
        -webkit-transform: scale(0);
            -ms-transform: scale(0);
                transform: scale(0);
        -webkit-filter: opacity(0);
                filter: opacity(0);
    }
    .header {
        background-color: var(--bg-dark);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -ms-grid-row: 1;
            grid-row-start: 1;
        -ms-grid-row-span: 1;
        grid-row-end: 2;
        width: 100%;
        height: 3rem;
        min-height: 2rem;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        margin-bottom: -0.1rem;
        text-transform: capitalize;
        color: var(--accent);
        font-size: 1rem;
    }
    .header.maximized {
        height: 3rem;
        min-height: 3rem;
    }
    .window-controls {
        min-width: 5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-right: 0.2rem;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        padding: 0.1rem;
    }
    .window-btn {
        border-radius: 1rem;
        background-color: aliceblue;
        height: 1rem;
        width: 1rem;
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
    .btn-icon {
        height: 100%;
        width: 100%;
        color: var(--bg-dark);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        text-align: center;
        position: relative;
    }
    .btn-icon > svg {
        /* left: 50%; */
        /* transform: scale(.9); */
        -webkit-filter: opacity(0);
                filter: opacity(0);
    }
    .scale7 {
        -webkit-transform: scaleX(0.7) !important;
            -ms-transform: scaleX(0.7) !important;
                transform: scaleX(0.7) !important;
    }
    .scale6 {
        /* margin-top: 50%; */
        -webkit-transform: scale(0.6) !important;
            -ms-transform: scale(0.6) !important;
                transform: scale(0.6) !important;
    }
    .scale9 {
        -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
                transform: scale(0.9);
    }
    .btn-icon.rotate {
        -webkit-transform: rotate(30);
            -ms-transform: rotate(30);
                transform: rotate(30);
    }
    .minimize {
        background-color: #12b101;
        -webkit-box-shadow: 0px 0px 4px rgba(18, 177, 1, 0.6);
                box-shadow: 0px 0px 4px rgba(18, 177, 1, 0.6);
    }
    .maximize {
        background-color: #ecba00;
        -webkit-box-shadow: 0px 0px 4px rgba(236, 186, 0, 0.6);
                box-shadow: 0px 0px 4px rgba(236, 186, 0, 0.6);
    }
    .maximize > .btn-icon {
        -webkit-transform: scale(0.7);
            -ms-transform: scale(0.7);
                transform: scale(0.7);
    }
    .close {
        background-color: #cd0042;
        -webkit-box-shadow: 0px 0px 4px rgba(205, 0, 66, 0.6);
                box-shadow: 0px 0px 4px rgba(205, 0, 66, 0.6);
    }
    .window-btn:hover {
        -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
                box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
    .window-btn:hover > .btn-icon > svg {
        -webkit-filter: opacity(1);
                filter: opacity(1);
    }
    .window-icon {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        height: 1.2rem;
        width: 2rem;
        padding: 0.5rem;
        position: relative;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }
    .content {
        height: 100%;
        width: 100%;
        max-width: 100%;
        overflow-y: auto;
        background-color: var(--bg-dark);
        -webkit-box-shadow: inset 0 0.5rem 0.8rem -0.5rem rgba(0, 0, 0, 0.4);
                box-shadow: inset 0 0.5rem 0.8rem -0.5rem rgba(0, 0, 0, 0.4);
    }
    .window.maximized .content{
        height: calc(100% - 2rem);
    }
    .window-name {
        width: 100%;
        cursor: -webkit-grab;
        cursor: grab;
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
    .window-name:active {
        cursor: -webkit-grabbing;
        cursor: grabbing;
    }
</style>
