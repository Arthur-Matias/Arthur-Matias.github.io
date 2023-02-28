<script lang="ts">
    import IconSelector from "./IconSelector.svelte";
    import { eIcons } from "../../Storage/GlobalEnums";
    // import { activeLang } from "../../Global/consts/stores";
    // import type { AppProps, iNote } from "../../Global/consts/types";
    
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
    .dial{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
        padding-right: 1rem;
        background-color: var(--bg-light);
        font-size: 3rem;
        font-weight: normal;
        overflow-x: auto;
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
        -ms-grid-columns: (1fr)[3];
        grid-template-columns: repeat(3, 1fr);
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
        -ms-grid-row: 2;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(5){
        -ms-grid-row: 2;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(6){
        -ms-grid-row: 2;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(7){
        -ms-grid-row: 3;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(8){
        -ms-grid-row: 3;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(9){
        -ms-grid-row: 3;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(10){
        -ms-grid-row: 4;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(11){
        -ms-grid-row: 4;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(12){
        -ms-grid-row: 4;
        -ms-grid-column: 3;
    }
    .keyboard > *:nth-child(13){
        -ms-grid-row: 5;
        -ms-grid-column: 1;
    }
    .keyboard > *:nth-child(14){
        -ms-grid-row: 5;
        -ms-grid-column: 2;
    }
    .keyboard > *:nth-child(15){
        -ms-grid-row: 5;
        -ms-grid-column: 3;
    }
    .keyboard>button{
        font-size: 1.5rem;
        margin: 1rem;
        border-radius: 2rem;
        
        height: 3rem;
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
    .call{
        -ms-grid-row: 5;
        -ms-grid-row-span: 1;
        grid-row: 5 / 6;
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2 / 3;
        background-color: var(--main-color);
    }
    .dial > button{
        margin-left: 2rem;
    }
</style>
