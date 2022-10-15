<script lang="ts">
    import type { iNote } from "../../consts/types";
    import Logo from "../components/Logo.svelte";

    let notes: iNote[] = [];

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
