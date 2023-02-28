<script lang="ts">
    
    export let name: string;
    export let value: number;

    let levels = new Array(5).fill(1, 0, value)

</script>

<div id="soft-skill">
    <p>{name}</p>
    <div class="value">
        {#each levels as level, index}
            <div class="level {level === 1?"active":""} {index === 0? "round-left":index === levels.length - 1?"round-right":""}"></div>
        {/each}
    </div>
</div>

<style>
    #soft-skill{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 1rem;
    }
    #soft-skill p{
        margin-right: 1rem;
    }
    .value{
        height: 1rem;
        display: flex;
    }
    .level{
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--bg-dark);
        background-color: var(--bg-light);
    }
    .level.active{
        background-color: var(--main-color);
    }
   @media screen and (orientation:portrait) { 
        
    }
</style>
