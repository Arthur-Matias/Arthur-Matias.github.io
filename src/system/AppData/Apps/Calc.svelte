<script lang="ts">
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons, eLang } from "../../Global/consts/enums";
    import { activeLang } from "../../Global/consts/stores";
    import type { AppProps, iNote } from "../../Global/consts/types";
    
    let result = "";
    let calculation = "";

    let keys = [
        {
            key: "AC",
            onClick: ()=>{
                console.log("AC")
                calculation = ""
                result = ""
            }
        },
        {
            key: "%",
            onClick: ()=>{
                console.log("%")
                calculation += "%"
            }
        },
        {
            key: "÷",
            onClick: ()=>{
                console.log("÷")
                calculation += "÷"
            }
        },
        {
            key: "x",
            onClick: ()=>{
                console.log("x")
                calculation += "x"
            }
        },
        {
            key: "7",
            onClick: ()=>{
                console.log(7)
                calculation += "7"
            }
        },
        {
            key: "8",
            onClick: ()=>{
                console.log(8)
                calculation += "8"
            }
        },
        {
            key: "9",
            onClick: ()=>{
                console.log(9)
                calculation += "9"
            }
        },
        {
            key: "-",
            onClick: ()=>{
                console.log("-")
                calculation += "-"
            }
        },
        {
            key: "4",
            onClick: ()=>{
                console.log(4)
                calculation += "4"
            }
        },
        {
            key: "5",
            onClick: ()=>{
                console.log(5)
                calculation += "5"
            }
        },
        {
            key: "6",
            onClick: ()=>{
                console.log(6)
                calculation += "6"
            }
        },
        {
            key: "+",
            onClick: ()=>{
                console.log("+")
                calculation += "+"
            }
        },
        {
            key: "1",
            onClick: ()=>{
                console.log(1)
                calculation += "1"
            }
        },
        {
            key: "2",
            onClick: ()=>{
                console.log(2)
                calculation += "2"
            }
        },
        {
            key: "3",
            onClick: ()=>{
                console.log(3)
                calculation += "3"
            }
        },
        {
            key: "=",
            onClick: ()=>{
                console.log("=")
                let correctedCalculation = calculation.replaceAll(",", ".").replaceAll("x", "*").replaceAll("÷", "/")
                result = String(eval(correctedCalculation))
                calculation = ""
            }
        },
        {
            key: "0",
            onClick: ()=>{
                console.log(0)
                calculation += "0"
            }
        },
        {
            key: $activeLang === eLang.En? "." : ",",
            onClick: ()=>{
                console.log($activeLang === eLang.En? "." : ",")
                calculation += $activeLang === eLang.En? "." : ","
            }
        },
        {
            key: "del",
            onClick: ()=>{
                console.log("del")
                let newCalc = calculation.split("")
                newCalc.pop()
                calculation = newCalc.join("")
            }
        },
        
    ]

</script>

<div id="calc">
    <div class="result">
        {result}
    </div>
    <div class="calculation">
        {calculation}
    </div>
    <div class="keyboard">
        {#each keys as key}
            {#if key.key === "="}
                <button class="equals" on:click={key.onClick}>
                    {key.key}
                </button>
            {:else if key.key === "del"}
                <button class="del" on:click={key.onClick}>
                    <IconSelector iconName={eIcons.delete} />
                </button>
            {:else if !Number(key.key) && Number(key.key) != 0 && key.key != "." && key.key != ","}
                <button class="colored" on:click={key.onClick}>
                    {key.key}
                </button>
            {:else}
                <button on:click={key.onClick}>
                    {key.key}
                </button>
            {/if}
        {/each}
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
    .calculation{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-bottom: 1rem;
        padding-right: 1rem;
        background-color: var(--bg-light);
        font-size: 3rem;
        font-weight: normal;
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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
    .keyboard>button{
        font-size: 1.5rem;
        margin: 1rem;
        border-radius: 2rem;
        
        width: auto;
    }
    .keyboard > button:hover{
        box-shadow: 0px 0px 4px var(--bg-dark-transparent);
    }
    .keyboard > button:active{
        background-color: var(--bg-light);
        box-shadow: inset 0px 0px 4px var(--bg-dark-transparent);
    }
    .equals{
        grid-row: 4 / 6;
        grid-column: 4 / 5;
        background-color: var(--main-color);
    }
    .colored{
        color: var(--main-color);
    }
</style>
