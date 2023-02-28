<script lang="ts">
    import state from "../../Storage/SystemState";
    import { activeLang } from "../../Storage/GlobalStores";
    import { settingsTrayOpen } from "../../Storage/SystemStores";
    import Card from "../Scalable/Card.svelte";

    let w: number,h: number;

    $: texts = state.texts[$activeLang].config

    function handleWindowClick(mouse: MouseEvent){
        
        if ($settingsTrayOpen && !checkIfInside(mouse)) {
            closeLauncher()
        }
    }
    function closeLauncher(){
        settingsTrayOpen.update(val=> false)

    }
    function checkIfInside(e: MouseEvent) {
        
        let xRange = (e.clientX > (window.innerWidth - w)) && (e.clientX < window.innerWidth),
            yRange = (e.clientY > (window.innerHeight - h)) && (e.clientY < (window.innerHeight))

        return xRange && yRange
    }
    
</script>

<svelte:window on:click={handleWindowClick} />

<div id="config" bind:offsetHeight={h} bind:offsetWidth={w} class="round-left glass-medium {$settingsTrayOpen?"display":""}">
    <div class="config-header">
        <p class="title">
            {texts.title}
        </p>
    </div>
    <div class="options">
        {#each state.texts[$activeLang].config.options as option, index}
            <Card title={option.title}>
                <svelte:component this={state.settingsOptions[index]} />
            </Card>
        {/each}
    </div>
</div>

<style>
    #config{
        height: 100vh;
        width: 400px;
        max-width: 100vw;
        max-height: 100vh;
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        overflow: auto;
        right: -50% !important;
        -webkit-filter: opacity(0);
                filter: opacity(0);
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
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: start;
        text-align: left;
        -webkit-backdrop-filter: blur(16px);
                backdrop-filter: blur(16px);
        background-color: var(--bg-dark-transparent);
        -webkit-backdrop-filter: blur(32px);
                backdrop-filter: blur(32px);
        -webkit-transition: ease-in;
        -o-transition: ease-in;
        transition: ease-in;
    }
    #config.display{
        right: 0 !important;
        z-index: 3;
        -webkit-transition: ease-in-out .2s;
        -o-transition: ease-in-out .2s;
        transition: ease-in-out .2s;
        -webkit-filter: opacity(1);
                filter: opacity(1);
    }
    .config-header{
        font-size: 2rem;
        text-transform: capitalize;
        width: 80%;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .options{
        max-width: 80%;
        min-width: 80%;
    }
</style>
