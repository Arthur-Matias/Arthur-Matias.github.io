import type { eIcons, eLang } from "./enums";

type lang = "en"|"pt"

type Vector = {
    x: number,
    y: number,
    z?: number
}
type AppProps = {
    icon?: eIcons;
    shortcutIcon: eIcons;
    appContent?:any;
    id: number;
    geometry: Geometry;
    options?: Options[];
}
type Options = {
    icon: eIcons,
    run: ()=>void
}
type Geometry = {
    minSize?: Vector;
    currSize?: Vector;
    position?: Vector;
}
type Link = {
    url: string;
    name: string
}
interface ThemeColors{
    bgDark: string;
    bgDarkTransparent: string;
    bgLight: string;
    accent: string;
    accentLight: string;
}
interface iNote{
    title: string;
    text: string;
}
interface iloadingApp{
    id: string;
    loading: boolean;
}
interface iOptions{
    title: string;
    options?: string[]
}
type ConfigTexts = {
    title: string;
    options: iOptions[];
}
interface iLink{
    url?: string;
    name: string;
    exec?: ()=>void
}
interface iSocial{
    id: string;
    link: string
}
interface iAbout{
    links: iLink[];
    homeTitle: string[];
    title: string;
    texts: string[];
    social: {
        title: string;
        social: iSocial[]
    }
}
type tInput = {
    placeholder: string;
    title?: string
}
type mailInputs = {
    from: tInput,
    subject: tInput,
    message: tInput,
    tray: {
        attatchments: {
            title: string
        },
        btn: {
            title: string,
            icon: eIcons
        }
    }
}
interface iApp{
    name: string;
    description: string;
}
type Texts = {
    apps: iApp[];
    config: ConfigTexts
    boot: string[];
    about: iAbout;
    mail: mailInputs;
    login: {
        phrase: string
    }
}
interface iState{
    allApps: AppProps[],
    allTexts: { [key: string]: Texts; },
    images: {background: string[]},
    settingsOptions: any[]
}

export type {
    Vector,
    lang,
    AppProps,
    ThemeColors,
    iloadingApp,
    Link,
    iNote,
    iState,
    Texts
}