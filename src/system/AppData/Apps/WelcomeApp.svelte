<script lang="ts">
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";
    import type { AppProps } from "../../Global/consts/types";
    import { activeLang, isMobile } from "../../Global/consts/stores"
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";

    export let props: AppProps;
    console.log(props)
</script>

<div id="welcome-app">
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

<style>
    #welcome-app{
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
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
    }
    h3.title{
        width: 100%;
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
