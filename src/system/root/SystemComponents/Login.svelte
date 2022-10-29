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
            <p>{state.allTexts[$activeLang].login.phrase} ...</p>
        </div>
        <!-- <div class="section">
            <div>
                <div class="logo-container">
                    <Logo mainColor={true}/>
                </div>
                <p>{phrase}</p>
            </div>
        </div> -->
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
        transition: ease-in-out 2s;
        
    }
    .section{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .section > p{
        margin-top: 4rem;
        font-size: 1.3rem;
    }
    .login-wrapper{
        height: 100%;
        width: 100%;
        background-color: var(--bg-dark-transparent);
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 4;
    }
</style>
