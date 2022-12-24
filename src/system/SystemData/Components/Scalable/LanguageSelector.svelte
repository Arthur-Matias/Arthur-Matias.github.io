<script lang="ts">
    import { activeLang } from '../../../Global/consts/stores'
    import { eLang } from "../../../Global/consts/enums";
    import { isLanguageSelectionOpen } from "../../../AppData/Storage/stores";
    
    function changeCurrLang(lang: eLang){
        activeLang.update(e=>lang)
    }
    
</script>
<div id="language-selector" class="{($isLanguageSelectionOpen?"open glass-strong":"")}  round">
    <button class={`item round ${$activeLang === "en"?"":"active"}`} on:click={()=>changeCurrLang(eLang.Pt)}>pt</button>
    <button class={`item round ${$activeLang === "en"?"active":""}`} on:click={()=>changeCurrLang(eLang.En)}>en</button>
</div>

<style>
    #language-selector{
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        
        text-transform: uppercase;
        cursor: pointer;
        user-select: none;
        filter: opacity(0);
        z-index: 10;
        position: absolute;
        bottom: 5rem;
        right: 10vw;
        padding: 1rem;
        transition: ease-in .1s;
        /* transform: translateX(100%); */
    }
    #language-selector.open{
        transition: ease-out .1s;
        filter: opacity(1) !important;
        display: flex;
        /* z-index: 4; */
    }
    .item{
        padding: 1rem;
        color: var(--accent);
        font-size: 1rem;
    }
    .item:hover{
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        transition: ease-in .1s;
        background-color: var(--bg-light-transparent);
        cursor: pointer;
    }
    .item.active{
        background-color: var(--bg-light-transparent);
        color: var(--accent-light);
    }
</style>
