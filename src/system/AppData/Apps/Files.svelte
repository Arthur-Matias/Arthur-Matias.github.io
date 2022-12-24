<script lang="ts">
    import type { AppProps, iNote } from "../../Global/consts/types";
    import Logo from "../../Global/Components/Scalable/Icons/Logo.svelte";

    // export let props: AppProps;

    let systemFile = {};
    const activeItems = [
        {
            "en":{
                title: "",
                content: {}
            },
            "pt":{
                title: "",
                content: {}
            }
        },
        {
            "en":{
                title: "",
                content: {}
            },
            "pt":{
                title: "",
                content: {}
            }
        },
        {
            "en":{
                title: "",
                content: {}
            },
            "pt":{
                title: "",
                content: {}
            }
        }
    ]
</script>

<div id="files">
    {#each activeItems as item}
        
    {/each}
</div>

<style>
    #files{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

</style>
