import mainPhoto from './assets/photo.png'
import example from './assets/example.png'
import plusSign from './assets/plus-sign.svg'

const config = {
    "menu":{
        links: [
            "home",
            "works",
            "contact"
        ],
        texts: [
            "Home",
            "works",
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
    "works": {
        title: "Works",
        plusSign: plusSign,
        works: [
        {
            title: "Name of the project",
            description: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "http://google.com",
            image: example
        },
        {
            title: "Name of the project",
            description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "http://google.com",
            image: example
        },
        {
            title: "Name of the project",
            description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "http://google.com",
            image: example
        },
    ]},
    "contact": {
        title: "contAct me",
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
                        description: "I need an interactive design or design system to be created."
                    },
                    {
                        title: "Development",
                        description: "I need a website, online store or prototype to be built."
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
                    "phone number"
                ]
            }
        ],
        buttons: {
            back: "back",
            next: "next",
            send: "send"
        }
    }
}

export default config