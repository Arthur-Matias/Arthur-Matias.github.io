<script lang="ts">
    import state from "../../Storage/SystemState";
    import { activeLang } from "../../Storage/GlobalStores";
    import Card from "./Card.svelte";
    import { eLang } from "../../Storage/GlobalEnums";

    $: texts = state.texts[$activeLang].config;
    function changeCurrLang(lang: eLang) {
        activeLang.update((e) => lang);
    }
</script>

<!-- <svelte:window on:click={handleWindowClick} /> -->

<div id="config">
    <div class="config-header">
        <p class="title">
            {texts.title}
        </p>
    </div>
    <div class="options">
        <Card title={$activeLang === eLang.En ? "Language" : "Idioma"}>
            <div class="lang-setting">
                <button
                    class="lang-option {$activeLang == eLang.En
                        ? 'active'
                        : ''}"
                    on:click={() => changeCurrLang(eLang.En)}
                >
                    {$activeLang === eLang.En ? "English" : "Inglês"}
                </button>
                <button
                    class="lang-option {$activeLang == eLang.Pt
                        ? 'active'
                        : ''}"
                    on:click={() => changeCurrLang(eLang.Pt)}
                >
                    {$activeLang === eLang.En ? "Portuguese" : "Português"}
                </button>
            </div>
        </Card>
        {#each state.texts[$activeLang].config.options as option, index}
            <Card title={option.title}>
                <svelte:component this={state.settingsOptions[index]} />
            </Card>
        {/each}
    </div>
</div>

<style>
    #config {
        height: 100%;
        width: 100%;
        overflow: auto;
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
    .config-header {
        font-size: 2rem;
        text-transform: capitalize;
        width: 80%;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .options {
        max-width: 80%;
        min-width: 80%;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-direction: column;
    }
    .lang-setting {
        width: 90%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
        padding: 0.2rem;
    }
    .lang-option {
        width: 40%;
        height: 100%;
        border-radius: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
        height: 4rem;
    }
    .lang-option:hover,
    .lang-option.active {
        background-color: var(--bg-dark);
        -webkit-box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.6);
        box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
</style>
