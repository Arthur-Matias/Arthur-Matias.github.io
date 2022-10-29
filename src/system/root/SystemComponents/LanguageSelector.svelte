<script lang="ts">
    import { eLang } from "../../../consts/enums";
    import { activeLang, isLanguageSelectionOpen } from "../../../consts/stores";

    function changeCurrLang(lang: eLang){
        activeLang.update(e=>lang)
    }

</script>

<div id="language-selector" class={($isLanguageSelectionOpen?"open":"") + " glass-dark round"}>
    <span class={`item round ${$activeLang === "en"?"":"active"}`} on:click={()=>changeCurrLang(eLang.Pt)}>pt</span>
    <span class={`item round ${$activeLang === "en"?"active":""}`} on:click={()=>changeCurrLang(eLang.En)}>en</span>
</div>

<style>
    #language-selector{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        
        text-transform: uppercase;
        cursor: pointer;
        user-select: none;
        filter: opacity(0);
        z-index: 0;
        position: absolute;
        bottom: 5rem;
        padding: 1rem;
        transition: ease-in .1s;
        transform: translateY(200%);
    }
    #language-selector.open{
        transform: translateY(0) ;
        transition: ease-out .1s;
        filter: opacity(1) ;
        z-index: 4 ;
    }
    .item{
        padding: 1rem;
    }
    .item:hover{
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        transition: ease-in .1s;
    }
    .item.active{
        background-color: var(--bg-dark-transparent);
        color: var(--accent-light);
    }
</style>
