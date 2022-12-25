<script lang="ts">
    import state from '../../Storage/state';
    // import type { lang, AppProps } from "../../consts/types";
    // import  { openApps, activeLang } from "../../consts/stores";

    // import WindowManager from "../root/Controllers/WindowManager";
    // import IconSelector from "./IconSelector.svelte";
    import IconSelector from '../../../Global/Components/Scalable/IconSelector.svelte'
    import type { AppProps, Vector } from '../../../Global/consts/types';
    import WindowManager from '../../../SystemData/Controllers/WindowManager';
    import { activeLang } from '../../../Global/consts/stores';


    export let iconColor = "var(--accent)";
    export let props: AppProps;
    export let openAtfirstClick = false;
    export let onRun: ()=>void | undefined;
    export let index: number;

    let moving = false;
    

    let isSelected:boolean = false;
    let isMouseOver: boolean = false;

    let shortcutElement: HTMLDivElement;
    let elemRect: DOMRect;
    let rem = 16;
    
    let deltaX = 0.5 * rem;
    let deltaY = 0.5 * rem;

    // let totalCols = Math.floor(window.innerWidth / (6*rem));
    let totalRows = Math.floor(window.innerHeight / (6*rem));

    let currCol = 0;
    let currRow = 0;

    if((totalRows <= index)){
        currCol = Math.floor(index / totalRows)
        index = index - (currCol*totalRows)
    }
    currRow = (index - totalRows) + totalRows

    let pos = { left: currCol * (6*rem), top: currRow * ( 6 * rem )}

    function setPos(x: number, y: number){
        if(shortcutElement.offsetLeft + x < window.innerWidth - (0.5*rem) - (6*rem) && shortcutElement.offsetLeft + x > rem/2){
            pos.left += x
        }
        if(shortcutElement.offsetTop + y < window.innerHeight - (0.5*rem) - (6*rem) && shortcutElement.offsetTop + y > rem/2){
            pos.top += y
        }
    }

    $: if(shortcutElement){
        elemRect = shortcutElement.getBoundingClientRect()
    }
    function MouseOver(){
        isMouseOver=true
    }
    function MouseUp(){
        moving = true
    }
    function handleClick(){
        console.log("one click")
        if(openAtfirstClick){
            if(onRun){
                onRun()
            }
            WindowManager.openApp(props.id)
        }else{
            setTimeout(()=>isSelected = true, 10)
        }
    }
    function handleDoubleClick( e:MouseEvent ){
        if(openAtfirstClick){
            return
        }
        console.log("db click")
        if(onRun){
            onRun()
        }
        WindowManager.openApp(props.id)
    }
    function handleWindowClick( e:MouseEvent ){
        if(isSelected && !checkIfInbound(e, shortcutElement)){
            isSelected = false
        }
    }
    function checkIfInbound(mouse: MouseEvent, target: HTMLElement):boolean{
        return (
            mouse.pageX > target.clientLeft + target.offsetWidth &&
            mouse.pageX < target.clientLeft &&
            mouse.pageY > target.clientTop + target.offsetHeight &&
            mouse.pageY < target.clientTop
            
            
        )
    }
	function onMouseMove( e : MouseEvent ) {
		if (moving) {
            deltaX += e.movementX;
            deltaY += e.movementY;
            setPos(deltaX, deltaY);
            deltaY = 0;
            deltaX = 0;
            isSelected = true;
		}
	}
	function onMouseUp() {
		moving = false;
        isMouseOver = true
	}
    function onMouseDown(e:MouseEvent){
        moving = true
    }
</script>

<svelte:window on:click={handleWindowClick} on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<div 
    bind:this={shortcutElement}
    class={isMouseOver?"shortcut mouse-over":isSelected?"shortcut selected":"shortcut"}
    style="left: {pos.left}px; top: {pos.top}px;"
    on:click={handleClick} 
    on:dblclick={handleDoubleClick}
    on:mouseover={MouseOver} 
    on:mouseup={MouseUp} 
    on:mousedown={onMouseDown}
    on:touchend={handleClick}
    on:focus={()=>{}} 
    on:blur={()=>{}}
    on:keydown={()=>{}}
    on:keyup={()=>{}}
    
>
    <div class="icon">
        <IconSelector iconColor={iconColor} iconName={props.shortcutIcon}/>
    </div>
    <p class="app-name" style="color: {iconColor};">
        {state.apps[props.id].texts[$activeLang].name}
    </p>
</div>

<style>
    .shortcut {
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
        border-radius: .3rem;
        position: absolute;
    }
    .shortcut .icon {
        margin-top: 0.5rem;
        height: 60%;
        width: auto;
        border-radius: .3rem;
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
    }
    .shortcut .app-name {
        font-size: 1rem;
        font-weight: normal;
        text-transform: capitalize;
        margin-top: 0.2rem;
    }
    .shortcut.selected {
        background: var(--main-color);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
        color: var(--accent-light);
    }
    .shortcut:hover {
        cursor: pointer;
        background: var(--main-color);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
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
