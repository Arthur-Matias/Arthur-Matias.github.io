<script lang="ts">
    export let isOpen = false;
    export let color:string = `hsl(0,100%,41%)`;
    
    function toggleOpen() {
        isOpen = !isOpen;
    }
</script>

<div>
    <div id="nav-icon" class={isOpen ? "open" : ""} on:click={toggleOpen} >
        <span style={isOpen?`background-color: ${color}`:''}/>
        <span style={isOpen?`background-color: ${color}`:''}/>
        <span style={isOpen?`background-color: ${color}`:''}/>
    </div>
</div>
<style>
    #nav-icon {
        width: 60px;
        height: 45px;
        position: relative;
        margin: 50px auto;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        z-index: 20;
    }
    #nav-icon span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: var(--white);
        border-radius: 3px;
        opacity: 1;
        left: 0;
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
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #nav-icon span:nth-child(3) {
        top: 36px;
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
        top: -3px;
        left: 8px;
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
        top: 39px;
        left: 8px;
    }
    #nav-icon.open span:hover{
        
    }

    @media screen and (max-width: 1200px){
        #nav-icon{
            z-index: 200;
            width: 3rem;
            height: 2.25rem;
        }
        #nav-icon.open{
            z-index: 200;
            width: 4rem;
            height: 2.25rem;
        }
    }
</style>
