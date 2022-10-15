<script lang="ts">
    import state from "../../../consts/state";
    import { isBootLoading, activeLang } from "../../../consts/stores";
    import Logo from '../../components/Logo.svelte'
    import Login from "./Login.svelte";

    const logoFill = "none",
     logoStroke = "white",
     logoStrokeSize = 16,
     phrases: string[] = state.allTexts[$activeLang].boot;
    $: currPhrase = phrases[0];
    $: displayGreeting = false;
    $: displayLogin = false;

    if($isBootLoading){
        let counter = 0;

        let interval = setInterval(()=>{
            currPhrase = phrases[counter]
            counter ++
            if(counter > phrases.length){
                clearInterval(interval)
                displayGreeting = true;
                setTimeout(()=>{
                    displayGreeting = false
                    displayLogin = true
                },2000)
            }
        }, 1200)
    }

</script>

<div id="boot-loading-screen" class={$isBootLoading?"show black":""}>
    <div class="logo-container">
        <Logo stroke={logoStroke} fill={logoFill} strokeSize={logoStrokeSize} animated={true}/>
    </div>
    <p class="boot-phrase">{currPhrase}</p>

    {#if displayGreeting}
        <div class="boot-greeting black">
            {state.allTexts[$activeLang].apps[0].name}
        </div>
    {/if}
    {#if displayLogin}
        <Login />
    {/if}
</div>

<style>
    #boot-loading-screen{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        position: absolute;
        top: 0;
        left: 0;
        filter: opacity(0);
        z-index: 0;
        cursor: wait;
    }
    .black{
        background-color: black;
    }
    .show{
        z-index: 1000 !important;
        filter: opacity(1) !important;
    }
    .logo-container{
        height: 20vh;
        width: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20vh;
    }
    .boot-phrase{
        margin-top: 2rem;
        font-size: 1.2rem;
        margin-bottom: 20vh;
        color: white;
    }
    .boot-greeting{
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        transition: ease .1s;
        animation: greetingsAnim 2s ease-in-out forwards;
        text-transform: capitalize;
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    @keyframes greetingsAnim{
        0%{
            color: black;
        }
        50%{
            color: white;
        }
        100%{
            color: black;
        }
    }
</style>
