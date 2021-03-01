<script lang="ts">
    export let color: string;
</script>

<div class="logo">
    <svg viewBox="0 0 775 807" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 661.973L388.259 0L774.72 661.973L687.981 807C687.981 807 459.861 618.549 170.909 807L296.381 587.822C305.889 571.077 320.847 558.052 338.792 550.891C373.635 537.183 436.243 527.657 519.758 576.611L387.36 344.329L119.877 807H84.9872L0 661.973Z" fill={color}/>
    </svg>
</div>

<style>
    .logo{
        height: 100%;
        width: 100%;
    }
    .logo svg{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;

    }
</style>