<script lang="ts">
    import { eIcons } from "../../Storage/GlobalEnums";
    import { activeLang } from "../../Storage/GlobalStores";
    import type { AppProps } from "../../Storage/GlobalTypes";
    import WindowManager from "../../Controllers/WindowManager";
    import IconSelector from "../Scalable/IconSelector.svelte";


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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-animation: openAnim 1s ease-in 0ms linear;
                animation: openAnim 1s ease-in 0ms linear;
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
 </style>