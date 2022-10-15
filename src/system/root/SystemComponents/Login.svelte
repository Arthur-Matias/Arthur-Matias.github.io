<script lang="ts">
    import state from "../../../consts/state";
    import { isBootLoading, activeLang } from "../../../consts/stores";
    import Logo from '../../components/Logo.svelte'
    import Clock from "../../components/Clock.svelte";
    import BackgroundImage from "./BackgroundImage.svelte";

    const phrase: string = state.allTexts[$activeLang].apps[0].name;

     function handleClick(){
        isBootLoading.set(false)
     }

     function handleKeyDown(e: KeyboardEvent){
        if (e.key=== "Enter") {
            handleClick()
        }
     }

</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="login">
    <BackgroundImage />
    <div class="login-wrapper">
        <div class="section">
            <Clock big={true} />
        </div>
    
        <div class="section">
            <div>
                <div class="logo-container">
                    <Logo mainColor={true}/>
                </div>
                <p>{phrase}</p>
                <div class="login-section">
                    <input type="text" class="round-left">
                    <div class="login-btn round-right" on:click={handleClick}></div>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    #login{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        cursor: default;
        background-color: var(--bg-dark-transparent);
        
    }
    .section{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
    }
    .section > div{
        background-color: var(--bg-dark-transparent);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        position: relative;
        border-radius: 1rem;
        width: 80%;
        max-width: 400px;
    }
    .section > div > p{
        margin-top: 2rem;
        margin-bottom: .5rem;
        font-size: 1.5rem;
        text-transform: capitalize;
        font-weight: 100;
    }
    .logo-container{
        height: 5rem;
        position: absolute;
        top: -3rem;
    }
    .login-wrapper{
        height: 100%;
        width: 100%;
        background-color: var(--bg-dark-transparent);
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 4;
    }
    .login-section{
        display: flex;
        margin-bottom: 1rem;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .login-section > input{
        background-color: var(--bg-dark);
        border: none;
        width: 80%;
        height: 3rem;
        padding: 0 1rem;
        color: var(--accent);
        outline: none;
        text-align: center;
    }
    .login-section > input:active{
        box-shadow: 0px 0px .5rem var(--bg-dark-transparent);
    }
    .login-btn{
        background-color: var(--main-color);
        height: 3rem;
        width: 3rem;
        filter: opacity(.6);
        aspect-ratio: 1 / 1;
        transition: ease-in-out .2s;
    }
    .login-btn:hover{
        filter: opacity(1);
        cursor: pointer;
        box-shadow: 0px 0px .5rem var(--main-color);
    }
    .login-btn:active{
        box-shadow: inset 0px 0px .5rem var(--bg-dark-transparent);
    }
</style>
