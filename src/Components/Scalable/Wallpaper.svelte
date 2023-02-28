<script lang="ts">
    import state from "../../Storage/SystemState";
    import { activeBg } from "../../Storage/SystemStores"
</script>

<div id="bg" style="background-image: url({state.images[$activeBg]});">
    
</div>

<style>
    #bg{
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
