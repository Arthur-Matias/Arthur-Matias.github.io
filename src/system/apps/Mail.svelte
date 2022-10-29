<script lang="ts">
    import state from "../../consts/state";
    import { eIcons } from "../../consts/enums";
    import type { AppProps, iNote } from "../../consts/types";
    import IconSelector from "../components/IconSelector.svelte";
    import { activeLang } from "../../consts/stores";
    
    export let props: AppProps;

</script>

<div id="mail">

    <div class="mail-wrapper">
        <div class="mail-inputs">
            <div class="input-wrapper">
                <p>{state.allTexts[$activeLang].mail.from.title}:</p>
                <input type="email" placeholder="{state.allTexts[$activeLang].mail.from.placeholder}">
            </div>
            <div class="input-wrapper">
                <p>{state.allTexts[$activeLang].mail.subject.title}:</p>
                <input type="text" placeholder="{state.allTexts[$activeLang].mail.subject.placeholder}">
            </div>
        </div>
    
        <div class="mail-content">
            <textarea name="message" id="message" placeholder="{state.allTexts[$activeLang].mail.message.placeholder}"></textarea>
        </div>
    
        <section class="tray">
            <div class="attatchments">
    
            </div>
            <div class="mail-btn glass">
                <p>
                    {state.allTexts[$activeLang].mail.tray.btn.title}
                </p>
                <div class="send-icon">
                    <IconSelector iconName={state.allTexts[$activeLang].mail.tray.btn.icon} />
                </div>
            </div>
        </section>
    </div>
    
</div>

<style>
    #mail{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        padding-top: calc(var(--toolbar-height) / 1.5);
        padding-left: 10%;
        padding-right: 10%;
    }
    .mail-wrapper{
        height: 100%;
        width: 100%;
    }
    .mail-inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* height: 100%; */
        width: 100%;
    }
    .input-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .5rem 0;
        width: 100%;
        border-bottom: .1rem solid black;
    }
    .input-wrapper > p{
        margin-right: 1rem;
        width: 10%;
    }
    .input-wrapper > input{
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        
        outline: none;
        border: none;

        background-color: var(--bg-dark);
        color: var(--accent);
    }
    .input-wrapper > input::placeholder{
        text-transform: capitalize;
    }
    .mail-content{
        height: 100%;
        width: 100%;
    }
    .mail-content > textarea{
        width: 100%;
        height: 100%;
        
        margin-top: 1rem;
        margin-bottom: 6rem;

        outline: none;
        border: none;
        font-size: 1.1rem;
        background-color: var(--bg-dark);
        color: var(--accent);
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
        backdrop-filter: blur(1rem);
        background-color: var(--bg-dark-transparent);
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .mail-btn{
        height: 3rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-color);
        border-radius: 1rem;
        margin-right: 2rem;
        transition: ease-in-out .2s;
    }
    .send-icon{
        height: 1.5rem;
        margin-left: 0.2rem;
    }

    .mail-btn:hover{
        cursor: pointer;
        box-shadow: 0px 0px .5rem rgba(0,0,0, var(--transparency));
    }
    .mail-btn:active{
        box-shadow: inset 0px 0px .5rem rgba(0,0,0, var(--transparency));
    }
</style>
