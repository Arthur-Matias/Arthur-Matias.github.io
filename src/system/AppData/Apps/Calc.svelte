<script lang="ts">
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons, eLang } from "../../Global/consts/enums";
    import { activeLang } from "../../Global/consts/stores";
    
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
/*
* Prefixed by:
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

#calc{
        position: relative;
        height: 100%;
        width: 100%;
        display: -ms-grid;
        display: grid;
        -ms-grid-rows: 2fr 1.5fr 7.3fr;
        grid-template-rows: 2fr 1.5fr 7.3fr;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    }    #calc > *:nth-child(1){
        -ms-grid-row: 1;
        -ms-grid-column: 1;
    }    #calc > *:nth-child(2){
        -ms-grid-row: 2;
        -ms-grid-column: 1;
    }    #calc > *:nth-child(3){
        -ms-grid-row: 3;
        -ms-grid-column: 1;
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
        -ms-grid-columns: (1fr)[4];
        grid-template-columns: repeat(4, 1fr);
        -ms-grid-rows: (1fr)[5];
        grid-template-rows: repeat(5, 1fr);
    }
    .keyboard > *:nth-child(1){
        -ms-grid-row: 1;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(2){
        -ms-grid-row: 1;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(3){
        -ms-grid-row: 1;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(4){
        -ms-grid-row: 1;
        -ms-grid-column: 4;
    }
    .keyboard > *:nth-child(5){
        -ms-grid-row: 2;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(6){
        -ms-grid-row: 2;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(7){
        -ms-grid-row: 2;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(8){
        -ms-grid-row: 2;
        -ms-grid-column: 4;
    }
    .keyboard > *:nth-child(9){
        -ms-grid-row: 3;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(10){
        -ms-grid-row: 3;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(11){
        -ms-grid-row: 3;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(12){
        -ms-grid-row: 3;
        -ms-grid-column: 4;
    }
    .keyboard > *:nth-child(13){
        -ms-grid-row: 4;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(14){
        -ms-grid-row: 4;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(15){
        -ms-grid-row: 4;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(16){
        -ms-grid-row: 4;
        -ms-grid-column: 4;
    }
    .keyboard > *:nth-child(17){
        -ms-grid-row: 5;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(18){
        -ms-grid-row: 5;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(19){
        -ms-grid-row: 5;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(20){
        -ms-grid-row: 5;
        -ms-grid-column: 4;
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
    .colored{
        color: var(--main-color);
    }
</style>
