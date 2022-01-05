import mainPhoto from '../assets/photos/photo.png'
import plusSign from '../assets/icons/plus-sign.svg'
import behance from '../assets/icons/behance.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import attachmentClip from '../assets/icons/clip.svg'

import snowfallImg from '../assets/photos/portfolio/development/snowfall.png'
import spaceGameImg from '../assets/photos/portfolio/development/space-game.png'
import bunnyJumpImg from '../assets/photos/portfolio/development/bunny.png'
import discordImg from '../assets/photos/portfolio/development/discord.png'
import pongImg from '../assets/photos/portfolio/development/pong.png'
import glowingBtnsImg from '../assets/photos/portfolio/development/glowing-btns.png'
import glassCalcImg from '../assets/photos/portfolio/development/glassmorphism-calc.png'
import glassWebsiteImg from '../assets/photos/portfolio/development/glass-website.png'
import cubeImg from '../assets/photos/portfolio/development/3d-cube.png'
import instaCloneImg from '../assets/photos/portfolio/development/insta-clone.png'
import animatedLoginImg from '../assets/photos/portfolio/development/animated-login.png'
import flappyImg from '../assets/photos/portfolio/development/flappy.png'

import curfewBarImg from '../assets/photos/portfolio/design/curfew-bar.png'
import coverFbImg from '../assets/photos/portfolio/design/facebook-cover-imortais.png'
import physicalStuff from '../assets/photos/portfolio/design/mug-imortais.png'
import guitarBookImg from '../assets/photos/portfolio/design/book-cover.png'
import yapiraVideoImg from '../assets/photos/portfolio/design/yapira-video.png'
import logoRedesignImg from '../assets/photos/portfolio/design/e-sports-team-logo.png'

import noImg from '../assets/photos/portfolio/no-img.png'

const config = {
    "menu":{
        links: [
            "home",
            "about",
            "contact"
        ],
        texts: [
            "Home",
            "About",
            "contAct"
        ]
    },
    "home": {
        texts: {
            greetings: "<b>-</b> Hello i'm",
            name: "ArtHur mAtiAs",
            description: "a <b>Designer</b> and <b>Developer</b>"
        },
        image: mainPhoto
    },
    "about": {
        title: "About",
        plusSign: plusSign,
        buttons: ["Design", "Development"]
    },
    "contact": {
        title: "contAct me",
        icons: [
            attachmentClip
        ],
        sections: [
            // 0
            {
                title: "Good <b>afternoon</b> human. Who are you?",
                placeholders: [
                    "first and last name *",
                    "company"
                ]
            },
            // 1
            {
                title: "Nice to meet you <b>{name}</b>. What can i help you with?",
                options: [
                    {
                        title: "Not Sure",
                        description: "I don’t know yet. Let’s talk and explore the possibilities."
                    },
                    {
                        title: "Design",
                        description: "I need a video, web design or design system to be created."
                    },
                    {
                        title: "Development",
                        description: "I need a website, game, prototype or something else to be developed."
                    }
                ]
            },
            // 2
            {
                title: "Cool. What can you tell me about your <b>project</b>?",
                placeholders: [
                    "message *",
                    "attatchments"
                ]
            },
            {
                title: "Nearly there. How can I <b>reach</b> you?",
                placeholders: [
                    "email address *",
                    "phone number (only numbers)"
                ]
            }
        ],
        buttons: {
            back: "back",
            next: "next",
            send: "send"
        }
    },
    "portfolio": {
        Design: [
            {
                buttons: {
                    project: "https://www.behance.net/gallery/113523017/Bar-Webpage-UI"
                },
                name: "Website UI for bar",
                imgSrc: curfewBarImg,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
            {
                buttons: {
                    project: "https://www.behance.net/gallery/113425787/Capa-e-moldura-para-Facebook"
                },
                name: "Cover and frame for facebook for Academic Athletic Association",
                imgSrc: coverFbImg,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
            {
                buttons: {
                    project: "https://www.behance.net/gallery/113425585/Design-de-Caneca-universitaria-com-tirante"
                },
                name: "Strap Leash, Mug and T-Shirt Design for Academic Athletic Association",
                imgSrc: physicalStuff,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
            {
                buttons: {
                    project: "https://www.behance.net/gallery/95806451/Cover-for-guitar-Book"
                },
                name: "Guitar Book Cover",
                imgSrc: guitarBookImg,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
            {
                buttons: {
                    project: "https://www.behance.net/gallery/81460661/Institutional-Video-Yapira-Team"
                },
                name: "Institutional Video for UFPR Robotics Team Yapira",
                imgSrc: yapiraVideoImg,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
            {
                buttons: {
                    project: "https://www.behance.net/gallery/95801161/Logo-Redesign-for-Esports-Team"
                },
                name: "E-Sports Team Logo Redesign",
                imgSrc: logoRedesignImg,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas`
            },
        ],
        Development: [
            {
                buttons: {
                    deploy: "https://arthur-matias.github.io/space-game/",
                    project: "https://github.com/arthur-matias/space-game/"
                },
                name: "Space Game",
                imgSrc: spaceGameImg,
                description: `A "Asteroids" like game, made in unity and built for the web with the WebGL plugin. Use <b>W</b>, <b>A</b>, <b>S</b>, <b>D</b> or <b>Arrow Keys</b> to move the player and <b>SPACE</b> to shoot.`
            },
            {
                buttons: {
                    deploy: "https://arthur-matias.github.io/snowfall/",
                    project: "https://github.com/arthur-matias/snowfall/"
                },
                link: "https://arthur-matias.github.io/snowfall/",
                name: "Snowfall",
                imgSrc: snowfallImg,
                description: `Snowfall simulation made with <b>P5JS/Processing</b>`
            },
            {
                buttons: {
                    deploy: "https://arthur-matias.github.io/bunny-jump/",
                    project: "https://github.com/arthur-matias/bunny-jump/"
                },
                link: "https://arthur-matias.github.io/bunny-jump/",
                name: "Bunny Jump",
                imgSrc: bunnyJumpImg,
                description: `Infinite bunny jumper game. Developed with JavaScript and PhaserJS`
            },
            {
                buttons: {
                    project: "https://github.com/arthur-matias/typescript-blockchain"
                },
                name: "TypeScript Blockchain",
                imgSrc: noImg,
                description: `This project is a cyptocurrency blockchain template API, developed with <b>TypeScript</b> and <b>NodeJs</b>.`
            },
            {
                buttons: {
                    project: "https://github.com/Arthur-Matias/discord_clone",
                    deploy: "https://arthur-matias.github.io/discord_clone/"
                },
                name: "Discord Clone",
                imgSrc: discordImg,
                description: `This project is a Discord frontend clone made with <b>React</b> + <b>styled components</b> and <b>TypeScript</b>.`
            },
            {
                buttons: {
                    project: "https://github.com/Arthur-Matias/pong-processing",
                    deploy: "https://arthur-matias.github.io/pong-processing/"
                },
                name: "Pong",
                imgSrc: pongImg,
                description: `Game Pong made in Processing/p5.js\n To play it you can use the <b>Up</b> and <b>Down</b> Arrow Keys to move the right pad, and <b>W</b>/<b>S</b> to move the left pad.`
            },
            {
                buttons: {
                    project: "https://github.com/Arthur-Matias/glowing-ckeckbox-button",
                    deploy: "https://arthur-matias.github.io/glowing-ckeckbox-button/"
                },
                name: "Glowing Buttons",
                imgSrc: glowingBtnsImg,
                description: `A nice glowing checkbox button made only with <b>HTML</b> and <b>CSS</b>.`
            },
            {
                buttons: {
                    project: "https://github.com/Arthur-Matias/calculator-glassmorphism",
                    deploy: "https://arthur-matias.github.io/calculator-glassmorphism"
                },
                name: "Glassmorphism Calculator",
                imgSrc: glassCalcImg,
                description: `A beatiful Glassmorphism style calculator made entirely in <b>HTML</b> and <b>CSS</b>.`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/team-section-page",
                    deploy: "https://arthur-matias.github.io/team-section-page"
                },
                name: "Team Section Page",
                imgSrc: glowingBtnsImg,
                description: `A cool <b>HTML</b> + <b>CSS</b> only Glassmorphism style Team Page.`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/glassmorphism-website",
                    deploy: "https://arthur-matias.github.io/glassmorphism-website"
                },
                name: "Glassmorphism Website",
                imgSrc: glassWebsiteImg,
                description: `A cool <b>HTML</b> + <b>CSS</b> only Glassmorphism style Team Page.`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/3d-rendering",
                    deploy: "https://arthur-matias.github.io/3d-rendering/"
                },
                name: "3D Rendering With Linear Algebra",
                imgSrc: cubeImg,
                description: `3D visualization with perspective using <b>Linear Algebra</b>, <b>MathJs</b> and <b>Processing/P5JS</b>.`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/instagram-clone",
                    deploy: "https://arthur-matias.github.io/instagram-clone/"
                },
                name: "Instagram Login Clone",
                imgSrc: instaCloneImg,
                description: `Instagram login clone made with HTML and CSS. <b>IMPORTANT</b>: Chrome will throw a security warning, it's all safe, this happens because it is a copy of a "famous" website`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/tela-de-login-interativa/",
                    deploy: "https://arthur-matias.github.io/tela-de-login-interativa/"
                },
                name: "Animated Login Page",
                imgSrc: animatedLoginImg,
                description: `A nice animated login page. Made only with <b>HTML</b> and <b>CSS</b>`
            },
            {
                buttons: {
                    project:"https://github.com/Arthur-Matias/FlappyBird-Clone/",
                    deploy: "https://arthur-matias.github.io/FlappyBird-Clone/"
                },
                name: "Flappy Bird Clone",
                imgSrc: flappyImg,
                description: `A clone of the famous Flappy Bird game. Made with <b>JavaScript</b> and <b>HTML5 Canvas</b>`
            },
        ]
    },
    "social-media": {
        icons: {
            behance,
            linkedin,
            github
        }
    }
}

export default config