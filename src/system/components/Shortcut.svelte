<script lang="ts">
    import state from "../../consts/state";
    import type { lang, AppProps } from "../../consts/types";
    import  { openApps, activeLang } from "../../consts/stores";
    import img from "../../assets/0076.png";

    import WindowManager from "../root/Controllers/WindowManager";
    
    export let props: AppProps;
    export let openAtfirstClick = false;
    export let onRun: ()=>void;

    let isSelected:boolean = false;
    let isMouseOver: boolean = false;

    let element: HTMLDivElement;
    let elemRect;

    $: if(element){
        elemRect = element.getBoundingClientRect()
    }

    
    function MouseOver(){
        isMouseOver=true
    }
    function MouseOut(){
        isMouseOver=false
    }

    function checkIfInside(mouse: MouseEvent) {
        let elem = document.getElementsByClassName("selected")[0] as HTMLElement,
            elemRect = elem.getBoundingClientRect(),
            bodyRect = document.body.getBoundingClientRect(),
            offsetLeft = elemRect?.left - bodyRect.left,
            offsetRight   = elemRect?.right - bodyRect.left,
            offsetUp   = elemRect?.top - bodyRect.top,
            offsetDown   = elemRect?.bottom - bodyRect.top

            console.log((mouse.clientX > offsetLeft && mouse.clientX < offsetRight && mouse.clientY > offsetUp && mouse.clientY < offsetDown))
            console.log()

        return (mouse.clientX > offsetLeft && mouse.clientX < offsetRight) && (mouse.clientY > offsetUp && mouse.clientY < offsetDown)
    }

    function handleClick(){
        console.log("one click")
        setTimeout(()=>{
            isSelected = true
        }, 50)

        if(openAtfirstClick){
            if(onRun){
                onRun()
            }
            WindowManager.openApp(props.id)
        }
    }
    
    function handleDoubleClick(mouse:MouseEvent){
        console.log("double click")
        if(!openAtfirstClick){
            if(onRun){
                onRun()
            }
            WindowManager.openApp(props.id)
        }
    }
    function handleWindowClick(e:MouseEvent){
        if(isSelected)
            isSelected = false
    }
    let moving = false;
    let pos = { left: 0, top: 0}
    function onMouseDown() {
		if (isSelected) {
            moving = true;
        }
	}
	function onMouseMove(e) {
		if (moving) {
			pos.left += e.movementX;
			pos.top += e.movementY;
		}
	}
	function onMouseUp() {
		moving = false;
	}
</script>
<svelte:window on:click={handleWindowClick} on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
<div 
    bind:this={element}
    draggable="true"
    class={isMouseOver?"shortcut mouse-over":isSelected?"shortcut selected":"shortcut"} 
    on:click={handleClick} 
    on:dblclick={handleDoubleClick}
    on:mouseover={MouseOver} 
    on:mouseout={MouseOut} 
    on:mousedown={onMouseDown}
    on:focus={()=>{}} 
    on:blur={()=>{}}
>
    <div class="icon">
        <img src={props.icon} alt="" />
    </div>
    <p class="app-name">
        {state.allTexts[$activeLang].apps[props.id].name}
    </p>
</div>

<style>
    .shortcut {
        height: 5rem;
        width: 5rem;
        margin: 0.5rem;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: ease-in;
        background: transparent;
        border-radius: .5rem;
    }
    .shortcut .icon {
        margin-top: 0.5rem;
        height: 50%;
        width: auto;
        border-radius: 1rem;
        aspect-ratio: 1/1;
    }
    .shortcut .app-name {
        font-size: 0.7rem;
        text-transform: capitalize;
    }
    .shortcut.selected {
        background: var(--main-color);
        transition: ease-in;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
        color: var(--accent-light);
    }
    .shortcut:hover {
        cursor: pointer;
        background: var(--main-color);
        transition: ease-in;
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
