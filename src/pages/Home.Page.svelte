<script lang="ts">
    import { navigate } from "svelte-routing";
    import Container from "../components/Container.Component.svelte";
    import SideBar from "../components/SideBar.Component.svelte";
    
    export const pageNum: string = '01'
    export let color: string;
    function handleMouseWheel(e: WheelEvent): void {
        console.log(e.deltaY)
        if(e.deltaY > 0){
            navigate("/about", { replace: true })
        }
    }
</script>

<Container>
    <div class="home" on:wheel="{e=>handleMouseWheel(e)}">
        <h5 class="animate__animated animate__fadeInLeft" style={`color: ${color}`} >Hi, my name is</h5>
        <h1 class="animate__animated animate__fadeInRight">Arthur Matias</h1>
    </div>
</Container>

<style>
    .home{
        position: relative;
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;
    }
    .home h5{
        font-size: 1.5rem;
        text-decoration: underline;
        font-family: var(--code-font);
        font-weight: 300;
        letter-spacing: .3rem;
        animation-duration: 1s;
    }
    .home h1{
        font-size: 4.5rem;
        font-weight: 900;

        animation-duration: 1s;
    }

    @media screen and (max-width: 1200px){

    }


</style>