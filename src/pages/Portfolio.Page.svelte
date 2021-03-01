<script lang="ts">
import DesignIcon from "../components/DesignIcon.Component.svelte";
import ProgIcon from "../components/ProgIcon.Component.svelte";

    export let isDesignSelected: boolean = false;
    export let isProgSelected: boolean = false;
    export let color: string;
    export const pageNum:string = '03';
    import { navigate } from "svelte-routing";

function handleMouseWheel(e: WheelEvent){
        console.log(e.deltaY)
        isDesignSelected || isProgSelected ? ''
        :
            (()=>{if(e.deltaY > 0){
                navigate("/contact", { replace: true })
            }else{
                navigate("/about", { replace: true })
            }})
        
    }
    function toggleDesignSelect(): void {
        isDesignSelected = !isDesignSelected;
    }
    function toggleProgSelect(): void  {
        isProgSelected = !isProgSelected;
    }
</script>

<div class="portfolio" on:wheel={e=>handleMouseWheel(e)}>
    <a href="https://github.com/Arthur-Matias">
        <div class="portfolio-card" 
             on:mouseover="{toggleProgSelect}" 
             on:mouseout="{toggleProgSelect}"
        >
            <div class="card-header">
                <ProgIcon bind:isSelected={isProgSelected} bind:color={color} />
            </div>
                <div class={`${isProgSelected?'show card-content':'card-content'}`}>
                    <p>
                        In early 2019 I started searching the web for information about programming logic and its
                        languages, where I discovered that this was my dream field, in 2020 with the COVID-19 
                        pandemic, I locked up the college, and I took the opportunity to learn everything that I
                        could about this area, each time identifying myself more. Currently my focus is web development
                        with TypeScript, HTML5, CSS3, and their frameworks. But I also know C #, Java and Python.
                    </p>
                </div>
        </div>
    </a>
    <a href="https://github.com/Arthur-Matias">
        <div class="portfolio-card" on:mouseover="{toggleDesignSelect}" on:mouseout="{toggleDesignSelect}">
            <div class="card-header">
                <DesignIcon bind:isSelected={isDesignSelected} bind:color={color} />
            </div>
            <div class={`${isDesignSelected?'show card-content':'card-content'}`}>
                <p>
                    In 2017, i had the opportunity to join the Federal University of Paraná, where 
                    i learned about design concepts and softwares like Adobe Photoshop and illustrator,
                    industrial drawing, 3D modelling, calculus 1 2 & 3, analytical and descriptive 
                    geometry and also where i first knew JavaScript.
                </p>
                
            </div>
        </div>
    </a>
</div>

<style>
    .portfolio{
        width: 100%;
        height: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        background-image: url('./logo.svg');
		background-repeat: no-repeat;
		background-size: contain;
    }

    @keyframes slideIn{
        0%{
            transform: translateX(-10000px);
        }
        100%{
            transform: translateX(0);

        }
    }

    .portfolio-card{

    }
    .card-content{

    }

    .card-content p{
        color: var(--white);
    }

    .show{
        display: block;
    }

    @media screen and (max-width: 1200px){
        .portfolio{
            flex-direction: column;
            background-size: contain;
        }
        .portfolio-card{
            width: 233px;
            height: 233px;
            margin: .5rem;
        }
        .portfolio-card:first-child{
            margin-top: 2rem;
        }
    }
</style>