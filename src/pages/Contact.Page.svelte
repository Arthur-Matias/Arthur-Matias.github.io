<script lang="ts">
    export let color;
    import { navigate } from "svelte-routing";
    export const pageNum:string = '04';
    function handleScroll(e){
        console.log(e.deltaY)
        if(e.deltaY > 0){
            
        }else{
            navigate("/portfolio", { replace: true })
        }
    }
    
</script>

<div class="Contact" on:wheel={e=>handleScroll(e)} >
    <h5 class="contact-title" style={`color: ${color}`}>Get in Touch</h5>
    <h1 class="call-to-action">Let's make something amazing together</h1>
    <ul class="contact-ways-list">
        <li class='list-item'>
            <a target="_blank" href="mailto:ahmmfdc@gmail.com">
                <h5 class="list-item-title">Mail me</h5>
                <h3 class="list-item-text">ahmmfdc@gmail.com</h3>
            </a>
        </li>
        <li class='list-item'>
            <a target="_blank" href="https://behance.net/arthurmm18">
                <h5 class="list-item-title">Find me on Behance</h5>
                <h3 class="list-item-text">behance.net/arthurmm18</h3>
            </a>
            </li>
            <li class='list-item'>
                <a target="_blank" href="https://linkedin.com/in/arthur-matias">
                <h5 class="list-item-title">Find me on LinkedIn</h5>
                <h3 class="list-item-text">linkedin.com/in/arthur-matias</h3>
            </a>
        </li>
        <li class='list-item'>
            <a target="_blank" href="https://github.com/Arthur-Matias">
                <h5 class="list-item-title">Find me on GitHub</h5>
                <h3 class="list-item-text">github.com/Arthur-Matias</h3>
            </a>
        </li>
    </ul>
</div>

<style>
    
    .Contact{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;

        background-image: url('./logo.svg');
		background-repeat: no-repeat;
		background-size: 80vh;
		background-position: 145%;
        animation: slideIn .2s;
    }
    @keyframes slideIn{
        0%{
            transform: translateY(10000px);
        }
        100%{
            transform: translateY(0);

        }
    }
    .contact-title{
        text-decoration: underline;
        font-weight: 300;
        align-self: flex-start;
    }
    .call-to-action{
        max-width: 70rem;
        line-height: 4rem;
        margin-bottom: 2rem;
    }
    .contact-ways-list{
        list-style-type: none;
    }

    .list-item{
        margin-top: 3rem;
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
    @media screen and (max-width: 1200px){
        .call-to-action{
            font-size: 24px;
            line-height: 20px !important;
            margin-bottom: 2rem;
        }

        .Contact{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
            padding: 1rem;
        }

        .list-item{
            line-height: 20px !important;
            margin-top: 1.5rem !important;
            
        }
        .contact-title{
            margin-top: 2rem;
        }

        .list-item-title{
            font-size: 12px;
        }
        .list-item-text{
            font-size: 20px;
            max-width: 280px;
        }
    }
</style>