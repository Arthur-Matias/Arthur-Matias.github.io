<script lang="ts">
    import Logo from "./Icons/Logo.svelte";

    const logoFill = "none",
          logoStroke = "var(--accent)",
          logoStrokeSize = 16;
</script>

<div id="loading-screen" class="glass">
    <div class="logo-container">
        <Logo stroke={logoStroke} fill={logoFill} strokeSize={logoStrokeSize} animated={true}/>
    </div>
</div>

<style>
#loading-screen{
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: wait;
}
.logo-container{
    height: 25vh;
    aspect-ratio: 1 / 1;
}
</style>