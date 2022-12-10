<script lang="ts">
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";
    import type { AppProps } from "../../Global/consts/types";
    import { activeLang } from "../../Global/consts/stores"
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";

    export let props: AppProps;
</script>

<div id="welcome-app">
    <div class="wrapper">
        <h2 class="name">
            {props.texts[$activeLang].name}
        </h2>
        <div class="container">
            <h3 class="title">
                {props.texts[$activeLang].title}
            </h3>
            <p class="description">
                {props.texts[$activeLang].description}
                <a href={props.texts[$activeLang].link.url} target="_blank" rel="noreferrer">{props.texts[$activeLang].link.text}</a>
            </p>
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
    </div>
</div>

<style>
    #welcome-app{
        position: relative;
        height: 100%;
        width: 100%;
    }
    .wrapper{
        
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
        overflow-y: auto;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: auto;
    }
    .wrapper .name{
        font-size: 2rem;
        margin-bottom: 4rem;
        margin-top: 2rem;
    }
    .container .title{
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    .container .description{
        margin-bottom: 4rem;
        text-align: left;
    }
    .logo-container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: 3rem;
        width: 100%;
    }
    .development-section{
        margin-bottom: 2rem;
    }
    .card{
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 1rem;
        width: 300px;
        cursor: pointer;
        transition: ease .2s;
        text-decoration: none;
    }
    .card:hover{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, var(--transparency));
    }
    .card:active{
        box-shadow: inset 0px 0px 8px rgba(0, 0, 0, var(--transparency));
    }
    .card-icon{
        height: 2rem;
        width: auto;
        aspect-ratio: 1 / 1;
        margin-right: 1rem;
    }
    .card-texts{
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    @media screen and (orientation:portrait) { 
        /* .wrapper .name{
            font-size: 2rem;
            margin-bottom: 4rem;
            margin-top: 2rem;
        }
        .container .title{
            font-size: 1.6rem;
            margin-bottom: 1rem;
        } */
    }
</style>
