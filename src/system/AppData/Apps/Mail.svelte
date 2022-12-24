<script lang="ts">
    import state from "../Storage/state";
    import { eIcons } from "../../Global/consts/enums";
    import type { AppProps, iMail, iNote } from "../../Global/consts/types";
    import IconSelector from "../../Global/Components/Scalable/IconSelector.svelte";
    import { activeLang } from "../../Global/consts/stores";
    import { mailStorage } from "../Storage/stores";
    import NewMail from "../Components/Scalable/Mail/NewMail.svelte";
    import Sent from "../Components/Scalable/Mail/Sent.svelte";
    import Inbox from "../Components/Scalable/Mail/Inbox.svelte";

    export let props: AppProps;

    let activeMail: iMail = $mailStorage.current;
    $: inboxMailList = $mailStorage.inboxList[$activeLang]
    $: sentMailList = $mailStorage.sentList[$activeLang]

</script>

<div id="mail">
    {#if $mailStorage.create}
        <NewMail props={props} readOnly={false} />
    {:else if $mailStorage.listReceived}
        <Inbox mailList={inboxMailList} />
    {:else if $mailStorage.listSent}
        <Sent mailList={sentMailList} />
    {/if}
    {#if $mailStorage.reading}
        <div class="reading-mail">
            <NewMail props={props} readOnly={true} content={activeMail} />
        </div>
    {/if}
    
</div>

<style>
    #mail{
        position: static;
        height: 80%;
        width: 80%;        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding-top: calc(var(--toolbar-height) / 1.5); */
        padding: 0 10%;
    }
    .reading-mail{
        height: calc(100% - 3rem);
        width: 100%;
        position: absolute;
        left: 0;
        top: 2rem;
        background-color: var(--bg-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
</style>
