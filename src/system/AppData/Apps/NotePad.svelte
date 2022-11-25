<script lang="ts">
    import type { AppProps, iNote } from "../../Global/consts/types";
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";

    export let props: AppProps;

    let notes: iNote[] = [];
    let firstNote: iNote = {
        title: "teste",
        text: "Lorem ipsum sit dolor amet ...."
    }
</script>

<div id="notepad">
    
</div>

<style>
    #notepad{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
