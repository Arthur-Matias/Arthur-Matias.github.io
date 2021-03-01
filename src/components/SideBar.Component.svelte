<script lang="ts">
    import Logo from "./Logo.Component.svelte";
    import Trace from "./Trace.Component.svelte";
    import {Link} from 'svelte-routing'
    export let color: string;
    export let pageNum: string = '01';

    function handleMouseOver(e){
        e.target.style = `color: ${color};`
    }
    function handleMouseOut(e){
        e.target.style = `color: var(--bg-color);`
    }
</script>

<div class="side-bar-container" style="--main-color: {color}">
    
        <div class="logo-wrapper">
            <Link to="/">
                <Logo bind:color={color}  />
            </Link>
        </div>
    
    <div class='social-media'>
        <a target="_blank" href="https://www.linkedin.com/in/arthur-matias/">
            <div class="social-icon">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
        </a>
        <a target="_blank" href="https://www.behance.net/arthurmm18">
            <div class="social-icon">
                <i class="fa fa-behance-square" aria-hidden="true"></i>
            </div>
        </a>
        <a target="_blank" href="https://github.com/Arthur-Matias">
            <div class="social-icon">
                <i class="fa fa-github-square" aria-hidden="true"></i>
            </div>
        </a>
    </div>
    <div class="trace-container">
        <Trace />
    </div>
    <div class="page" >
        <p style={`color: ${color}`}>{pageNum}<b style={`color: var(--white)`}>/04</b></p>
    </div>
</div>

<style>
    .side-bar-container{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: repeat(8, 1fr);
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
    }
    .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row-start:1 ;
        grid-row-end:2;
        z-index: 300;
       
    }
    .social-media{
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .social-media > a{
        color: var(--bg-color);
    }

    .social-icon{
        font-size: 2.5rem;
        transition: color 0.2s ease;
    }
    .social-icon:hover{
        color: var(--main-color);
    }
    .trace-container{
        grid-row-start: 3;
        grid-row-end: 8;
        height: 100%;
    }
    .page{
        transform: rotate(-90deg);
        grid-row-start: 8;
        grid-row-end: 9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    @media screen and (max-height: 768px){
        .social-icon{
            font-size: 2rem;
        }
        .page{
            font-size: 1rem;
        }
    }

</style>