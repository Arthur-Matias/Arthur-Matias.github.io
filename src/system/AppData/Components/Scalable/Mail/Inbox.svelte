<script lang="ts">
    import { activeLang } from "../../../../Global/consts/stores";
    import type { AppProps, iMail } from "../../../../Global/consts/types";
    import { mailStorage } from "../../../Storage/stores";
    import MailList from "./MailList.svelte";
    const fillColor = "var(--bg-light)"
    
    export let mailList: iMail[]
</script>

<div class="mail-wrapper">
    <MailList title={"Inbox"} mailList={mailList} />
</div>

<style>
    .mail-wrapper{
        position: static;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        padding-top: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }

    @media screen and (orientation:portrait) {

    }
</style>
