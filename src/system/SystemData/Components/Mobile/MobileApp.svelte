<script lang="ts">
    import IconSelector from "../../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons } from "../../../Global/consts/enums";
    import { activeLang } from "../../../Global/consts/stores";
    import type { AppProps } from "../../../Global/consts/types";
    import WindowManager from "../../Controllers/WindowManager";


    export let props: AppProps;
 </script>
 
 <div id="mobile-app">
    <header class="controls shadow-inset-light">
        <button class="app-control-btn" style="transform: scale(.6);">
            <!-- <IconSelector iconName={eIcons.menu} /> -->
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
 </div>
 
 <style>
     #mobile-app{
        height: 100%;
        width: 100%;
        background-color: var(--bg-dark);
        overflow: hidden;
        position: relative;
        padding-top: 7rem;
        display: flex;
        animation: openAnim 1s ease-in 0ms linear;
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
        overflow-y: auto;
        overflow-x: hidden;
        
    }
    .app-control-btn:first-of-type{
        margin-left: 10%;
    }
    .app-control-btn:last-of-type{
        margin-right: 10%;
    }
 </style>