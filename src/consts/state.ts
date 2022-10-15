import ColorController from "../system/root/Controllers/ColorController";
import type { AppProps, ThemeColors } from "./types";
import WelcomeApp from "../system/apps/WelcomeApp.svelte";
import MainColor from '../system/root/SettingsOptions/MainColor.svelte'
import Theme from '../system/root/SettingsOptions/Theme.svelte'
import Transparency from '../system/root/SettingsOptions/Transparency.svelte'
import BackgroundSelector from '../system/root/SettingsOptions/BackgroundSelector.svelte'

import image1 from '../assets/wallpapers/1.png'
import image2 from '../assets/wallpapers/2.png'
import image3 from '../assets/wallpapers/3.png'
import image4 from '../assets/wallpapers/4.png'
import image5 from '../assets/wallpapers/5.png'
import image6 from '../assets/wallpapers/6.png'
import image7 from '../assets/wallpapers/7.png'
import image8 from '../assets/wallpapers/8.png'
import image9 from '../assets/wallpapers/9.png'
import image10 from '../assets/wallpapers/10.png'
import image11 from '../assets/wallpapers/11.png'
import image12 from '../assets/wallpapers/12.png'
import image13 from '../assets/wallpapers/13.png'
import image14 from '../assets/wallpapers/14.png'


function State(){

    const images = {
        background: [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
        ]
    }
    const pt = {
        apps: [
            {
                name: "bem vindo",
                description: "Lorem ipsum sit dolor amet ....",
            },
        ],
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
        ]
    }
    const en = {
        apps: [
            {
                name: "welcome",
                description: "Lorem ipsum sit dolor amet ...."
            },
        ],
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
            "booting up system ...",
            "loading environment variables ...",
            "creating user ...",
            "connecting databases ...",
            "loading GUI ...",
        ]
    }
    const allTexts = {
        "pt":pt,
        "en":en
    }
    const allApps: AppProps[] = [
        {
            icon: "/logo.svg",
            appContent: WelcomeApp,
            id: 0,
            minSize: {
                w: 400,
                h: 300
            }
        }
    ]
    const settingsOptions = [
        MainColor,
        Theme,
        Transparency,
        BackgroundSelector
    ]


    function getAllApps(){
        return allApps
    }
    function getSettingsOptions(){
        return settingsOptions
    }
    function getAllTexts(){
        return allTexts
    }
    function getTheme(): ThemeColors{
        return ColorController.ActiveTheme
    }
    function getAllimages(){
        return images
    }
    return {
        allApps: getAllApps(),
        allTexts: getAllTexts(),
        theme: getTheme(),
        mainColor: ColorController.ActiveColor,
        mainColorsArr: ColorController.AllMainColors,
        settingsOptions: getSettingsOptions(),
        images: getAllimages()
    }
}

export default State()