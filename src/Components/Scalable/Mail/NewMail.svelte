<script lang="ts">
    import state from "../../../Storage/AppState";
    
    import { activeLang }  from '../../../Storage/GlobalStores';
    import { mailStorage } from "../../../Storage/AppStores";
    import IconSelector from "../IconSelector.svelte";
    import type { AppProps, iMail } from "../../../Storage/GlobalTypes";
    import axios from "axios"
    
    const fillColor = "var(--bg-light)"
    
    export let props: AppProps;
    export let readOnly: boolean;
    export let content: iMail = readOnly?$mailStorage.current: {
        mail: "",
        title: "",
        content: "",
        time: "",
    };
    let sendBtn: HTMLButtonElement;
    const handleSubmit: svelte.JSX.EventHandler<Event, HTMLFormElement> = async (e) => {
        
        sendBtn.disabled = true
        sendBtn.style.filter = "opacity(.6)"

        content.time = new Date().toISOString()

        let data = content;
        console.log(data)
        
        await axios({
            url: 'https://formspree.io/f/mpzbzolz',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: data
        }).then((response) => { 
            console.log(response);
            $mailStorage.sentList[$activeLang].push(content)
            console.log($mailStorage.sentList[$activeLang])
            if (!!sendBtn) {
                sendBtn.disabled = false
                sendBtn.style.filter = "opacity(1)"
            }
            alert("Email sent");
        }).catch(e=>{
            console.log(e)
            alert("An error has occurred, please, try again later")
        })
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="mail-wrapper {readOnly?"read-only":""}">
    <div class="mail-inputs">
        <div class="input-wrapper">
            <p>{props.texts[$activeLang].from.title}:</p>
            <input required disabled={readOnly} bind:value={content.mail} type="email" placeholder={readOnly?"":props.texts[$activeLang].from.placeholder}>
        </div>
        <div class="input-wrapper">
            <p>{props.texts[$activeLang].subject.title}:</p>
            <input required disabled={readOnly} bind:value={content.title} type="text" placeholder={readOnly?"":props.texts[$activeLang].subject.placeholder}>
        </div>
    </div>

    <div class="mail-content">
        <textarea required disabled={readOnly} bind:value={content.content} name="message" id="message" placeholder="{props.texts[$activeLang].message.placeholder}"></textarea>
    </div>

    {#if !readOnly}
        <section class="tray">
            <div class="attatchments">

            </div>
            <button bind:this={sendBtn} type="submit" class="mail-btn glass">
                <p>
                    {props.texts[$activeLang].tray.btn.title}
                </p>
                <div class="send-icon">
                    <IconSelector iconName={props.texts[$activeLang].tray.btn.icon} />
                </div>
            </button>
        </section>
    {/if}
</form>

<style>
    .mail-wrapper{
        position: static;
        height: 80%;
        width: 80%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        padding-top: 3rem;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .read-only{
        position: relative;
        margin-top: -10rem;
        /* overflow-y: auto; */
        /* padding: 2rem 2rem; */
    }
    .mail-inputs{
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
        /* height: 100%; */
        width: 100%;
    }
    .input-wrapper{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        margin: .5rem 0;
        width: 100%;
        border-bottom: .1rem solid black;
        height: 3rem;
    }
    .input-wrapper > p{
        margin-right: 1rem;
        width: 10vw;
        text-align: left;
    }
    .input-wrapper > input{
        padding: .5rem 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        width: 100%;
        
        outline: none;
        border: none;

        background-color: var(--bg-dark);
        color: var(--accent);
    }
    .input-wrapper > input::-webkit-input-placeholder{
        text-transform: capitalize;
    }
    .input-wrapper > input::-moz-placeholder{
        text-transform: capitalize;
    }
    .input-wrapper > input:-ms-input-placeholder{
        text-transform: capitalize;
    }
    .input-wrapper > input::-ms-input-placeholder{
        text-transform: capitalize;
    }
    .input-wrapper > input::placeholder{
        text-transform: capitalize;
    }
    .mail-content{
        height: 66%;
        width: 100%;
        position: relative;
    }
    .mail-content > textarea{
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 100% !important;
        margin-top: 1rem;
        margin-bottom: 6rem;
        overflow-x: hidden;
        overflow-y: auto;
        word-wrap: break-word;
        outline: none;
        border: none;
        font-size: 1.1rem;
        background-color: var(--bg-dark);
        color: var(--accent);
    }
    .mail-content > textarea::-webkit-input-placeholder{
        text-transform: capitalize;
    }
    .mail-content > textarea::-moz-placeholder{
        text-transform: capitalize;
    }
    .mail-content > textarea:-ms-input-placeholder{
        text-transform: capitalize;
    }
    .mail-content > textarea::-ms-input-placeholder{
        text-transform: capitalize;
    }
    .mail-content > textarea::placeholder{
        text-transform: capitalize;
    }
    .tray{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 6rem;
        width: 100%;
        -webkit-backdrop-filter: blur(1rem);
                backdrop-filter: blur(1rem);
        background-color: var(--bg-dark-transparent);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
    }
    .mail-btn{
        height: 3rem;
        width: 6rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        background-color: var(--main-color);
        border-radius: 1rem;
        margin-right: 2rem;
        -webkit-transition: ease-in-out .2s;
        -o-transition: ease-in-out .2s;
        transition: ease-in-out .2s;
    }
    .send-icon{
        height: 1.5rem;
        width: 1.5rem;
        margin-left: 0.2rem;
    }

    .mail-btn:hover{
        cursor: pointer;
        -webkit-box-shadow: 0px 0px .5rem rgba(0,0,0, var(--transparency));
                box-shadow: 0px 0px .5rem rgba(0,0,0, var(--transparency));
    }
    .mail-btn:active{
        -webkit-box-shadow: inset 0px 0px .5rem rgba(0,0,0, var(--transparency));
                box-shadow: inset 0px 0px .5rem rgba(0,0,0, var(--transparency));
    }
    @media screen and (orientation:portrait) {
        #message{
            height: 30vh;
        }
    }
</style>
