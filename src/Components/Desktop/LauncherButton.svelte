<script lang="ts">
    import Logo from '../Scalable/Icons/Logo.svelte';
    import { isLauncherOpen } from '../../Storage/SystemStores'

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
    <button class={$isLauncherOpen?"glass-inset round":isMouseOver?"glass-light round":""} on:click={handleClick} on:mouseenter={()=>isMouseOver=true} on:mouseleave={()=>isMouseOver=false}>
        <div class="logo-wrapper">
            <Logo mainColor={$isLauncherOpen?true:isMouseOver}/>
        </div>
    </button>
</div>

<style>
   #launcher-button{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        height: 100%;
        width: 100%;
        position: relative;
        -webkit-transition: ease-in-out .2s;
        -o-transition: ease-in-out .2s;
        transition: ease-in-out .2s;
    }
    #launcher-button > button{
        height: 80%;
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
        padding: 1rem;
    }
    .logo-wrapper{
        height: 100%;
        width: 100%;
    }
    .logo-wrapper:active{
        -webkit-transform: scale(.7);
            -ms-transform: scale(.7);
                transform: scale(.7);
    }
    #launcher-button > button:hover{
        cursor: pointer;
    }
</style>
