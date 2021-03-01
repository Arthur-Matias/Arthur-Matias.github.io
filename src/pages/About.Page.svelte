<script lang="ts">
import Me from '../components/Me.Component.svelte'
import { navigate } from "svelte-routing";
import Container from '../components/Container.Component.svelte';
export const pageNum:string='02';

// function handleMouseWheel(e: WheelEvent): void {
//         console.log(e.deltaY)
//         if(e.deltaY > 0){
//             navigate("/portfolio", { replace: true })
//         }else{
//             navigate("/", { replace: true })
//         }
//     }

    export let color: string;
    export let secondaryColor: string;

    function handleClick(): void {
        console.log(color, secondaryColor)
    }

</script>

<Container>
    <div class="about">
        <Me bind:color={color} bind:secondaryColor={secondaryColor} />
        <div class="about-card animate__animated animate__bounceIn">
            <p>I'm a <b>Designer</b> & <b>Front-end Developer</b> from Brazil, feel free to contact if you want to know more about me, my past projects or even to discuss a future one.</p>
        </div>
    </div>
</Container>

<style>
    .about{
        width: 100%;
        height: 100%;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .about-card{
        background-color: var(--bg-color);
        padding: 1rem;
        max-width: 70vw;
        min-width: 18rem;
        
    }

    .about-card > p{
        font-size: 1.5rem;
    }

    .about-card.animate__animated.animate__bounceIn{
        animation-delay: .5s;
    }

    @media screen and (max-width: 1200px){
        
    }
    @media screen and (min-width: 1600px){
        
    }
    @media screen and (min-width: 1200px) and (max-width: 1600px){
        .about-card{
            max-width: 60vw;
        }
  }
</style>