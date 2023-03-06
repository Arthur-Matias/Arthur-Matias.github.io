<script lang="ts">
    import IconSelector from "./IconSelector.svelte";
    import { eIcons, eLang } from "../../Storage/GlobalEnums";
    import { activeLang } from "../../Storage/GlobalStores";
    
    let result = "";
    let calculation = "0";

    let keys = [
        {
            key: "AC",
            onClick: ()=>{
                // console.log("AC")
                calculation = "0"
                result = ""
            }
        },
        {
            key: "%",
            onClick: ()=>{
                // console.log("%")
                calculation += "%"
            }
        },
        {
            key: "÷",
            onClick: ()=>{
                // console.log("÷")
                calculation += "÷"
            }
        },
        {
            key: "x",
            onClick: ()=>{
                // console.log("x")
                calculation += "x"
            }
        },
        {
            key: "7",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(7)
                calculation += "7"
            }
        },
        {
            key: "8",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(8)
                calculation += "8"
            }
        },
        {
            key: "9",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(9)
                calculation += "9"
            }
        },
        {
            key: "-",
            onClick: ()=>{
                // console.log("-")
                calculation += "-"
            }
        },
        {
            key: "4",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(4)
                calculation += "4"
            }
        },
        {
            key: "5",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(5)
                calculation += "5"
            }
        },
        {
            key: "6",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(6)
                calculation += "6"
            }
        },
        {
            key: "+",
            onClick: ()=>{
                // console.log("+")
                calculation += "+"
            }
        },
        {
            key: "1",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(1)
                calculation += "1"
            }
        },
        {
            key: "2",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(2)
                calculation += "2"
            }
        },
        {
            key: "3",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(3)
                calculation += "3"
            }
        },
        {
            key: "=",
            onClick: ()=>{
                // console.log("=")
                let correctedCalculation = calculation.replaceAll(",", ".").replaceAll("x", "*").replaceAll("÷", "/")
                try {
                    result = String(eval(correctedCalculation))
                } catch (error) {
                    
                } finally {
                    calculation = "0"
                }
                
            }
        },
        {
            key: "0",
            onClick: ()=>{
                calculation === "0" && removeFirstZero()
                // console.log(0)
                calculation += "0"
            }
        },
        {
            key: $activeLang === eLang.En? "." : ",",
            onClick: ()=>{
                // console.log($activeLang === eLang.En? "." : ",")
                calculation += $activeLang === eLang.En? "." : ","
            }
        },
        {
            key: "del",
            onClick: ()=>{
                // console.log("del")
                let newCalc = calculation.split("")
                newCalc.pop()
                calculation = newCalc.join("")
            }
        },
        
    ]

    function removeFirstZero(){
        if(calculation.charAt(0) === "0"){
            let newCalc = calculation.split("")
            newCalc.shift()
            calculation = newCalc.join("")
        }
    }

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
        display: -ms-grid;
        display: grid;
        -ms-grid-rows: 2fr 1.5fr 7fr;
        grid-template-rows: 2fr 1.5fr 7fr;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    } 
    .calculation{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: flex-end;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
        padding-bottom: 1rem;
        padding-right: 1rem;
        background-color: var(--bg-light);
        font-size: 3rem;
        font-weight: normal;
    }
    .result{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
            -ms-flex-align: end;
                align-items: flex-end;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
        font-size: 4.3rem;
        padding-bottom: 1rem;
        padding-right: 2rem;
        font-weight: bold;
    }
    .keyboard{
        display: -ms-grid;
        display: grid;
    }
    
    .keyboard>button{
        font-size: 1.5rem;
        margin: 1rem;
        border-radius: 2rem;
        
        width: auto;
    }
    .keyboard > button:hover{
        -webkit-box-shadow: 0px 0px 4px var(--bg-dark-transparent);
                box-shadow: 0px 0px 4px var(--bg-dark-transparent);
    }
    .keyboard > button:active{
        background-color: var(--bg-light);
        -webkit-box-shadow: inset 0px 0px 4px var(--bg-dark-transparent);
                box-shadow: inset 0px 0px 4px var(--bg-dark-transparent);
    }
    .equals{
        -ms-grid-row: 4;
        -ms-grid-row-span: 2;
        grid-row: 4 / 6;
        -ms-grid-column: 4;
        -ms-grid-column-span: 1;
        grid-column: 4 / 5;
        background-color: var(--main-color);
    }
    .del{
        max-height: 2rem;
    }
    .colored{
        color: var(--main-color);
    }
</style>
