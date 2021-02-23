<script lang="ts">
    import { navigate } from "svelte-routing";
    export let color;
    export const pageNum:string='01';
    function handleScroll(e){
        console.log(e.deltaY)
        if(e.deltaY > 0){
            navigate("/about", { replace: true })
        }
    }
</script>

<div class="home" on:mousewheel="{e=>handleScroll(e)}">
    <h5 style={`color: ${color}`}>Hi, my name is</h5>
    <h1>Arthur Matias</h1>
</div>

<style>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-image: url('./logo.svg');
		background-repeat: no-repeat;
		background-size: 80vh;
		background-position: 50%;
    }
    .home h5{
        text-decoration: underline;
        font-family: var(--code-font);
        font-weight: 300;
        letter-spacing: .5rem;
    }

    @media screen and (max-width: 1200px){
        .home{
            background-size: 20rem;
            background-position: 30%;
        }
    }


</style>