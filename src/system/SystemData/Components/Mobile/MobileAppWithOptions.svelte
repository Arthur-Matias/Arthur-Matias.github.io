<script lang="ts">
    import IconSelector from "../../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons } from "../../../Global/consts/enums";
    import { activeLang } from "../../../Global/consts/stores";
    import type { AppProps } from "../../../Global/consts/types";
    import WindowManager from "../../Controllers/WindowManager";

    let menuElement: HTMLDivElement;
    export let props: AppProps;
    $: optionsOpen = false;
    
    function toggleOptions(){
        optionsOpen = !optionsOpen
        console.log("open/close menu")
    }
    function handleWindowClick(e: MouseEvent){
        if(optionsOpen && checkIfOutside(e)){
            toggleOptions()
            console.log("open/close menu")
        }
    }
    function checkIfOutside(e: MouseEvent) {
        
        let xRange = (e.clientX > menuElement.offsetWidth && (e.clientX < window.innerWidth));
            // yRange = (e.clientY > && (e.clientY < (window.innerHeight - toolbarHeight - 1*rem))

        return xRange
    }
    function handleOptionClick(option){
        toggleOptions()
        option.run()
    }
 </script>
 
 <svelte:window on:click={handleWindowClick} />

 <div id="mobile-app">
    <header class="controls shadow-inset-light">
        <button class="app-control-btn" style="transform: scale(.6);" on:click={toggleOptions}>
            <IconSelector iconName={eIcons.menu} />
        </button>
        <button class="app-control-btn" on:click={()=>WindowManager.closeApp(props.id)}>
            <IconSelector iconName={eIcons.close} />
        </button>
    </header>
    <div class="content">
        <slot />
    </div>
    {#if optionsOpen}
        <div bind:this={menuElement} class="options-menu {optionsOpen?"open":""}">
            {#each props.options as option, index}
                <button class="option-wrapper" on:click={()=>handleOptionClick(option)}>
                    <div class="option-icon">
                        <IconSelector iconName={option.icon} />
                    </div>
                    <div class="option-text">
                        {props.texts[$activeLang].options[index]}
                    </div>
                </button>
            {/each}
        </div>
    {/if}
 </div>
 
 <style>
     #mobile-app{
        height: 100%;
        width: 100%;
        background-color: var(--bg-dark);
        overflow-y: hidden;
        position: relative;
        padding-top: 7rem;
        display: flex;
     }
     .controls{
        position: fixed;
        top: 2rem;
        height: 2rem;
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--bg-light);
        padding: 1rem 0;
     }
     .app-control-btn{
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        height: calc(100% - 7rem);
        width: 100%;
        /* display: flex; */
        position: relative;
        
    }
    .app-control-btn:first-of-type{
        margin-left: 10%;
    }
    .app-control-btn:last-of-type{
        margin-right: 10%;
    }
    .options-menu{
        position: absolute;
        left: 0;
        top: 4rem;
        width: 15rem;
        height: calc(100% - 4rem);
        background-color: var(--bg-light);
        display: flex;
        flex-direction: column;
    }
    .options-menu.open{
        animation: slideFromLeft .3s;
    }
    
    .option-wrapper{
        display: flex;
        height: 4rem;
        width: 100%;
        align-items: center;
    }
    .option-wrapper:hover{
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    }
    .option-wrapper:active{
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
    }
    .option-icon{
        /* width: 100%; */
        height: 40%;
        aspect-ratio: 1 / 1;
        margin-right: 2rem;
        margin-left: 1rem;
    }
    .option-text{
        /* font-size: 1rem; */
        font-weight: bolder;
        text-transform: capitalize;
    }

    @keyframes slideFromLeft{
        0%{
            transform: translateX(-300px);
        }
        100%{
            transform: translateX((0));
        }
    }
 </style>