<script lang="ts">

</script>

<div class="container">
    <slot></slot>
</div>

<style>
    .container{
        height: 100%;
        width: 100%;
        background-image: url('./logo.svg');
		background-repeat: no-repeat;
		background-size: 50rem;
        background-position: center;
    }
    @media screen and (max-height: 768px){
        .container{
            background-size: 30rem;
        }
    }
</style>