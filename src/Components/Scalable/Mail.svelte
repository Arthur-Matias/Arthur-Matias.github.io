<script lang="ts">
    import type { AppProps, iMail } from "../../Storage/GlobalTypes";
    import { activeLang } from "../../Storage/GlobalStores";
    import { mailStorage } from "../../Storage/AppStores";
    import NewMail from "./Mail/NewMail.svelte";
    import Sent from "./Mail/Sent.svelte"
    import Inbox from "./Mail/Inbox.svelte"

    export let props: AppProps;

    let activeMail: iMail = $mailStorage.current;
    $: inboxMailList = $mailStorage.inboxList[$activeLang];
    $: sentMailList = $mailStorage.sentList[$activeLang];
</script>

<div id="mail">
    {#if $mailStorage.create}
        <NewMail {props} readOnly={false} />
    {:else if $mailStorage.listReceived}
        <Inbox mailList={inboxMailList} />
    {:else if $mailStorage.listSent}
        <Sent mailList={sentMailList} />
    {/if}
    {#if $mailStorage.reading}
        <div class="reading-mail">
            <NewMail {props} readOnly={true} content={activeMail} />
        </div>
    {/if}
</div>

<style>
    #mail {
        position: static;
        height: 80%;
        width: 80%;
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
        /* padding-top: calc(var(--toolbar-height) / 1.5); */
        padding: 0 10%;
    }
    .reading-mail {
        height: calc(100% - 3rem);
        width: 100%;
        position: absolute;
        left: 0;
        top: 2rem;
        background-color: var(--bg-dark);
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
</style>
