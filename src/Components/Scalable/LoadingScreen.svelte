<script lang="ts">
    import Logo from "./Icons/Logo.svelte";

    const logoFill = "none",
          logoStroke = "var(--accent)",
          logoStrokeSize = 16;
</script>

<div id="loading-screen" class="glass-strong">
    <div class="logo-container">
        <Logo stroke={logoStroke} fill={logoFill} strokeSize={logoStrokeSize} animated={true}/>
    </div>
</div>

<style>
#loading-screen{
    height: 100%;
    width: 100%;
    
    position: absolute;
    top: 0;
    left: 0;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    cursor: wait;
}
.logo-container{
    height: 25vh;
    aspect-ratio: 1 / 1;
}
</style>