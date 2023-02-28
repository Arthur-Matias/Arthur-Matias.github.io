<script lang="ts">
    export let stroke: string = "none";
    export let fill: string|undefined = undefined;
    export let mainColor: boolean = false
    export let strokeSize: number = 0
    export let animated: boolean = false;
</script>

<div id="logo" class={animated?"animated":""}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 836 879" >
        <path 
            fill={mainColor?"var(--main-color)":fill?fill:"var(--accent)"} 
            stroke={stroke} 
            stroke-width={strokeSize+"px"} 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M836,723.38,746.15,879c-91.55-65-201.94-97.48-314-90.64A495.2,495.2,0,0,0,182.26,879L341.42,604.53c77-20.52,158.3-10.26,228.46,28.21-41.07-70.11-81.29-141.08-122.36-211.2-9.41-17.1-19.68-33.34-29.09-50.44L124.07,879H90.7L0,723.38,418.43,0Z" 
        />
    </svg>
</div>

<style>
    #logo{
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
    }
    #logo svg{
        height: 100%;
        width: auto;
    }
    #logo.animated svg path {
        stroke-dasharray: 5000;
        stroke-dashoffset: 20000;
        animation: dash 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    }

    @keyframes dash {
        from {
            stroke-dashoffset: 5000;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>