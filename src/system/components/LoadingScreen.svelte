<script lang="ts">
    import { isLoading } from "../../consts/stores";
    import Logo from "./Logo.svelte";

    let logoFill = "none";
    let logoStroke = "var(--accent)";
    let logoStrokeSize = 16;

</script>

<div id="loading-screen" class={$isLoading?"show glass-dark":""}>
    <div class="logo-container">
        <Logo stroke={logoStroke} fill={logoFill} strokeSize={logoStrokeSize} animated={true}/>
    </div>
</div>
<style>
    #loading-screen{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        filter: opacity(0);
        z-index: 0;
        cursor: wait;
    }
    .show{
        z-index: 1000 !important;
        filter: opacity(1) !important;
    }
    .logo-container{
        height: 25vw;
        width: 25vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .glass-dark{
        background-color: var(--bg-dark-transparent);
        backdrop-filter: blur(32px);
        transition: ease-in;
    }
</style>
