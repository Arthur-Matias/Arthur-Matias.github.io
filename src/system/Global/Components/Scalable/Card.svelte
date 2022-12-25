<script lang="ts">
    export let title: string;
</script>

<div class="card-wrapper">
    {#if title}
        <p>{title}</p>
    {/if}
    <div class="round card">
        <slot />
</div>
</div>

<style>
    .card{
        z-index: 3;
        overflow: auto;
        background-color: var(--bg-dark-transparent);
        -webkit-box-shadow: 0px 0px 4px rgba(40, 40, 40, 0.3);
                box-shadow: 0px 0px 4px rgba(40, 40, 40, 0.3);
    }
    .card-wrapper{
        margin-bottom: 2rem;
    }
</style>
