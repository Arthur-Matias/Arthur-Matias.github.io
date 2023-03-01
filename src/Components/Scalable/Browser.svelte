<script lang="ts">
    import type { AppProps } from "../../Storage/GlobalTypes";
    import Page from "./Browser/Page.svelte"
    // var test = "test";
    // const originalUrl = `http://localhost:5174/`
    // let url = originalUrl
    let urlToGo = window.location.href;
    // let iframeEl: HTMLIFrameElement;

    // import Page from "../Components/Scalable/Browser/Page.svelte";

    // var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    // var noHttpRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

    // let history = []

    // function handleKeyDown(e){
    //     if(e.key === "Enter"){
    //         handleClick()
    //     }
    // }

    // function handleClick(){
    //     if(history.length >= 5){
    //         history.pop()
    //     }
    //     if(httpRegex.test(url)){
    //         urlToGo = url
    //     }else if(noHttpRegex.test(url)){
    //         urlToGo = "http://" + url
    //     }else{
    //         urlToGo = `https://www.google.com/search?q=${url.replaceAll(" ", "+")}&igu=1`
    //     }
        
    // }

    // function handleHome(){
    //     history.push(urlToGo)
    //     urlToGo = originalUrl
    // }
    // function handleRefresh(){
    //     iframeEl.src = iframeEl.src
    // }
    // function handleBack(){
    //     if(history[history.length-1]){
    //         urlToGo = history[history.length-1]
    //     }
    // }
    // function handleNext(){
    //     if(history[history.length+1]){
    //         urlToGo = history[history.length+1]
    //     }
    // }

    export let props: AppProps;
</script>

<div id="browser">
    <div class="browser-controls">
        <div class="btn-pack">
            <button class="btn" >
                <svg style="transform: scale(.7);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" fill="var(--accent)"/></g></g></svg>
            </button>
            <button class="btn" >
                <svg style="transform: scale(.7);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z" fill="var(--accent)"/></g></g></svg>
            </button>
        </div>
        <div class="input-wrapper">
            <input type="text" class="round-left" bind:value={urlToGo}/>
            <div class="search-btn btn round-right">
                <svg style="transform: scale(.7);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z" fill="var(--accent)"/></g></g></svg></div>
        </div>
        <div class="btn-pack">
            <button class="btn">
                <svg style="transform: scale(.5);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" fill="var(--accent)"/></g></g></svg>
            </button>
            <button class="btn">
                <svg style="transform: scale(.5);" xmlns="http://www.w3.org/2000/svg" fill="var(--accent)" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><rect x="10" y="14" width="4" height="7"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z"/></g></g></svg>
            </button>
        </div>
    </div>
    <div class="page">
        <Page props={props}/>
    </div>
</div>

<style>
    #browser{
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
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
        /* display: grid; */
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        background-color: var(--bg-dark);
        position: static;
        overflow: hidden;
    }
    .browser-controls{
        height: 4rem;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        /* position: fixed; */
    }
    .page{
        height: calc(100% - 4rem);
        width: 100%;
    }
    .input-wrapper{
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
    .input-wrapper > input {
        width: 100%;
        height: 50%;
        outline: none;
        border: none;
        padding: 0 2rem;
        background-color: var(--bg-light);
        color: var(--accent);
    }
    .btn-pack{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 30%;
        height: 100%;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .btn-pack > .btn{
        height: 2rem;
        width: 2rem;
        aspect-ratio: 1 \ 1;
        
        border-radius: 0.5rem;
    }
    .btn:hover{
        -webkit-box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.6);
                box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.6);
        background-color: var(--bg-light);
    }
    .btn:active{
        -webkit-box-shadow: inset 0px 0px .5rem black;
                box-shadow: inset 0px 0px .5rem black;
    }

    .search-btn{
        cursor: pointer;
        height: 50%;
        width: auto;
        background-color: var(--main-color);
        aspect-ratio: 1 / 1;
        -webkit-filter: opacity(.5);
                filter: opacity(.5);
        -webkit-transition: ease-in-out .2s;
        -o-transition: ease-in-out .2s;
        transition: ease-in-out .2s;
    }
    .search-btn:hover{
        -webkit-filter: opacity(1);
                filter: opacity(1);
    }
    .btn-pack > .btn:first-of-type{
        margin-right: .5rem;
    }
    .btn-pack > .btn:last-of-type{
        margin-left: .5rem;
    }

    .btn:hover{cursor: pointer;}
</style>
