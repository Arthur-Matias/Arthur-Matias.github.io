<script lang="ts">
    import Logo from "./Logo.Component.svelte";
    import {Link} from 'svelte-routing'
    export let color;
    export let isOpen;
    export let pageNum = '01';

    function handleMouseOver(e){
        e.target.style = `color: ${color};`
    }
    function handleMouseOut(e){
        e.target.style = `color: var(--bg-color);`
    }
</script>
<Link to="/">
    <Logo bind:color={color} />    
</Link>
        <div class={`social-media`}>
            <a target="_blank" href="https://www.linkedin.com/in/arthur-matias/" on:mouseout={handleMouseOut} on:mouseover={handleMouseOver}>
                <div class="social-icon">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
            </a>
            <a target="_blank" href="https://www.behance.net/arthurmm18" on:mouseout={handleMouseOut} on:mouseover={handleMouseOver}>
                <div class="social-icon">
                    <i class="fa fa-behance-square" aria-hidden="true"></i>
                </div>
            </a>
            <a target="_blank" href="https://github.com/Arthur-Matias" on:mouseout={handleMouseOut} on:mouseover={handleMouseOver}>
                <div class="social-icon">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                </div>
            </a>
        </div>
        <div class="trace">
            <div></div>
        </div>
        <div class="page" style={isOpen?'display: none':''}>
            <p style={`color: ${color}`}>{pageNum}<b style={`color: var(--white)`}>/04</b></p>
        </div>
<style>
    a:hover{
        color: none;
    }
    .social-media{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        padding-top: 5rem;
    }
    .social-icon{
        height: 2rem;
        width: 2rem;
        margin: .5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bg-color);
        font-size: 2rem;
    }
    .trace {
        padding: 1.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .trace > div{
        background-color: var(--bg-color);
        min-height: 100%;
        width: 5px;
    }
    .page{
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }
    .page > p{
        font-family: var(--code-font);
        transform: rotate(-90deg);
        letter-spacing: .1rem;
        z-index: 1;
    }
    .page > p > b{
        margin-left: .2rem;
        font-weight: 400;
    }
    .side-bar-wrapper{
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    @media screen and (max-width: 1000px){
        .trace,
        .page,
        .social-media{
            display: none;
        }
    }

</style>