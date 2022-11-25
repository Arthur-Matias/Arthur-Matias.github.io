<script lang="ts">
    import { onMount } from "svelte";
    import ScreenController from "../../../Controllers/ScreenController";
    import state from "../../../Storage/state";
    import { activeLang } from '../../../../Global/consts/stores'

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
                    setTimeout( () => ScreenController.toggleLogin(), 1000 )
                },1000)
            }
            counter ++
        }, 2000)
        
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
        display: flex;
        align-items: center;
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
        transform: translateX(70%);
        animation: textAnim 1s ease-in-out infinite;
    }
    @keyframes textAnim{
        0%{
            transform: translateX(100%);
        }
        50%{
            transform: translateX(calc(100% - 1.5rem));
        }
        100%{
            transform: translateX(100%);
        }
    }
</style>
