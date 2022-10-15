<script lang="ts">
    import Logo from "../components/Logo.svelte";
</script>

<div id="welcome-app">
    <div class="logo-container">
        <Logo />
    </div>
</div>

<style>
    #welcome-app{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #welcome-app > .logo-container{
        height: 5rem;
        width: 5rem;
    }
</style>
