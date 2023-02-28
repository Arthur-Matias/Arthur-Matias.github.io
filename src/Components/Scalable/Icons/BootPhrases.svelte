<script lang="ts">
    import { onMount } from "svelte";
    import ScreenController from "../../../Controllers/ScreenController";
    import state from "../../../Storage/SystemState";
    import { activeLang } from '../../../Storage/GlobalStores'

    const logoFill = "none",
     logoStroke = "white",
     logoStrokeSize = 16;

     let phrase = ""

    function displayTexts(){
        let counter = 0;
        let interval = setInterval(()=>{
            phrase = state.texts[$activeLang].boot[counter]
            
            if(counter >= state.texts[$activeLang].boot.length-1){
                clearInterval(interval)
                // displayGreeting = true;
                setTimeout(()=>{
                    setTimeout( () => ScreenController.toggleLogin(), 500 )
                },500)
            }
            counter ++
        }, 1000)
        
    }
    
    onMount(()=>{
        setTimeout( displayTexts, 500 )
    })

</script>

<div id="boot-phrase" >
    <div class="text-wrapper">
        <div class="phrase">{phrase} ...</div>
        <div id="box"></div>
    </div>
</div>

<style>
    #boot-phrase{
        width: 100%;
        height: 100%;
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
    .text-wrapper{
        height: 100%;
        position: relative;
    }
    .phrase{
        z-index: 1;
        font-size: 1.4rem;
    }
    #box{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        -webkit-transform: translateX(70%);
            -ms-transform: translateX(70%);
                transform: translateX(70%);
        -webkit-animation: textAnim 2s ease-in-out infinite;
                animation: textAnim 2s ease-in-out infinite;
    }
    @-webkit-keyframes textAnim{
        0%{
            -webkit-transform: translateX(100%);
                    transform: translateX(100%);
        }
        50%{
            -webkit-transform: translateX(calc(100% - 1.5rem));
                    transform: translateX(calc(100% - 1.5rem));
        }
        100%{
            -webkit-transform: translateX(100%);
                    transform: translateX(100%);
        }
    }
    @keyframes textAnim{
        0%{
            -webkit-transform: translateX(100%);
                    transform: translateX(100%);
        }
        50%{
            -webkit-transform: translateX(calc(100% - 1.5rem));
                    transform: translateX(calc(100% - 1.5rem));
        }
        100%{
            -webkit-transform: translateX(100%);
                    transform: translateX(100%);
        }
    }
</style>
