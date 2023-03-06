<script lang="ts">
    import state from '../../Storage/AppState';
    import IconSelector from "./IconSelector.svelte"
    import type { AppProps } from '../../Storage/GlobalTypes';
    import WindowManager from '../../Controllers/WindowManager';
    import { activeLang } from '../../Storage/GlobalStores';


    export let iconColor = "var(--accent)";
    export let props: AppProps;
    export let openAtfirstClick = false;
    export let onRun: ()=>void | undefined;
    

    let isSelected:boolean = false;
    let isMouseOver: boolean = false;

    let element: HTMLButtonElement;
    let elemRect: DOMRect;
    let rem = 16;

    $: if(element){
        elemRect = element.getBoundingClientRect()
    }
    function MouseOver(){
        isMouseOver=true
    }
    function MouseOut(){
        isMouseOver=false
    }
    function handleClick(){
        // console.log("one click")
        setTimeout(()=>{
            isSelected = true
        }, 10)
        if(openAtfirstClick){
            if(onRun){
                onRun()
            }
            WindowManager.openApp(props.id)
        }
    }
    function handleDoubleClick( e:MouseEvent ){
        if(openAtfirstClick){
            return
        }
        // console.log("db click")
        if(onRun){
            onRun()
        }
        WindowManager.openApp(props.id)
    }
    function handleWindowClick( e:MouseEvent ){
        if(isSelected){
            isSelected = false

        }
    }
</script>

<svelte:window on:click={handleWindowClick} />

<button 
    bind:this={element}
    class={isMouseOver?"app-icon mouse-over":isSelected?"app-icon selected":"app-icon"}
    on:click={handleClick} 
    on:dblclick={handleDoubleClick}
    on:touchend={handleClick}
    on:mouseover={MouseOver} 
    on:mouseout={MouseOut}
    on:focus={()=>{}} 
    on:blur={()=>{}}
>
    <div class="icon">
        <IconSelector iconColor={iconColor} iconName={props.shortcutIcon}/>
    </div>
    <p class="app-name" style="color: {iconColor};">
        {state.apps[props.id].texts[$activeLang].name}
    </p>
</button>

<style>
    .app-icon {
        height: 6rem;
        width: 6rem;
        margin: 0.5rem;
        z-index: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        background: transparent;
        border-radius: .2rem;
    }
    .app-icon .icon {
        margin-top: 0.5rem;
        height: 60%;
        width: auto;
        border-radius: .5rem;
        aspect-ratio: 1/1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        margin-bottom: .5rem;
    }
    .app-icon .app-name {
        font-size: .9rem;
        font-weight: normal;
        text-transform: capitalize;
        /* margin-top: 1rem; */
        margin-bottom: .5rem;
    }
    .app-icon.selected {
        background: var(--main-color);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
        color: var(--accent-light);
    }
    .app-icon:hover {
        cursor: pointer;
        background: var(--main-color);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
    }
    .app-icon:active{
        transform: scale(.9);
    }
    @-webkit-keyframes select-icon{
        from{
            background: transparent;
        }
        to{
            background: var(--main-color);
        }
    }

    @keyframes select-icon{
        from{
            background: transparent;
        }
        to{
            background: var(--main-color);
        }
    }
</style>
