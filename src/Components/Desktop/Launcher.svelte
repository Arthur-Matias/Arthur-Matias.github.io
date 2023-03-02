<script lang="ts">
    import state from "../../Storage/AppState";
    import type { AppProps } from "../../Storage/GlobalTypes";
    import AllApps from "../Scalable/AllApps.svelte";
    import ScreenController from "../../Controllers/ScreenController";
    import {
        isLauncherOpen,
        settingsTrayOpen,
    } from "../../Storage/SystemStores";

    let w: number, h: number;
    let toolbarHeight = 76;
    const shortcuts: AppProps[] = state.apps;
    function handleWindowClick(mouse: MouseEvent) {
        if ($isLauncherOpen && !checkIfInside(mouse)) {
            closeLauncher();
        }
    }
    function checkIfInside(e: MouseEvent) {
        let rem = 16,
            xRange = e.clientX > 0.9 * rem && e.clientX < 1.1 * rem + w,
            yRange =
                e.clientY > window.innerHeight - toolbarHeight - 1 * rem - h &&
                e.clientY < window.innerHeight - toolbarHeight - 1 * rem;

        return xRange && yRange;
    }
    function closeLauncher() {
        isLauncherOpen.set(false);
    }

    function openConfigOptions() {
        setTimeout(() => {
            settingsTrayOpen.set(true);
            closeLauncher();
        }, 50);
    }
    function turnOff() {
        ScreenController.toggleLoading();
        
        setTimeout(() => {
            closeLauncher();
            ScreenController.turnOff();
        }, 3000);
    }
</script>

<svelte:window on:click={handleWindowClick} />

<div
    id="launcher"
    bind:offsetHeight={h}
    bind:offsetWidth={w}
    class="{$isLauncherOpen ? 'open' : ''} round"
>
    <span />
    <span id="apps" class="round">
        <AllApps />
    </span>
    <span id="options">
        <div class="btn-wrapper">
            <button id="config" class="option-btn" on:click={openConfigOptions}>
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.32 7.37H17.23C17.09 7.37 16.99 7.26 16.93 7.11C16.8943 7.05491 16.8753 6.99066 16.8753 6.925C16.8753 6.85934 16.8943 6.79509 16.93 6.74L17.74 6C17.8987 5.8473 18.0249 5.66401 18.1108 5.4612C18.1968 5.25839 18.2407 5.04027 18.24 4.82C18.2398 4.59839 18.1955 4.37905 18.1096 4.17474C18.0238 3.97043 17.8981 3.78526 17.74 3.63L16.4 2.26C16.2448 2.10368 16.0602 1.97962 15.8568 1.89497C15.6534 1.81031 15.4353 1.76672 15.215 1.76672C14.9947 1.76672 14.7766 1.81031 14.5732 1.89497C14.3698 1.97962 14.1852 2.10368 14.03 2.26L13.26 3C13.1988 3.0392 13.1277 3.06004 13.055 3.06004C12.9823 3.06004 12.9112 3.0392 12.85 3C12.7896 2.97748 12.7369 2.93827 12.6979 2.88692C12.659 2.83558 12.6354 2.77422 12.63 2.71V1.68C12.6302 1.24297 12.4601 0.823057 12.1557 0.509395C11.8514 0.195732 11.4368 0.0130069 11 2.59345e-10H9.06C8.61351 -7.81621e-06 8.18516 0.176672 7.86851 0.491449C7.55186 0.806226 7.37264 1.23352 7.37 1.68V2.77C7.37 2.91 7.26 3.01 7.11 3.07C7.05491 3.10573 6.99066 3.12474 6.925 3.12474C6.85934 3.12474 6.79509 3.10573 6.74 3.07L6 2.26C5.68328 1.94517 5.25653 1.76586 4.81 1.76C4.58991 1.76043 4.37212 1.80489 4.16947 1.89076C3.96682 1.97663 3.7834 2.10217 3.63 2.26L2.26 3.6C2.09911 3.75571 1.97118 3.94219 1.88381 4.14834C1.79644 4.35449 1.75142 4.5761 1.75142 4.8C1.75142 5.0239 1.79644 5.24551 1.88381 5.45166C1.97118 5.65781 2.09911 5.84429 2.26 6L3 6.74C3.0392 6.80119 3.06004 6.87233 3.06004 6.945C3.06004 7.01767 3.0392 7.08881 3 7.15C2.97748 7.21038 2.93827 7.26313 2.88692 7.30208C2.83558 7.34103 2.77422 7.36458 2.71 7.37H1.68C1.23444 7.37 0.807122 7.547 0.492061 7.86206C0.177 8.17712 2.59346e-10 8.60444 2.59345e-10 9.05V10.94C-7.81621e-06 11.3865 0.176672 11.8148 0.491449 12.1315C0.806226 12.4481 1.23352 12.6274 1.68 12.63H2.77C2.91 12.63 3.01 12.74 3.07 12.89C3.10573 12.9451 3.12474 13.0093 3.12474 13.075C3.12474 13.1407 3.10573 13.2049 3.07 13.26L2.26 14C1.94517 14.3167 1.76586 14.7435 1.76 15.19C1.75966 15.4117 1.80372 15.6312 1.8896 15.8356C1.97547 16.04 2.10142 16.2251 2.26 16.38L3.6 17.74C3.75522 17.8963 3.93984 18.0204 4.14322 18.105C4.34659 18.1897 4.56471 18.2333 4.785 18.2333C5.00529 18.2333 5.22341 18.1897 5.42678 18.105C5.63016 18.0204 5.81478 17.8963 5.97 17.74L6.74 17C6.80119 16.9608 6.87233 16.94 6.945 16.94C7.01767 16.94 7.08881 16.9608 7.15 17C7.21038 17.0225 7.26313 17.0617 7.30208 17.1131C7.34103 17.1644 7.36458 17.2258 7.37 17.29V18.38C7.38555 18.8151 7.56939 19.2271 7.88278 19.5293C8.19617 19.8315 8.61464 20.0003 9.05 20H10.94C11.3865 20 11.8148 19.8233 12.1315 19.5086C12.4481 19.1938 12.6274 18.7665 12.63 18.32V17.23C12.63 17.09 12.74 16.99 12.89 16.93C12.9451 16.8943 13.0093 16.8753 13.075 16.8753C13.1407 16.8753 13.2049 16.8943 13.26 16.93L14.02 17.7C14.3367 18.0148 14.7635 18.1941 15.21 18.2C15.4301 18.1996 15.6479 18.1551 15.8505 18.0692C16.0532 17.9834 16.2366 17.8578 16.39 17.7L17.73 16.36C17.8863 16.2048 18.0104 16.0202 18.095 15.8168C18.1797 15.6134 18.2233 15.3953 18.2233 15.175C18.2233 14.9547 18.1797 14.7366 18.095 14.5332C18.0104 14.3298 17.8863 14.1452 17.73 13.99L17 13.26C16.9643 13.2049 16.9453 13.1407 16.9453 13.075C16.9453 13.0093 16.9643 12.9451 17 12.89C17.0225 12.8296 17.0617 12.7769 17.1131 12.7379C17.1644 12.699 17.2258 12.6754 17.29 12.67H18.38C18.8134 12.6545 19.2239 12.4721 19.5259 12.1608C19.8278 11.8496 19.9977 11.4336 20 11V9.06C20 8.61351 19.8233 8.18516 19.5086 7.86851C19.1938 7.55186 18.7665 7.37264 18.32 7.37ZM10 13.5C9.30777 13.5 8.63108 13.2947 8.0555 12.9101C7.47993 12.5256 7.03133 11.9789 6.76642 11.3394C6.50151 10.6999 6.4322 9.99612 6.56725 9.31718C6.7023 8.63825 7.03564 8.01461 7.52513 7.52513C8.01461 7.03564 8.63825 6.7023 9.31718 6.56725C9.99612 6.4322 10.6999 6.50151 11.3394 6.76642C11.9789 7.03133 12.5256 7.47993 12.9101 8.0555C13.2947 8.63108 13.5 9.30777 13.5 10C13.5 10.9283 13.1313 11.8185 12.4749 12.4749C11.8185 13.1313 10.9283 13.5 10 13.5Z"
                        fill="var(--accent)"
                    />
                </svg>
            </button>

            <button id="shut-down" class="option-btn" on:click={turnOff}>
                <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 12C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12Z"
                        fill="var(--accent)"
                    />
                    <path
                        d="M14.59 2.1099C14.354 1.9879 14.0791 1.96466 13.826 2.0453C13.5728 2.12594 13.362 2.30385 13.24 2.5399C13.118 2.77594 13.0948 3.05078 13.1754 3.30395C13.2561 3.55713 13.434 3.7679 13.67 3.8899C15.2635 4.71257 16.5343 6.04676 17.2785 7.67831C18.0228 9.30987 18.1972 11.1442 17.7739 12.8868C17.3506 14.6294 16.3541 16.1792 14.9444 17.2876C13.5346 18.3959 11.7933 18.9984 10 18.9984C8.20672 18.9984 6.46544 18.3959 5.05566 17.2876C3.64588 16.1792 2.64937 14.6294 2.22607 12.8868C1.80277 11.1442 1.97725 9.30987 2.72148 7.67831C3.46572 6.04676 4.73656 4.71257 6.33001 3.8899C6.44688 3.82949 6.55072 3.74665 6.63558 3.64611C6.72044 3.54558 6.78467 3.42931 6.8246 3.30395C6.86453 3.17859 6.87938 3.0466 6.86829 2.9155C6.85721 2.7844 6.82042 2.65677 6.76001 2.5399C6.6996 2.42302 6.61676 2.31919 6.51623 2.23432C6.41569 2.14946 6.29942 2.08523 6.17406 2.0453C6.0487 2.00537 5.91671 1.99053 5.78561 2.00161C5.65451 2.01269 5.52688 2.04949 5.41001 2.1099C3.4187 3.13868 1.83074 4.80662 0.900977 6.84605C-0.0287877 8.88547 -0.246451 11.1781 0.282919 13.3561C0.812288 15.534 2.058 17.471 3.82013 18.8561C5.58226 20.2413 7.75864 20.9943 10 20.9943C12.2414 20.9943 14.4178 20.2413 16.1799 18.8561C17.942 17.471 19.1877 15.534 19.7171 13.3561C20.2465 11.1781 20.0288 8.88547 19.099 6.84605C18.1693 4.80662 16.5813 3.13868 14.59 2.1099Z"
                        fill="var(--accent)"
                    />
                </svg>
            </button>
        </div>
    </span>
</div>

<style>
    #launcher {
        position: absolute;
        display: -ms-grid;
        display: grid;
        display: none;
        left: 1rem;
        height: 64vh;
        width: 64vh;
        aspect-ratio: 1/1;
        z-index: 2;
        -ms-grid-rows: 5vh 1fr 5vh;
        grid-template-rows: 5vh 1fr 5vh;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transition: ease 0.2s;
        -o-transition: ease 0.2s;
        transition: ease 0.2s;

        background-color: var(--bg-dark-transparent);
        -webkit-backdrop-filter: blur(32px);
        backdrop-filter: blur(32px);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        bottom: -100vh;
    }
    #launcher.open {
        display: -ms-grid;
        display: grid;
        -webkit-transition: ease 0.2s;
        -o-transition: ease 0.2s;
        transition: ease 0.2s;
        -webkit-filter: opacity(1);
        filter: opacity(1);
        -webkit-animation: open-anim 0.2s forwards;
        animation: open-anim 0.2s forwards;
        bottom: calc(var(--toolbar-height) + 1rem);
    }
    #apps {
        width: 100%;
        height: 100%;
        max-width: 60vh;
        width: 60vh;
        max-height: 55vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        background-color: var(--bg-dark-transparent);
    }

    #options {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }
    .btn-wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        height: 70%;
    }
    .option-btn {
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        width: 100%;
        padding: 0.5rem;
        margin-left: 0.5rem;
        background-color: var(--bg-dark-transparent);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
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
    .option-btn > svg {
        height: 1rem;
    }
    .option-btn > svg:active {
        -webkit-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
    }
    .option-btn:hover {
        cursor: pointer;
        background-color: var(--bg-dark-transparent);
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
    }
    @-webkit-keyframes open-anim {
        from {
            bottom: -100vh;
            -webkit-filter: opacity(1);
            filter: opacity(1);
        }
        to {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            bottom: calc(var(--toolbar-height) + 1rem);
            -webkit-filter: opacity(0);
            filter: opacity(0);
        }
    }
    @keyframes open-anim {
        from {
            bottom: -100vh;
            -webkit-filter: opacity(1);
            filter: opacity(1);
        }
        to {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            bottom: calc(var(--toolbar-height) + 1rem);
            -webkit-filter: opacity(1);
            filter: opacity(1);
        }
    }
</style>
