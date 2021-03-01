<script lang="ts">
import DesignIcon from "../components/DesignIcon.Component.svelte";
import ProgIcon from "../components/ProgIcon.Component.svelte";

    export let isDesignSelected: boolean = false;
    export let isProgSelected: boolean = false;
    export let color: string;
    export const pageNum:string = '03';
    import { navigate } from "svelte-routing";
import Container from "../components/Container.Component.svelte";

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


<Container>

<div class="portfolio" style={`--main-color: ${color}`} on:wheel={e=>handleMouseWheel(e)}>
    <a href="https://github.com/Arthur-Matias">
        <div class="portfolio-card animate__animated animate__fadeIn" 
             on:mouseover="{toggleProgSelect}" 
             on:mouseout="{toggleProgSelect}"
        >
            <div class="card-header">
                <ProgIcon bind:isSelected={isProgSelected} bind:color={color} />
            </div>
                <div class={`${isProgSelected?'show card-content':'card-content'}`}>
                    <h2>Programming</h2>
                    <p>
                        Click here to take a look at my GitHub profile, i work with 
                        web development, focusing on the front-end, but I also have
                        knowledge on back-end and other languages, such as C #, Java
                        and Python.
                    </p>
                </div>
        </div>
    </a>
    <a href="https://github.com/Arthur-Matias">
        <div class="portfolio-card animate__animated animate__fadeIn" on:mouseover="{toggleDesignSelect}" on:mouseout="{toggleDesignSelect}">
            <div class="card-header">
                <DesignIcon bind:isSelected={isDesignSelected} bind:color={color} />
            </div>
            <div class={`${isDesignSelected?'show card-content':'card-content'}`}>
                <h2>Design</h2>
                <p>
                    Click here to take alook at my Behance profile. i work with Graphic Design since 2017.
                    and currently i'm learning more about the UI/UX areas also. I have knowledge on the 
                    whole Adobe suite as i do also know some other softwares like Corel Draw, Gimp, Inkscape,
                    Da'Vinci Resolve, Sony Vegas, Figma, Framer and more...
                </p>
                
            </div>
        </div>
    </a>
</div>

</Container>


<style>
    .portfolio{
        width: 100%;
        height: 100%;

        display: flex;

        

        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    .portfolio-card{
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        position: relative;
        height: 20rem;
        width: 20rem;
        margin: 2rem;
        background-color: var(--bg-color);

        overflow: hidden;
        -webkit-box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.44);
        -moz-box-shadow:    0px 0px 60px 5px rgba(0, 0, 0, 0.44);
        box-shadow:         0px 0px 60px 5px rgba(0, 0, 0, 0.44);
        /* -webkit-box-shadow: inset 0px 0px 30px -5px rgba(0, 0, 0, 0.44);
        -moz-box-shadow:    inset 0px 0px 30px -5px rgba(0, 0, 0, 0.44);
        box-shadow:         inset 0px 0px 30px -5px rgba(0, 0, 0, 0.44); */
    }
    .card-content{
        overflow-y: auto;
        display: none;
        position: absolute;
        top: 0;
        text-align: justify;
        padding: 1rem;
        height: 100%;
        background: var(--main-color);
    }
    .card-content h2{
        color: var(--white);
        margin-bottom: 1rem;
        position: sticky;
        font-weight: 900;
    }

    .card-content p{
        color: var(--white);
        font-weight: 500;
        font-size: 1.2rem;
    }

    .show{
        display: block;
    }

    @media screen and (max-width: 600px){
        .portfolio{
            flex-direction: column;
        }
        .portfolio-card{
            width: 15rem;
            height: 15rem;
            top: 20%;
            margin: 1rem;
        }
        .card-content{
            display: block;
        }
    }
</style>