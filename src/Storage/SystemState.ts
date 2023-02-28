import type { SystemTexts } from "./SystemTypes";
import MainColor from "../Components/Scalable/SettingsOptions/MainColor.svelte";
import Theme from "../Components/Scalable/SettingsOptions/Theme.svelte";
import Transparency from "../Components/Scalable/SettingsOptions/Transparency.svelte";
import BackgroundSelector from "../Components/Scalable/SettingsOptions/BackgroundSelector.svelte";

function SystemState() {

    const images = [
        '/wallpapers/1.png',
        '/wallpapers/2.png',
        '/wallpapers/3.png',
        '/wallpapers/4.png',
        '/wallpapers/5.png',
        '/wallpapers/6.png',
        '/wallpapers/7.png',
        '/wallpapers/8.png',
        '/wallpapers/9.png',
        '/wallpapers/10.png',
        '/wallpapers/11.png',
        '/wallpapers/12.png',
        '/wallpapers/13.png',
        '/wallpapers/14.png'
    ]
    const pt: SystemTexts = {
        config: {
            title: "configurações",
            options: [
                {
                    title: "Cor de destaque"
                },
                {
                    title: "Tema",
                    options: ["escuro", "claro"]
                },
                {
                    title: "Transparência"
                },
                {
                    title: "Papel de parede"
                }
            ]
        },
        boot: [
            "inicializando o sistema ...",
            "carregando variaveis de ambiente ...",
            "criando usuário ...",
            "conectando banco de dados ...",
            "carregando interface gráfica ...",
        ],
        login: {
            mobileMessage: "Pressione ou deslize para cima",
            desktopMessage: "Pressione qualquer tecla ou deslize para cima"
        }
    }
    const en: SystemTexts = {
        config: {
            title: "settings",
            options: [
                {
                    title: "accent color"
                },
                {
                    title: "theme",
                    options: ["dark", "light"]
                },
                {
                    title: "transparency"
                },
                {
                    title: "wallpaper"
                }
            ]
        },
        boot: [
            "booting up system",
            "loading environment variables",
            "creating user",
            "connecting databases",
            "loading GUI"
        ],
        login: {
            mobileMessage: "Press or swipe up to unlock",
            desktopMessage: "Press any key or swipe up to unlock"
        }
    }
    const texts = {
        pt, 
        en
    }
    const settingsOptions = [
        MainColor,
        Theme,
        Transparency,
        BackgroundSelector
    ]

    return {
        texts,
        images,
        settingsOptions
    }
}

export default SystemState()