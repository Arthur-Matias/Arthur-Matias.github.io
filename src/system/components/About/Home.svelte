<script lang="ts">
    import state from "../../../consts/state";
    import Logo from "../Logo.svelte";
    import { activeLang, openApps } from "../../../consts/stores" 
    import { onMount, onDestroy } from "svelte";
    const fillColor = "var(--bg-light)"

    let el: HTMLDivElement;
    let interval;

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
        fontSize = Math.floor((el.getBoundingClientRect().width/1500) * ratio)
        margin = Math.floor(fontSize * 15)
    }
</script>

<div id="home" bind:this={el} on:change={handleChange}>
    <div class="logo-container">
        <div class="logo-wrapper">
            <Logo fill="{fillColor}"/>
        </div>
    </div>
    <div class="title">
        <p style="font-size: {fontSize}rem;">{state.allTexts[$activeLang].about.homeTitle[0]}</p>
        <h2 style="font-size: {Math.floor(fontSize * ratio)}rem;  margin: {margin}px 0;">{state.allTexts[$activeLang].about.homeTitle[1]}</h2>
        <p style="font-size: {fontSize}rem;">{state.allTexts[$activeLang].about.homeTitle[2]}</p>
    </div>
    <!-- COMPONENT HERE -->
</div>

<style>
   #home{
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
   }
   .logo-container{
        height: 100%;
        max-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
   }
   .logo-wrapper{
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
   }
   .title{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
   }
   .title > h2{
       font-family: distant-galaxy;
       color: var(--main-color);
    }
    .title > p{
        font-weight: 100;
    }
</style>
