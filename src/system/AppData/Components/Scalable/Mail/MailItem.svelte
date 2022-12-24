<script lang="ts">
    import IconSelector from "../../../../Global/Components/Scalable/IconSelector.svelte";
    import { eIcons } from "../../../../Global/consts/enums";
    import { activeLang, isMobile } from "../../../../Global/consts/stores";
    import type { iMail } from "../../../../Global/consts/types";

    export let mail: iMail;
    let w: number;
    let description = mail.content.split("")
    description.length = $isMobile?45:60;

    $: dateLang = $activeLang === "en"?"en-US":"pt-BR";

    let dateObj = new Date(mail.time)
    let date = dateObj.toLocaleDateString(dateLang);

    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
</script>

<div class="mail-item" bind:clientWidth={w}>
    <div class="icon">
        <div class="icon-wrapper">
            <IconSelector iconName={eIcons.user} />
        </div>
    </div>
    <div class="content">
        <h3 class="title">
            {mail.title}
        </h3>
        <p class="description">
            {description.join("")} ...
        </p>
    </div>
    <div class="time">
        <p class="hours">
            {(String(hours).length < 2? "0"+hours:hours)}:{(String(minutes).length < 2? "0"+minutes:minutes)}
        </p>
        <p class="date">
            {date}
        </p>
    </div>
</div>

<style>
    .mail-item{
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    .icon-wrapper{
        height: 70%;
        border-radius: 50%;
        background-color: var(--main-color);
        /* padding: 1rem; */
    }
    .content{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: start;
        padding-left: 1rem;
    }
    .title{
        margin: 1rem 0;
        font-size: 1.4rem;
    }
    .description{
        /* height: 2rem; */
        word-wrap: normal;
        word-break: break-all;
        
    }
    .time{
        height: 100%;
        width: 100%;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: end;
        text-align: end;
    }
    .hours{
        font-size: 1.2rem;
        font-weight: bolder;
    }
    @media screen and (orientation:portrait) { 
        .hours, .date{
            font-size: 0.8rem;
            line-height: 0.9rem;
        }
        .title{
            font-size: 1rem;
            margin: 0;
            
        }
        .description{
            height: min-content;
            font-size: 0.8rem;
            line-height: 0.7rem;
        }
        .icon-wrapper{
            height: 50%;
        }
        .content{
            justify-content: center;
        }
        .mail-item{
            
        }
    }
</style>
