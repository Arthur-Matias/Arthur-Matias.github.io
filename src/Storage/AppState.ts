import { eIcons } from './GlobalEnums'
import type { AppProps } from './GlobalTypes'
import WelcomeApp from '../Components/Scalable/WelcomeApp.svelte'
import Browser from '../Components/Scalable/Browser.svelte'
import Mail from '../Components/Scalable/Mail.svelte'
import { PageStorage, mailStorage, notes } from './AppStores'
// import NotePad from '../Components/Scalable/NotePad.svelte'
import Calc from '../Components/Scalable/Calc.svelte'
import Phone from '../Components/Scalable/Phone.svelte'
import Config from '../Components/Scalable/Config.svelte'
import SpaceGame from '../Components/Scalable/SpaceGame.svelte'
import FlappyBird from '../Components/Scalable/FlappyBird.svelte'


function AppState() {

    const apps: AppProps[] = [
        // Welcome
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
                    description: "After working some time with development, I decided to challenge myself and create this portfolio site based on operating systems like Deepin, KDE and Windows for desktop version and Android, MIUI, Windows Phone and other linux systems for mobile devices for the mobile version. Here you can check out more details about the design and development: ",
                    link: {
                        text: "github link",
                        url: "https://github.com/Arthur-Matias/Arthur-Matias.github.io"
                    },
                    dev: {
                        title: "Developed by: ",
                        by: [
                            {
                                name: "Arthur Matias",
                                description: "Development and design",
                                url: "https://github.com/Arthur-Matias/",
                                icon: eIcons.user
                            },
                            {
                                name: "Eliza Wollinger",
                                description: "Design",
                                url: "https://github.com/wollieliza",
                                icon: eIcons.user
                            }
                        ]
                    }
                },
                pt: {
                    name: "Bem Vindo",
                    title: "Sobre o projeto",
                    description: "Depois de trabalhar algum tempo com desenvolvimento, decidi me desafiar e criar este site portfólio baseado em sistemas operacionais como Deepin, KDE e Windows para a versão desktop e Android, MIUI, Windows Phone e outros sistemas linux para dispositivos móveis para a versão mobile. Aqui você pode conferir mais detalhes sobre o design e desenvolvimento: ",
                    link: {
                        text: "link do repositório",
                        url: "https://github.com/Arthur-Matias/Arthur-Matias.github.io"
                    },
                    dev: {
                        title: "Desenvolvido por: ",
                        by: [
                            {
                                name: "Arthur Matias",
                                description: "Desenvolvimento e design",
                                url: "https://github.com/Arthur-Matias/",
                                icon: eIcons.user
                            },
                            {
                                name: "Eliza Wollinger",
                                description: "Design",
                                url: "https://github.com/wollieliza",
                                icon: eIcons.user
                            }
                        ]
                    }
                }
            }
        },
        // Browser
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
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: true,
                                isAboutActive: false,
                                isFindMeActive: false
                            })
                        },
                        name: "home"
                    },
                    {
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: false,
                                isAboutActive: true,
                                isFindMeActive: false
                            })
                        },
                        name: "sobre"
                    },
                    {
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: false,
                                isAboutActive: false,
                                isFindMeActive: true
                            })
                        },
                        name: "contato"
                    },
                ],
                "en": [
                    {
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: true,
                                isAboutActive: false,
                                isFindMeActive: false
                            })
                        },
                        name: "home"
                    },
                    {
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: false,
                                isAboutActive: true,
                                isFindMeActive: false
                            })
                        },
                        name: "about"
                    },
                    {
                        exec: () => {
                            PageStorage.set({
                                isHomeActive: false,
                                isAboutActive: false,
                                isFindMeActive: true
                            })
                        },
                        name: "contact"
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
                        description: "on social media",
                        social: [
                            {
                                id: "behance",
                                icon: eIcons.behance,
                                link: "https://www.behance.net/arthurmm18"
                            },
                            {
                                id: "github",
                                icon: eIcons.github,
                                link: "https://github.com/Arthur-Matias"
                            },
                            {
                                id: "linkedin",
                                icon: eIcons.linkedin,
                                link: "https://www.linkedin.com/in/arthur-matias/"
                            },
                        ]
                    },
                    skills: {
                        soft: {
                            title: "soft skills",
                            skills: [
                                {
                                    name: "Communication",
                                    value: 5
                                },
                                {
                                    name: "leadership",
                                    value: 4
                                },
                                {
                                    name: "Problem solving",
                                    value: 4
                                },
                                {
                                    name: "Critical thinking",
                                    value: 5
                                },
                                {
                                    name: "Decision-making",
                                    value: 4
                                },
                                {
                                    name: "Teamwork",
                                    value: 3
                                },
                                {
                                    name: "Creativity",
                                    value: 4
                                },
                            ],

                        },
                        hard: {
                            title: "skills",
                            skills: [
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                                    text: "JavaScript"
                                },
                                {
                                    link: "https://www.typescriptlang.org/",
                                    text: "TypeScript"
                                },
                                {
                                    link: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
                                    text: "C#"
                                },
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                                    text: "HTML"
                                },
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                                    text: "CSS"
                                },
                                {
                                    link: "https://www.python.org/",
                                    text: "Python"
                                },
                                {
                                    link: "https://unity.com/pt",
                                    text: "Unity"
                                },
                                {
                                    link: "https://pt-br.reactjs.org/",
                                    text: "React.JS"
                                },
                                {
                                    link: "https://nextjs.org/",
                                    text: "Next.js"
                                },
                                {
                                    link: "https://svelte.dev/",
                                    text: "Svelte"
                                },
                                {
                                    link: "https://vitejs.dev/",
                                    text: "Vite"
                                },
                                {
                                    link: "https://getbootstrap.com/",
                                    text: "Bootstrap"
                                },
                                {
                                    link: "https://angular.io/",
                                    text: "Angular"
                                },
                                {
                                    link: "https://flask.palletsprojects.com/en/2.2.x/",
                                    text: "Flask"
                                },
                                {
                                    link: "https://www.adobe.com/br/creativecloud.html",
                                    text: "Abobe CC"
                                },
                                {
                                    link: "https://www.figma.com/",
                                    text: "Figma"
                                },

                            ]

                        }
                    }
                },
                pt: {
                    name: "Navegador",
                    title: "sobre",
                    homeTitle: [
                        "Olá, meu nome é",
                        "Arthur Matias",
                        "Um desenvolvedor criativo de software e designer"
                    ],
                    texts: [
                        "Eu sou um desenvolvedor de software apaixonado por criar simulações visuais, utilizando muita ciência e criatividade!",
                        "Fique a vontade para entrar em contato se você quiser saber mais sobre mim, meus projetos passados, ou mesmo para discutir um projeto futuro."
                    ],
                    social: {
                        title: "me encontre",
                        description: "nas redes sociais",
                        social: [
                            {
                                id: "behance",
                                icon: eIcons.behance,
                                link: ""
                            },
                            {
                                id: "github",
                                icon: eIcons.github,
                                link: ""
                            },
                            {
                                id: "linkedin",
                                icon: eIcons.linkedin,
                                link: ""
                            },
                        ]
                    },
                    skills: {
                        soft: {
                            title: "soft skills",
                            skills: [
                                {
                                    name: "comunicação",
                                    value: 5
                                },
                                {
                                    name: "liderança",
                                    value: 4
                                },
                                {
                                    name: "solução de problemas",
                                    value: 4
                                },
                                {
                                    name: "Pensamento critico",
                                    value: 5
                                },
                                {
                                    name: "Tomada de decisão",
                                    value: 4
                                },
                                {
                                    name: "Trabalho em equipe",
                                    value: 3
                                },
                                {
                                    name: "Criatividade",
                                    value: 4
                                },
                            ],

                        },
                        hard: {
                            title: "habilidades",
                            skills: [
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                                    text: "JavaScript"
                                },
                                {
                                    link: "https://www.typescriptlang.org/",
                                    text: "TypeScript"
                                },
                                {
                                    link: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
                                    text: "C#"
                                },
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                                    text: "HTML"
                                },
                                {
                                    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                                    text: "CSS"
                                },
                                {
                                    link: "https://www.python.org/",
                                    text: "Python"
                                },
                                {
                                    link: "https://unity.com/pt",
                                    text: "Unity"
                                },
                                {
                                    link: "https://pt-br.reactjs.org/",
                                    text: "React.JS"
                                },
                                {
                                    link: "https://nextjs.org/",
                                    text: "Next.js"
                                },
                                {
                                    link: "https://svelte.dev/",
                                    text: "Svelte"
                                },
                                {
                                    link: "https://vitejs.dev/",
                                    text: "Vite"
                                },
                                {
                                    link: "https://getbootstrap.com/",
                                    text: "Bootstrap"
                                },
                                {
                                    link: "https://angular.io/",
                                    text: "Angular"
                                },
                                {
                                    link: "https://flask.palletsprojects.com/en/2.2.x/",
                                    text: "Flask"
                                },
                                {
                                    link: "https://www.adobe.com/br/creativecloud.html",
                                    text: "Abobe CC"
                                },
                                {
                                    link: "https://www.figma.com/",
                                    text: "Figma"
                                },

                            ]

                        }
                    },
                }
            },
        },
        // Mail
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
                    run: () => {
                        mailStorage.update((e) => {
                            e.create = true;
                            e.listReceived = false;
                            e.listSent = false;
                            e.reading = false;

                            return e
                        })
                    }
                },
                {
                    icon: eIcons.mailList,
                    run: () => {
                        mailStorage.update((e) => {
                            e.create = false;
                            e.listReceived = true;
                            e.listSent = false;
                            e.reading = false;

                            return e
                        })
                    }
                },
                {
                    icon: eIcons.sentMail,
                    run: () => {
                        mailStorage.update((e) => {
                            e.create = false;
                            e.listReceived = false;
                            e.listSent = true;
                            e.reading = false;

                            return e
                        })
                    }
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
                    },
                    options: [
                        "new",
                        "inbox",
                        "sent"
                    ]
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
                    },
                    options: [
                        "novo",
                        "caixa de entrada",
                        "enviados"
                    ]
                }
            }
        },
        // Notes
        // {
        //     icon: eIcons.note,
        //     shortcutIcon: eIcons.noteColored,
        //     appContent: NotePad,
        //     id: 3,
        //     geometry: {
        //         minSize: {
        //             x: 600,
        //             y: 400
        //         },
        //         currSize: {
        //             x: 600,
        //             y: 400
        //         },
        //         position: {
        //             x: window.innerWidth / 2 - 600 / 2,
        //             y: window.innerHeight / 2 - 400 / 2
        //         }
        //     },
        //     options: [
        //         {
        //             icon: eIcons.plus,
        //             run: () => { notes.set({
        //                 addNote: true,
        //                 listNotes: false,
        //             }) }
        //         },
        //         {
        //             icon: eIcons.mailList,
        //             run: () => { notes.set({
        //                 addNote: false,
        //                 listNotes: true,
        //             }) }
        //         },
        //     ],
        //     texts: {
        //         en: {
        //             name: "Notes",
        //             options: [
        //                 "new",
        //                 "notes"
        //             ]
        //         },
        //         pt: {
        //             name: "Notas",
        //             options: [
        //                 "nova",
        //                 "notas"
        //             ]

        //         }
        //     }
        // },
        //Calc
        {
            icon: eIcons.keypad,
            shortcutIcon: eIcons.calc,
            appContent: Calc,
            id: 3,
            geometry: {
                minSize: {
                    x: 300,
                    y: 500
                },
                currSize: {
                    x: 300,
                    y: 500
                },
                position: {
                    x: window.innerWidth / 2 - 300 / 2,
                    y: window.innerHeight / 2 - 500 / 2
                }
            },
            texts: {
                en: {
                    name: "Calculator",
                },
                pt: {
                    name: "Calculadora",
                }
            }
        },
        //Space Game
        {
            desktopOnly: true,
            icon: eIcons.settings,
            shortcutIcon: eIcons.asteroid,
            appContent: SpaceGame,
            id: 4,
            geometry: {
                minSize: {
                    x: 750,
                    y: 650
                },
                currSize: {
                    x: 750,
                    y: 650
                },
                position: {
                    x: window.innerWidth / 2 - 750 / 2,
                    y: window.innerHeight / 2 - 400 / 2
                }
            },
            texts: {
                en: {
                    name: "Space Game",
                },
                pt: {
                    name: "Space Game",
                }
            }
        },
        //Flappy Bird
        {
            mobileOnly: true,
            icon: eIcons.keypad,
            shortcutIcon: eIcons.flappyBird,
            appContent: FlappyBird,
            id: 5,
            geometry: {
                minSize: {
                    x: 360,
                    y: 530
                },
                currSize: {
                    x: 360,
                    y: 500
                },
                position: {
                    x: window.innerWidth / 2 - 360 / 2,
                    y: window.innerHeight / 2 - 500 / 2
                }
            },
            texts: {
                en: {
                    name: "Flappy Bird",
                },
                pt: {
                    name: "Flappy Bird",
                }
            }
        },
        //Phone
        {
            mobileOnly: true,
            icon: eIcons.call,
            shortcutIcon: eIcons.phone,
            appContent: Phone,
            id: 6,
            geometry: {
                minSize: {
                    x: 300,
                    y: 500
                },
                currSize: {
                    x: 300,
                    y: 500
                },
                position: {
                    x: window.innerWidth / 2 - 300 / 2,
                    y: window.innerHeight / 2 - 500 / 2
                }
            },
            texts: {
                en: {
                    name: "Phone",
                },
                pt: {
                    name: "Telefone",
                }
            }
        },
        //Config
        {
            mobileOnly: true,
            icon: eIcons.settings,
            shortcutIcon: eIcons.config,
            appContent: Config,
            id: 7,
            geometry: {
                minSize: {
                    x: 400,
                    y: 600
                },
                currSize: {
                    x: 400,
                    y: 600
                },
                position: {
                    x: window.innerWidth / 2 - 400 / 2,
                    y: window.innerHeight / 2 - 500 / 2
                }
            },
            texts: {
                en: {
                    name: "Settings",
                },
                pt: {
                    name: "Configurações",
                }
            }
        },

    ]

    return {
        apps
    }
}

export default AppState()