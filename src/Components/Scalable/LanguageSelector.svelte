<script lang="ts">
    import { activeLang } from '../../Storage/GlobalStores'
    import { eLang } from "../../Storage/GlobalEnums";
    import { isLanguageSelectionOpen } from "../../Storage/AppStores";
    
    let element: HTMLElement;

    function changeCurrLang(lang: eLang){
        activeLang.update(e=>lang)
    }
    
</script>
<div bind:this={element} id="language-selector" class="{($isLanguageSelectionOpen?"open glass-strong":"")}  round">
    <button class={`item round ${$activeLang === "en"?"":"active"}`} on:click={()=>changeCurrLang(eLang.Pt)}>pt</button>
    <button class={`item round ${$activeLang === "en"?"active":""}`} on:click={()=>changeCurrLang(eLang.En)}>en</button>
</div>

<style>
    #language-selector{
        display: none;
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
        font-size: 1.5rem;
        
        text-transform: uppercase;
        cursor: pointer;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-filter: opacity(0);
                filter: opacity(0);
        z-index: 10;
        position: absolute;
        bottom: 5rem;
        right: 10vw;
        padding: 1rem;
        -webkit-transition: ease-in .1s;
        -o-transition: ease-in .1s;
        transition: ease-in .1s;
        /* transform: translateX(100%); */
    }
    #language-selector.open{
        -webkit-transition: ease-out .1s;
        -o-transition: ease-out .1s;
        transition: ease-out .1s;
        -webkit-filter: opacity(1) !important;
                filter: opacity(1) !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        /* z-index: 4; */
    }
    .item{
        padding: 1rem;
        color: var(--accent);
        font-size: 1rem;
    }
    .item:hover{
        -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
                box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.60);
        -webkit-transition: ease-in .1s;
        -o-transition: ease-in .1s;
        transition: ease-in .1s;
        background-color: var(--bg-light-transparent);
        cursor: pointer;
    }
    .item.active{
        background-color: var(--bg-light-transparent);
        color: var(--accent-light);
    }
</style>
