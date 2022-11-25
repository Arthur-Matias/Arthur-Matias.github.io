<script lang="ts">
    import state from "../../Storage/state";
    import { activeLang } from "../../../Global/consts/stores";
    import { settingsTrayOpen } from "../../Storage/stores";
    import Card from "../../../Global/Components/Scalable/Card.svelte";

    let w: number,h: number;
    let toolbarHeight = 76;

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
        filter: opacity(0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        text-align: left;
        backdrop-filter: blur(16px);
        background-color: var(--bg-dark-transparent);
        backdrop-filter: blur(32px);
        transition: ease-in;
    }
    #config.display{
        right: 0 !important;
        z-index: 3;
        transition: ease-in-out .2s;
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
