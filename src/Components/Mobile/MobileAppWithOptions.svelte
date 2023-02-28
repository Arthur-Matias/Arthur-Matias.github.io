<script lang="ts">
    import IconSelector from "../Scalable/IconSelector.svelte";
    import { eIcons } from "../../Storage/GlobalEnums";
    import { activeLang } from "../../Storage/GlobalStores";
    import type { AppProps } from "../../Storage/GlobalTypes";
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
        <h3>
            {props.texts[$activeLang].name}
        </h3>
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
     }
     .controls{
        position: fixed;
        top: 2rem;
        height: 2rem;
        width: 100%;
        left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        background-color: var(--bg-light);
        padding: 1rem 0;
     }
     .app-control-btn{
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        
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
    .content{
        height: calc(100% - 7rem);
        width: 100%;
        /* display: flex; */
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .options-menu.open{
        -webkit-animation: slideFromLeft .3s;
                animation: slideFromLeft .3s;
    }
    
    .option-wrapper{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 4rem;
        width: 100%;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
    .option-wrapper:hover{
        -webkit-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    }
    .option-wrapper:active{
        -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.6);
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

    @-webkit-keyframes slideFromLeft{
        0%{
            -webkit-transform: translateX(-300px);
                    transform: translateX(-300px);
        }
        100%{
            -webkit-transform: translateX((0));
                    transform: translateX((0));
        }
    }

    @keyframes slideFromLeft{
        0%{
            -webkit-transform: translateX(-300px);
                    transform: translateX(-300px);
        }
        100%{
            -webkit-transform: translateX((0));
                    transform: translateX((0));
        }
    }
 </style>