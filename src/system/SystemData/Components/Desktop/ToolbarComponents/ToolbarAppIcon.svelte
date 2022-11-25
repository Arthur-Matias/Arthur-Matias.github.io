<script lang="ts">
   import { minimizedApps } from "../../../../AppData/Storage/stores"
    import IconSelector from "../../../../Global/Components/Scalable/IconSelector.svelte";
    import type { eIcons } from "../../../../Global/consts/enums";
    import WindowManager from "../../../Controllers/WindowManager";

    export let icon: eIcons;
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
</script>

<button 
    on:click={toggleActive}
    class={`icon round  ${!$minimizedApps.includes(id)?"active":""}`}
    on:mouseover={toggleMouseOver}
    on:mouseout={toggleMouseOver}
    on:focus={()=>{console.log("focus")}}
    on:blur={()=>{console.log("blur")}}
>
    <div><IconSelector iconName={icon} /></div>
</button>

<style>
    .icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 100%;
        position: relative;
        aspect-ratio: 1 / 1;
    }
    .icon > div{
        height: 50%;
    }
    .icon:hover{
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        transition: ease-in .1s;
    }
    .icon.active{
        transition: ease-in .1s;
        /* background-color: var(--bg-dark-transparent); */
    }

    .icon.active::after{
        content: "";
        background-color: var(--bg-dark-transparent);
        height: .2rem;
        width: 2rem;
        border-radius: 50%;
        /* margin: .5rem 0; */
        margin-top: 1rem;
        filter: invert(1) opacity(.5);
        
    }
</style>
