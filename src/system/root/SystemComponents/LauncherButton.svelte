<script lang="ts">
    import Logo from "../../components/Logo.svelte";
    import { isLauncherOpen } from '../../../consts/stores'

    let isMouseOver: boolean = false;

    function handleClick(mouse: MouseEvent){
        if(!$isLauncherOpen){
            setTimeout(()=>{
                isLauncherOpen.update(val=> !val)
            },50)
        }
    }
</script>

<div id="launcher-button">
    <div class={$isLauncherOpen?"glass-inset round":isMouseOver?"glass round":""} on:click={handleClick} on:mouseenter={()=>isMouseOver=true} on:mouseleave={()=>isMouseOver=false}>
        <div class="logo-wrapper">
            <Logo mainColor={$isLauncherOpen}/>
        </div>
    </div>
</div>

<style>
    #launcher-button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: relative;
        transition: ease-in-out .2s;
    }
    #launcher-button > div{
        height: 50%;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        transition: ease-in;
    }
    .logo-wrapper{
        height: 100%;
        width: 100%;
    }
    .logo-wrapper:active{
        transform: scale(.7);
    }
    #launcher-button > div:hover{
        cursor: pointer;
    }
</style>
