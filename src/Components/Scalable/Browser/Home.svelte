<script lang="ts">;
    import Logo from "../Icons/Logo.svelte";
    import { activeLang, isMobile }  from '../../../Storage/GlobalStores';
    import { onMount, onDestroy } from "svelte";
    const fillColor = "var(--bg-light)"

    let el: HTMLDivElement;
    let interval;
    export let props;
    $: fontSize = 1;
    $: ratio = 3;
    $: margin = Math.floor(fontSize * 15);

    onMount(()=>{
        interval = setInterval(handleChange, 100)
    })
    onDestroy(()=>{
        clearInterval(interval)
    })
    function handleChange(){
        if(!$isMobile){
            fontSize = Math.floor((el.getBoundingClientRect().width/1500) * ratio)
            margin = Math.floor(fontSize * 15)
        }
    }
    
</script>

<div id="home" bind:this={el} on:change={handleChange}>
    <div class="home-logo-container">
        <div class="home-logo-wrapper">
            <Logo fill="{fillColor}"/>
        </div>
    </div>
    <div class="home-title">
        <p style="{!$isMobile?`font-size: ${fontSize}rem;`:""}">{props.texts[$activeLang].homeTitle[0]}</p>
        <h2 style="{!$isMobile?`font-size: ${Math.floor(fontSize * ratio)}rem;  margin: ${margin}px 0;`:""}">{props.texts[$activeLang].homeTitle[1]}</h2>
        <p style="{!$isMobile?`font-size: ${fontSize}rem;`:""}">{props.texts[$activeLang].homeTitle[2]}</p>
    </div>
    <!-- COMPONENT HERE -->
</div>

<style>
   #home{
        height: 100%;
        width: 100%;
        position: relative;
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
   }
   .home-logo-container{
        height: 100%;
        max-height: 100%;
        width: 100%;
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
        position: absolute;
        left: 0;
   }
   .home-logo-wrapper{
        height: 50%;
        width: 100%;
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
   .home-title{
        position: relative;
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
   }
   .home-title > h2{
       font-family: distant-galaxy;
       color: var(--main-color);
    }
    .home-title > p{
        font-weight: 100;
    }
    @media screen and (orientation:portrait) { 
        .home-title > h2{
            font-size: 2rem !important;
            
        }
    }
</style>
