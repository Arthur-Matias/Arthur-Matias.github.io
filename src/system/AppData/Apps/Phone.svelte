<script lang="ts">
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons, eLang } from "../../Global/consts/enums";
    import { activeLang } from "../../Global/consts/stores";
    import type { AppProps, iNote } from "../../Global/consts/types";
    
    // let result = "";
    let dial = "";

    let keys = [
        {
            key: "1",
            onClick: ()=>{
                console.log(1)
                dial += "1"
            }
        },
        {
            key: "2",
            onClick: ()=>{
                console.log(2)
                dial += "2"
            }
        },
        {
            key: "3",
            onClick: ()=>{
                console.log(3)
                dial += "3"
            }
        },
        {
            key: "4",
            onClick: ()=>{
                console.log(4)
                dial += "4"
            }
        },
        {
            key: "5",
            onClick: ()=>{
                console.log(5)
                dial += "5"
            }
        },
        {
            key: "6",
            onClick: ()=>{
                console.log(6)
                dial += "6"
            }
        },
        {
            key: "7",
            onClick: ()=>{
                console.log(7)
                dial += "7"
            }
        },
        {
            key: "8",
            onClick: ()=>{
                console.log(8)
                dial += "8"
            }
        },
        {
            key: "9",
            onClick: ()=>{
                console.log(9)
                dial += "9"
            }
        },
        {
            key: "#",
            onClick: ()=>{
                console.log("#")
                dial += "#"
            }
        },
        {
            key: "0",
            onClick: ()=>{
                console.log(0)
                dial += "0"
            }
        },
        {
            key: "*",
            onClick: ()=>{
                console.log("*")
                dial += "*"
            }
        },
        // {
        //     key: "del",
        //     
        // },
        
    ]
    function deleteLast(){
        console.log("del")
        let newCalc = dial.split("")
        newCalc.pop()
        dial = newCalc.join("")
    }
</script>

<div id="calc">
    <div class="result">
        <!-- {result} -->
    </div>
    <div class="dial">
        {dial}
        <button on:click={deleteLast}>
            <IconSelector iconName={eIcons.delete} />
        </button>
    </div>
    <div class="keyboard">
        {#each keys as key}
            <button on:click={key.onClick}>
                {key.key}
            </button>
        {/each}
       <button class="call">
        <IconSelector iconName={eIcons.call} />
       </button>
    </div>
</div>

<style>
    #calc{
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 2fr 1.5fr 7.3fr;
        grid-template-columns: 1fr;
    }
    .dial{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1rem;
        background-color: var(--bg-light);
        font-size: 3rem;
        font-weight: normal;
        overflow-x: auto;
    }
    .result{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 4.3rem;
        padding-bottom: 1rem;
        padding-right: 2rem;
        font-weight: bold;
    }
    .keyboard{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
    .keyboard>button{
        font-size: 1.5rem;
        margin: 1rem;
        border-radius: 2rem;
        
        height: 3rem;
    }
    .keyboard > button:hover{
        box-shadow: 0px 0px 4px var(--bg-dark-transparent);
    }
    .keyboard > button:active{
        background-color: var(--bg-light);
        box-shadow: inset 0px 0px 4px var(--bg-dark-transparent);
    }
    .call{
        grid-row: 5 / 6;
        grid-column: 2 / 3;
        background-color: var(--main-color);
    }
    .dial > button{
        margin-left: 2rem;
    }
</style>
