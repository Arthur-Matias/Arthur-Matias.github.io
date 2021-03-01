<script lang="ts">
    export let color;
    import { navigate } from "svelte-routing";
import Container from "../components/Container.Component.svelte";
    export const pageNum:string = '04';
    function handleScroll(e: WheelEvent){
        console.log(e.deltaY)
        if(e.deltaY > 0){
            
        }else{
            navigate("/portfolio", { replace: true })
        }
    }
    
</script>

<Container>
    <div class="Contact" on:wheel={e=>handleScroll(e)} >
        <div class="content-wrapper">
            <h4 class="contact-title animate__animated animate__bounceIn" style={`color: ${color}`}>Get in Touch</h4>
            <h1 class="call-to-action animate__animated animate__lightSpeedInLeft">Let's make something amazing together</h1>
            <ul class="contact-ways-list">
                <li class='list-item animate__animated animate__flipInX'>
                    <a target="_blank" href="mailto:ahmmfdc@gmail.com">
                        <h5 class="list-item-title">Mail me</h5>
                        <h3 class="list-item-text">ahmmfdc@gmail.com</h3>
                    </a>
                </li>
                <li class='list-item animate__animated animate__flipInX'>
                    <a target="_blank" href="https://behance.net/arthurmm18">
                        <h5 class="list-item-title">Find me on Behance</h5>
                        <h3 class="list-item-text">behance.net/arthurmm18</h3>
                    </a>
                    </li>
                    <li class='list-item animate__animated animate__flipInX'>
                        <a target="_blank" href="https://linkedin.com/in/arthur-matias">
                        <h5 class="list-item-title">Find me on LinkedIn</h5>
                        <h3 class="list-item-text">linkedin.com/in/arthur-matias</h3>
                    </a>
                </li>
                <li class='list-item animate__animated animate__flipInX'>
                    <a target="_blank" href="https://github.com/Arthur-Matias">
                        <h5 class="list-item-title">Find me on GitHub</h5>
                        <h3 class="list-item-text">github.com/Arthur-Matias</h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</Container>

<style>
    
    .Contact{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .content-wrapper{
        text-align: center
    }
    .contact-title{
        text-decoration: underline;
        font-weight: 300;
        left: 0;
    }
    .call-to-action{
        max-width: 40rem;
        line-height: 2rem;
        margin-bottom: 1rem;
    }
    .contact-ways-list{
        list-style-type: none;
    }

    .list-item{
        margin-top: 2rem;
    }

    .list-item-title{
        font-weight: 300;
        color: var(--white);
        line-height: .2rem;
    }
    .list-item-text{
        color: var(--white);
    }
    
    @media screen and (min-width: 1200px) and (max-width: 1600px){
        
    }
    @media screen and (max-width: 600px){
        .content-wrapper h1{
            font-size: 1.5rem;
        }
        .list-item-text{
            margin-top: .2rem;
            font-size: 1rem;
        }
    }
</style>