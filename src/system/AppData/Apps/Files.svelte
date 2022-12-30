<script lang="ts">

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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }

</style>
