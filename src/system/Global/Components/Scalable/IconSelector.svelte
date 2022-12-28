<script lang="ts">
    import { eIcons } from "../../consts/enums";
    import ArrowRight from "./Icons/ArrowRight.svelte";
    import Logo from "./Icons/Logo.svelte";
    import Menu from "./Icons/Menu.svelte";
    import SentMail from "./Icons/SentMail.svelte";
    import Close from "./Icons/Close.svelte";
    import Delete from "./Icons/Delete.svelte";
    import Keypad from "./Icons/Keypad.svelte";
    import Call from "./Icons/Call.svelte";
    import Wifi from "./Icons/Wifi.svelte";
    import MobileNetwork from "./Icons/MobileNetwork.svelte";
    import Battery from "./Icons/Battery.svelte";
    import User from "./Icons/User.svelte";
    import ListMail from "./Icons/ListMails.svelte";
    import Plus from "./Icons/Plus.svelte";
    import BrowserIcon from "./Icons/BrowserIcon.svelte";

    export let iconName: eIcons = eIcons.logo;
    export let iconColor = "var(--accent)";
</script>

<div id="icon-selector">
    {#if iconName === eIcons.logo}
        <Logo fill={iconColor} />
    {:else if iconName === eIcons.browserColored}
        <img src="/icons/internet-web-browser.png" alt="browser" />
    {:else if iconName === eIcons.calc}
        <img src="/icons/accessories-calculator.png" alt="info" />
    {:else if iconName === eIcons.phone}
        <img src="/icons/phone.png" alt="info" />
    {:else if iconName === eIcons.browser}
        <BrowserIcon iconColor={iconColor} />
    {:else if iconName === eIcons.info}
        <img src="/icons/user-info.png" alt="info" />
    {:else if iconName === eIcons.mailColored}
        <img src="/icons/internet-mail.png" alt="mail" />
    {:else if iconName === eIcons.config}
        <img src="/icons/preferences-system.png" alt="config" />
    {:else if iconName === eIcons.user}
        <User iconColor={iconColor} />
    {:else if iconName === eIcons.mailList}
        <ListMail iconColor={iconColor} />
    {:else if iconName === eIcons.plus}
        <Plus iconColor={iconColor} />
    {:else if iconName === eIcons.sentMail}
        <SentMail {iconColor} />
    {:else if iconName === eIcons.menu}
        <Menu {iconColor} />
    {:else if iconName === eIcons.arrowRight}
        <ArrowRight {iconColor} />
    {:else if iconName === eIcons.close}
        <Close {iconColor} />
    {:else if iconName === eIcons.delete}
        <Delete {iconColor} />
    {:else if iconName === eIcons.keypad}
        <Keypad {iconColor} />
    {:else if iconName === eIcons.call}
        <Call {iconColor} />
    {:else if iconName === eIcons.wifi}
        <Wifi {iconColor} />
    {:else if iconName === eIcons.mobileNetwork}
        <MobileNetwork {iconColor} />
    {:else if iconName === eIcons.battery}
        <Battery {iconColor} />
    {:else}
        <Logo fill={iconColor} />
    {/if}
</div>

<style>
    #icon-selector {
        height: 100%;
        width: 100%;
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
    #icon-selector > img {
        height: 90%;
    }
    #icon-selector > svg {
        height: 100%;
    }
</style>
