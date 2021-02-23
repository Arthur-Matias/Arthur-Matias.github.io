<script lang="ts">
import Me from '../components/Me.Component.svelte'
import { navigate } from "svelte-routing";
export const pageNum:string='02';

function handleScroll(e){
        console.log(e.deltaY)
        if(e.deltaY > 0){
            navigate("/portfolio", { replace: true })
        }else{
            navigate("/", { replace: true })
        }
    }

    export let color: string;
    export let secondaryColor: string;

    function handleClick(){
        console.log(color, secondaryColor)
    }

</script>

<div class="about" on:mousewheel={e=>handleScroll(e)}>
    <Me bind:color={color} bind:secondaryColor={secondaryColor} />
    <div class="about-card">
        <p>I'm a <b>Designer</b> & <b>Front-end Developer</b> from Brazil, feel free to contact if you want to know more about me, my past projects or even to discuss a future one.</p>
    </div>
</div>

<style>
    .about{
        width: 100%;
        height: 100%;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-image: url('./logo.svg');
		background-repeat: no-repeat;
		background-size: 80vh;
		background-position: 50% 90%;
        animation: slideIn .2s;
    }

    @keyframes slideIn{
        0%{
            transform: translateX(10000px);
        }
        100%{
            transform: translateX(0);
        }
    }

    .about-card{
        background-color: var(--bg-color);
        padding: 1rem;
        max-width: 40vw;
        min-width: 300px;
    }

    @media screen and (max-width: 1200px){
        .about{
            background-image: url('./logo.svg');
		    background-repeat: no-repeat;
            background-size: 50vh;
            background-position: 50%;
        }
    }
    @media screen and (min-width: 1600px){
        
    }
    @media screen and (min-width: 1200px) and (max-width: 1600px){
        .about-card{
            max-width: 60vw;
        }
  }
</style>