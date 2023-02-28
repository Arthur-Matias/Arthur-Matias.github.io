import type { eIcons } from "./GlobalEnums";

type lang = "en"|"pt"

type Vector = {
    x: number,
    y: number,
    z?: number
}

type Options = {
    icon: eIcons;
    run: ()=>void;
}
type Geometry = {
    minSize?: Vector;
    currSize?: Vector;
    position?: Vector;
}
type Link = {
    exec: ()=>void;
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
    name: string;
    title: string;
    homeTitle: string[];
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
    name: string;
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
type Texts = any

type AppProps = {
    desktopOnly?: boolean;
    mobileOnly?: boolean;
    icon?: eIcons;
    shortcutIcon: eIcons;
    appContent?:any;
    id: number;
    geometry: Geometry;
    options?: Options[];
    texts : { [key: string]: Texts; };
    links?: { [key: string]: Link[] };
}
interface iState{
    allApps: AppProps[],
    allTexts: { [key: string]: Texts; },
    images: {background: string[]},
    settingsOptions: any[]
}

interface iMail{
    mail: string;
    title: string;
    content: string;
    time: string;
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
    Texts,
    iMail
}