<script lang="ts">
    import BootPhrases from "./Icons/BootPhrases.svelte";
    import Logo from "./Icons/Logo.svelte";

    const logoFill = "none",
        logoStroke = "white",
        logoStrokeSize = 16;
</script>

<div id="boot-loading-screen" class="black">
    <div class="animation-container logo">
        <div class="logo-wrapper">
            <Logo
                stroke={logoStroke}
                fill={logoFill}
                strokeSize={logoStrokeSize}
                animated={true}
            />
        </div>
    </div>
    <div class="animation-container text">
        <BootPhrases />
    </div>
</div>

<style>
    #boot-loading-screen {
        height: 100%;
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
        top: 0;
        left: 0;
        cursor: wait;
        background-color: black;
        position: relative;
        overflow: hidden;
    }
    .animation-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
    }
    .animation-container.logo {
        height: 100%;
    }
    .logo-wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 40%;
        -webkit-transition: ease-in-out 0.2s;
        -o-transition: ease-in-out 0.2s;
        transition: ease-in-out 0.2s;
    }
    .animation-container.text {
        margin-bottom: 20vh;
    }
    @-webkit-keyframes greetingsAnim {
        0% {
            color: black;
        }
        50% {
            color: white;
            opacity: 100%;
        }
        100% {
            opacity: 0;
            color: black;
        }
    }
    @keyframes greetingsAnim {
        0% {
            color: black;
        }
        50% {
            color: white;
            opacity: 100%;
        }
        100% {
            opacity: 0;
            color: black;
        }
    }
    @media screen and (max-width: 600px) {
        .logo-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: auto;
            width: 40%;
            aspect-ratio: 1 / 1;
        }
    }
</style>
