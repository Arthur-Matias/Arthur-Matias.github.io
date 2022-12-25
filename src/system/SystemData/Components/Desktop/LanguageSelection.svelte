<script lang="ts">
    import { activeLang } from "../../../Global/consts/stores";
    import { isLanguageSelectionOpen } from "../../../AppData/Storage/stores";
    import LanguageSelector from "../Scalable/LanguageSelector.svelte";

    let active = false;

    function showOptions() {
        isLanguageSelectionOpen.update(() => !$isLanguageSelectionOpen);
    }
    function toggleOptions() {
        active = !active;
    }
</script>

<button
    id="language-button"
    on:click={showOptions}
    on:mouseover={toggleOptions}
    on:mouseout={toggleOptions}
    on:focus={() => {
        console.log("focus");
    }}
    on:blur={() => {
        console.log("blur");
    }}
>
    <p
        class="{active
            ? 'shadow-inset-light round'
            : ''} {$isLanguageSelectionOpen ? 'shadow-inset-light round' : ''}"
    >
        {$activeLang}
    </p>
</button>

<style>
    #language-button {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: right;
        -ms-flex-pack: right;
        justify-content: right;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    #language-button p {
        padding: 1rem;
    }
</style>
