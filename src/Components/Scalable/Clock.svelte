<script lang="ts">
    import { onMount } from "svelte";
    import { activeLang } from "../../Storage/GlobalStores";

    $: dateLang = $activeLang === "en"?"en-US":"pt-BR";
    $: dateObj = new Date()
    export let big: Boolean = false;

    $: date = dateObj.toLocaleDateString(dateLang);

	$: hours = dateObj.getHours();
	$: minutes = dateObj.getMinutes();

    onMount(() => {
		const interval = setInterval(() => {
			dateObj = new Date();
		}, 1000);
        return () => {
			clearInterval(interval);
		};
    })
</script>

<div id="clock" class="{big?"big":""}">
    <p class="time">{(String(hours).length < 2? "0"+hours:hours) + ":" + (String(minutes).length < 2? "0"+minutes:minutes)}</p>
    <p class="date">{date.split("/").map(e=>{return e.length < 2? "0" + e: e}).join("/")}</p>
</div>

<style>
    #clock{
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        cursor: default;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        text-align: end;
    }
   .time{
    font-size: 1.5rem;
   }
   .date{
    font-size: 1rem;
   }

   #clock.big > .time{
    font-size: 8rem;
    margin-bottom: 4rem;
   }
   
   #clock.big > .date{
    font-size: 3.5rem;
    font-weight: 100;
   }
   @media screen and (orientation:portrait) { 
       #clock.big > .time{
           font-size: 3rem;
           margin-bottom: 1rem;
           font-weight: bold;
           margin-top: 1rem;
       }
   
       #clock.big > .date{
           font-size: 1.3rem;
           font-weight: 500;
       }
    }
</style>