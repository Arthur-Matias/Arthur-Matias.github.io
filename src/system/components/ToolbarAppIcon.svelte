<script lang="ts">
    import WindowManager from "../root/Controllers/WindowManager";
    import { minimizedApps } from "../../consts/stores";


    export let icon: string;
    export let id: number;

    $: isMouseOver = false

    function toggleMouseOver(){
        isMouseOver = !isMouseOver
    }
    function toggleActive(){
        if (!$minimizedApps.includes(id)) {
            WindowManager.minimizeApp(id)
        }else{
            WindowManager.unMinimizeApp(id)
        }

    }
    function imgLoaded(){
        // console.log("img loaded")
    }
</script>

<div 
    on:click={toggleActive} 
    class={`icon round  ${!$minimizedApps.includes(id)?"active":""}`} 
    on:mouseover={toggleMouseOver} 
    on:mouseout={toggleMouseOver}
    on:focus={()=>{}}
    on:blur={()=>{}}
>
    <img src={icon} preload="true" on:load={imgLoaded} alt="">
</div>

<style>
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        cursor: pointer;
        height: 90%;
    }
    .icon:hover{
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        transition: ease-in .1s;
    }
    .icon>img{
        height: 2rem;
        width: auto;
    }
    .icon.active{
        transition: ease-in .1s;
        background-color: var(--bg-dark-transparent);
    }
</style>
