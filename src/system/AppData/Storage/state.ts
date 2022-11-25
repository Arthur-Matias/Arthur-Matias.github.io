import { eIcons } from '../../Global/consts/enums'
import type { AppProps } from '../../Global/consts/types'
import WelcomeApp from '../Apps/WelcomeApp.svelte'
import Browser from '../Apps/Browser.svelte'
import Mail from '../Apps/Mail.svelte'
import { isHomeActive, mail } from './stores'
import NotePad from '../Apps/NotePad.svelte'


function AppState() {

    const apps: AppProps[] = [
        {
            icon: eIcons.logo,
            shortcutIcon: eIcons.info,
            appContent: WelcomeApp,
            id: 0,
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
            texts: {
                en: {
                    name: "Welcome",
                    title: "About the project",
                    description: "After working some time with development, I decided to challenge myself and create this portfolio site based on operating systems like Deepin, KDE and Windows for desktop version and XXXXXXXXXX XXXXXXX XXXX for mobile. Here you can check out more details about the design and development: ",
                    link: {
                        text: "github link",
                        url: ""
                    },
                    dev: {
                        title: "Developed by: ",
                        by: [
                            {
                                name: "Arthur Matias",
                                description: "Development and design",
                                url: "",
                                icon: eIcons.user
                            },
                            {
                                name: "Eliza Wollinger",
                                description: "Design",
                                url: "",
                                icon: eIcons.user
                            }
                        ]
                    }
                },
                pt: {
                    name: "Bem Vindo",
                    title: "Sobre o projeto",
                    description: "Depois de trabalhar algum tempo desenvolvendo aplicativos, decidi me desafiar e criar este site portfólio baseado em sistemas operacionais como Deepin, KDE e Windows para a versão desktop e XXXXXXXXXX XXXXXXX XXXX para o mobile. Aqui você pode conferir mais detalhes sobre o design e desenvolvimento: ",
                    link: {
                        text: "link do repositório",
                        url: ""
                    },
                    dev: {
                        title: "Desenvolvido por: ",
                        by: [
                            {
                                name: "Arthur Matias",
                                description: "Desenvolvimento e design",
                                url: "",
                                icon: eIcons.user
                            },
                            {
                                name: "Eliza Wollinger",
                                description: "Design",
                                url: "",
                                icon: eIcons.user
                            }
                        ]
                    }
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
            },
            links: {
                "pt": [
                    {
                        exec: () => { isHomeActive.set(true) },
                        name: "home"
                    },
                    {
                        exec: () => { isHomeActive.set(false) },
                        name: "sobre"
                    },
                ],
                "en": [
                    {
                        exec: () => { isHomeActive.set(true) },
                        name: "home"
                    },
                    {
                        exec: () => { isHomeActive.set(false) },
                        name: "about"
                    },
                ]
            },
            texts: {
                en: {
                    name: "Browser",
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
                    },
                    
                },
                pt: {
                    name: "Navegador",
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
                    },
                   
                },
            },
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
                    icon: eIcons.plus,
                    run: () => { mail.set({
                        createMail: true,
                        listReceivedMail: false,
                        listSentMail: false,
                    }) }
                },
                {
                    icon: eIcons.mailList,
                    run: () => { mail.set({
                        createMail: false,
                        listReceivedMail: true,
                        listSentMail: false,
                    }) }
                },
                {
                    icon: eIcons.sentMail,
                    run: () => { mail.set({
                        createMail: false,
                        listReceivedMail: false,
                        listSentMail: true,
                    }) }
                },
            ],
            texts: {
                en: {
                    name: "Mail",
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
                pt: {
                    name: "Email",
                    from: {
                        placeholder: "seu email",
                        title: "de"
                    },
                    subject: {
                        placeholder: "motivo do contato",
                        title: "assunto"
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
                }
            }
        },
        {
            icon: eIcons.note,
            shortcutIcon: eIcons.noteColored,
            appContent: NotePad,
            id: 3,
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
                    icon: eIcons.plus,
                    run: () => { mail.set({
                        createMail: true,
                        listReceivedMail: false,
                        listSentMail: false,
                    }) }
                },
                {
                    icon: eIcons.mailList,
                    run: () => { mail.set({
                        createMail: false,
                        listReceivedMail: true,
                        listSentMail: false,
                    }) }
                },
                {
                    icon: eIcons.sentMail,
                    run: () => { mail.set({
                        createMail: false,
                        listReceivedMail: false,
                        listSentMail: true,
                    }) }
                },
            ],
            texts: {
                en: {
                    name: "Notes",
                },
                pt: {
                    name: "Notas",
                    
                }
            }
        }
    ]

    return {
        apps
    }
}

export default AppState()