<script lang="ts">
    import Logo from './Logo.Component.svelte';
    import { Link } from 'svelte-routing'
    export let isOpen = false;
    export let color:string = `hsl(0,100%,41%)`;
    
    function toggleOpen() {
        isOpen = !isOpen;
    }
</script>

    <div id="nav-icon" class={isOpen ? "open" : ""} on:click={toggleOpen} >
        <span style={isOpen?`background-color: ${color}`:''}/>
        <span style={isOpen?`background-color: ${color}`:''}/>
        <span style={isOpen?`background-color: ${color}`:''}/>
    </div>
<style>
    #nav-icon {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        z-index: 300;
        height: 3.5rem;
        width: 3.5rem;
    }
    #nav-icon span {
        display: block;
        position: absolute;
        height: 0.5rem;
        width: 3.5rem;
        background: var(--white);
        border-radius: 3px;
        opacity: 1;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }
    #nav-icon span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #nav-icon span:nth-child(2) {
        top: 1.125rem;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #nav-icon span:nth-child(3) {
        top: 2.25rem;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #nav-icon.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -0.18rem;
        left: .5rem;
    }
    #nav-icon.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
    #nav-icon.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 2.43rem;
        left: .5rem;
    }
    #nav-icon:hover span{
        filter: brightness(.8);
    }
</style>
