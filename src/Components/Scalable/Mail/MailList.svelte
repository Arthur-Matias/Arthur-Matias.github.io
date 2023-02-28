<script lang="ts">
    import {mailStorage } from "../../../Storage/AppStores";
    import type { iMail } from "../../../Storage/GlobalTypes";
    import MailItem from "./MailItem.svelte";
    const fillColor = "var(--bg-light)"

    export let mailList: iMail[];
    export let title

    function handleKeyPress(e: KeyboardEvent){
        if(e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32 ){
            console.log(true)
        }
    }

    function openMail(mail: iMail) { 
        $mailStorage.current = mail
        console.log("activate mail: ")
        console.log($mailStorage.current)
        $mailStorage.reading = true
    }
</script>

<ul class="mail-list">
    <div class="title">
        <h2>{title}</h2>
    </div>
    {#each mailList as mail}
        <li on:click={()=>openMail(mail)}  on:touchend={()=>openMail(mail)} on:keypress={handleKeyPress}>
            <div class="wrapper">
                <MailItem mail={mail} />
            </div>
        </li>
    {/each}
</ul>

<style>
    .mail-list{
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        /* padding-top: 3rem; */
    }
    .title{
        padding: 1rem 0;
        border-bottom: 3px solid black;
    }
    .title > h2{
        font-size: 2rem;
        text-transform: capitalize;
    }
    .mail-list > li{
        height: 6rem;
        width: 100%;
        list-style-type: none;
        border-bottom: 3px solid black;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }

    .mail-list > li:hover{
        -webkit-box-shadow:  0px 0px 1rem rgba(0,0,0,0.5);
                box-shadow:  0px 0px 1rem rgba(0,0,0,0.5);
    }
    .mail-list > li:active{
        -webkit-box-shadow: inset 0px 0px 1rem rgba(0,0,0,0.5);
                box-shadow: inset 0px 0px 1rem rgba(0,0,0,0.5);
    }
    .wrapper{
        width: 95%;
    }
    @media screen and (orientation:portrait) {
        .mail-list > li{
            height: 4rem;
        }
    }
</style>
