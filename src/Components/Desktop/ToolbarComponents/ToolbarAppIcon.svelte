<script lang="ts">
   import { minimizedApps } from "../../../Storage/AppStores"
    import IconSelector from "../../Scalable/IconSelector.svelte";
    import type { eIcons } from "../../../Storage/GlobalEnums";
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
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
        -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
                box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        -webkit-transition: ease-in .1s;
        -o-transition: ease-in .1s;
        transition: ease-in .1s;
    }
    .icon.active{
        -webkit-transition: ease-in .1s;
        -o-transition: ease-in .1s;
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
        -webkit-filter: invert(1) opacity(.5);
                filter: invert(1) opacity(.5);
        
    }
</style>
