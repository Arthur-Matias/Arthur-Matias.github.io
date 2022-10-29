import ColorController from "../system/root/Controllers/ColorController";
import type { AppProps, iState, Texts, ThemeColors } from "./types";
import { homeActive } from "./stores";
import MainColor from '../system/root/SettingsOptions/MainColor.svelte'

import WelcomeApp from "../system/apps/WelcomeApp.svelte";
import Browser from "../system/apps/Browser.svelte";
import Mail from "../system/apps/Mail.svelte";

import Theme from '../system/root/SettingsOptions/Theme.svelte'
import Transparency from '../system/root/SettingsOptions/Transparency.svelte'
import BackgroundSelector from '../system/root/SettingsOptions/BackgroundSelector.svelte'
import { eIcons } from "./enums";

// Importing BGS
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
// done importing bgs

function State(): iState {

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
    const pt: Texts = {
        apps: [
            {
                name: "bem vindo",
                description: "Lorem ipsum sit dolor amet ....",
            },
            {
                name: "navegador",
                description: "Lorem ipsum sit dolor amet ....",
            },
            {
                name: "email",
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
        ],
        about: {
            links: [
                {
                    url: "#home",
                    name: "início"
                },
                {
                    url: "#about",
                    name: "Sobre"
                },
            ],
            title: "sobre",
            homeTitle: [
                "Olá, meu nome é",
                "Arthur Matias",
                "Um desenvolvedor criativo de softwares e designer"
            ],
            texts: [
                "I'm a software developer, who loves creating visual simulations using a lot of science and creativity!",
                "Feel free to contact if you want to know more about me, my past projects or even to discuss a future one."
            ],
            social: {
                title: "me encontre",
                social: [
                    {
                        id: "behance",
                        link: ""
                    },
                    {
                        id: "github",
                        link: ""
                    },
                    {
                        id: "linkedin",
                        link: ""
                    },
                ]
            }
        },
        mail: {
            from: {
                placeholder: "seu email",
                title: "de"
            },
            subject: {
                placeholder: "motivo do contato",
                title: "titulo do email"
            },
            message: {
                placeholder: "digite sua mensagem aqui"
            },
            tray: {
                attatchments: {
                    title: "anexos"
                },
                btn: {
                    title: "enviar",
                    icon: eIcons.arrowRight
                }
            }
        },
        login: {
            phrase: "Pressione qualquer tecla"
        }
    }
    const en: Texts = {
        apps: [
            {
                name: "welcome",
                description: "Lorem ipsum sit dolor amet ...."
            },
            {
                name: "browser",
                description: "Lorem ipsum sit dolor amet ....",
            },
            {
                name: "mail",
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
        ],
        about: {
            links: [
                {
                    exec: () => { homeActive.set(true) },
                    name: "home"
                },
                {
                    exec: () => { homeActive.set(false) },
                    name: "about"
                },
            ],
            title: "about",
            homeTitle: [
                "Hi, my name is",
                "Arthur Matias",
                "Creative software developer and designer"
            ],
            texts: [
                "I'm a software developer, who loves creating visual simulations using a lot of science and creativity!",
                "Feel free to contact if you want to know more about me, my past projects or even to discuss a future one."
            ],
            social: {
                title: "find me",
                social: [
                    {
                        id: "behance",
                        link: ""
                    },
                    {
                        id: "github",
                        link: ""
                    },
                    {
                        id: "linkedin",
                        link: ""
                    },
                ]
            }
        },
        mail: {
            from: {
                placeholder: "your email",
                title: "from"
            },
            subject: {
                placeholder: "purpose of contact",
                title: "subject"
            },
            message: {
                placeholder: "write your message here"
            },
            tray: {
                attatchments: {
                    title: "attatchments"
                },
                btn: {
                    title: "send",
                    icon: eIcons.arrowRight
                }
            }
        },
        login: {
            phrase: "Press any key"
        }
    }
    const allTexts = {
        "pt": pt,
        "en": en,
    }
    const allApps: AppProps[] = [
        {
            icon: eIcons.logo,
            shortcutIcon: eIcons.info,
            appContent: WelcomeApp,
            id: 0,
            geometry: {
                minSize: {
                    x: 400,
                    y: 300
                },
                currSize: {
                    x: 400,
                    y: 300
                },
                position: {
                    x: window.innerWidth / 2 - 400 / 2,
                    y: window.innerHeight / 2 - 300 / 2
                }
            }
        },
        {
            icon: eIcons.browser,
            shortcutIcon: eIcons.browserColored,
            appContent: Browser,
            id: 1,
            geometry: {
                minSize: {
                    x: 600,
                    y: 360
                },
                currSize: {
                    x: 600,
                    y: 360
                },
                position: {
                    x: window.innerWidth / 2 - 600 / 2,
                    y: window.innerHeight / 2 - 360 / 2
                }
            }
        },
        {
            icon: eIcons.mail,
            shortcutIcon: eIcons.mailColored,
            appContent: Mail,
            id: 2,
            geometry: {
                minSize: {
                    x: 600,
                    y: 400
                },
                currSize: {
                    x: 600,
                    y: 400
                },
                position: {
                    x: window.innerWidth / 2 - 600 / 2,
                    y: window.innerHeight / 2 - 400 / 2
                }
            },
            options: [
                {
                    icon: eIcons.list,
                    run: () => { console.log("start something") }
                },
                {
                    icon: eIcons.plus,
                    run: () => { console.log("start something") }
                },
            ]
        },
    ]
    const settingsOptions = [
        MainColor,
        Theme,
        Transparency,
        BackgroundSelector
    ]
    function getAllApps() {
        return allApps
    }
    function getSettingsOptions() {
        return settingsOptions
    }
    function getAllTexts() {
        return allTexts
    }
    function getTheme(): ThemeColors {
        return ColorController.ActiveTheme
    }
    function getAllimages() {
        return images
    }
    return {
        allApps: getAllApps(),
        allTexts: getAllTexts(),
        settingsOptions: getSettingsOptions(),
        images: getAllimages()
    }
}

export default State()