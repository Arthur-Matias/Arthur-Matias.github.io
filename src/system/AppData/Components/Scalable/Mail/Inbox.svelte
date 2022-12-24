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
        align-items: center;
        justify-content: space-between;
        padding-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (orientation:portrait) {
        #message{
            height: 30vh;
        }
    }
</style>
