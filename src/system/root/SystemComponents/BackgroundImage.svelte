<script lang="ts">
    import state from "../../../consts/state";
    import { activeBg } from "../../../consts/stores";
</script>

<div id="bg" preload="true" style="background-image: url({state.images.background[$activeBg]});">
    
</div>

<style>
    #bg{
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
