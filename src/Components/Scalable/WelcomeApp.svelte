<script lang="ts">
    import { activeLang, isMobile } from "../../Storage/GlobalStores";
    import type { AppProps } from "../../Storage/GlobalTypes";
    import Logo from "./Icons/Logo.svelte";
    import IconSelector from "./IconSelector.svelte"

    export let props: AppProps;

    let el:HTMLDivElement;
    let maximized: boolean = false;
    // function isMax(){
    //     return el?.getBoundingClientRect().height > 640
    // }
    // setTimeout(()=>maximized = isMax(), 1000)

</script>

<div id="welcome-app" class={maximized?"maximized":""} bind:this={el}>
    {#if !$isMobile}
        <h2 class="name">
            {props.texts[$activeLang].name}
        </h2>
    {/if}
    <h2 class="title">
        {props.texts[$activeLang].title}
    </h2>
    <p class="description">
        {props.texts[$activeLang].description}
        <a href={props.texts[$activeLang].link.url} target="_blank" rel="noreferrer">{props.texts[$activeLang].link.text}</a>
    </p>
    <div class="container">
        <h3 class="title">{props.texts[$activeLang].dev.title}</h3>
        <section class="development-section">
            {#each props.texts[$activeLang].dev.by as card}
                <a target="_blank" rel="noreferrer" href={card.url} class="card round">
                    <div class="card-icon">
                        <IconSelector iconName={card.icon} />
                    </div>
                    <div class="card-texts">
                        <p class="card-name">{card.name}</p>
                        <p class="card-description">{card.description}</p>
                    </div>
                </a>
            {/each}
        </section>
    </div>
    <div class="logo-container">
        <Logo fill={"var(--bg-light)"}/>
    </div>
    <!-- <div class="wrapper">
    </div> -->
</div>

<style >
    #welcome-app{
        position: static;
        height: 100%;
        width: 100%;
        max-width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow-y: auto;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
    }
    .container{
        margin: 2rem 0;
        height: auto;
        width: 80%;
    }
    .name{
        font-size: 2rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    h2.title{
        width: 80%;
        text-align: left;
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }
    h3.title{
        /* width: 100%; */
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: left;
    }
    
    .description{
        margin-bottom: 2rem;
        text-align: left;
        width: 80%;
    }
    .logo-container{
        height: 3rem;
        aspect-ratio: 1 / 1;
        margin-bottom: 2rem;
    }
    .development-section{
        margin-bottom: 2rem;
    }
    .card{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: start;
        padding: 1rem;
        width: 300px;
        cursor: pointer;
        -webkit-transition: ease .2s;
        -o-transition: ease .2s;
        transition: ease .2s;
        text-decoration: none;
    }
    .card:hover{
        -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, var(--transparency));
                box-shadow: 0px 0px 8px rgba(0, 0, 0, var(--transparency));
    }
    .card:active{
        -webkit-box-shadow: inset 0px 0px 8px rgba(0, 0, 0, var(--transparency));
                box-shadow: inset 0px 0px 8px rgba(0, 0, 0, var(--transparency));
    }
    .card-icon{
        height: 2rem;
        width: auto;
        aspect-ratio: 1 / 1;
        margin-right: 1rem;
    }
    .card-texts{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        text-align: start;
    }
    @media screen and (orientation:portrait) { 
        .name{
            font-size: 2rem;
            margin-bottom: 4rem;
            margin-top: 2rem;
        }
        .title{
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }
        .card{
            width: 90%;
        }
    }
</style>
