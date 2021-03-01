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
		background-size: contain - 50px;
        background-position: center;
    }
</style>