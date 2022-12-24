<script lang="ts">
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";
    import BootPhrases from "../Components/Scalable/BootComponents/BootPhrases.svelte";
    // import { isBootLoading, activeLang } from "../Storage/stores";

    const logoFill = "none",
          logoStroke = "white",
          logoStrokeSize = 16;

 

</script>

<div id="boot-loading-screen" class="black">
    <div class="animation-container logo">
        <div class="logo-wrapper">
            <Logo stroke={logoStroke} fill={logoFill} strokeSize={logoStrokeSize} animated={true}/>
        </div>
    </div>
    <div class="animation-container text">
        <BootPhrases />
    </div>
</div>

<style>
    #boot-loading-screen{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        cursor: wait;
        background-color: black;
        position: relative;
        overflow: hidden;
    }
    .animation-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        
    }
    .animation-container.logo{
        height: 100%;
    }
    .logo-wrapper{
        display: flex;
        height: 40%;
        transition: ease-in-out .2s;
    }
    .animation-container.text{
        margin-bottom: 20vh;
    }
    @keyframes greetingsAnim{
        0%{
            color: black;
        }
        50%{
            color: white;
            opacity: 100%;
        }
        100%{
            opacity: 0;
            color: black;
        }
    }
    @media screen and (max-width: 600px){
        .logo-wrapper{
            display: flex;
            height: auto;
            width: 40%;
            aspect-ratio: 1 / 1;
        }
   }
</style>
