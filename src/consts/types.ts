type lang = "en"|"pt"

type size = {
    w: number,
    h: number
}
type AppProps = {
    icon?: string;
    appContent?:any;
    id: number;
    minSize?: size;
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

interface loadingApp{
    id: string;
    loading: boolean;
}

export type {
    size,
    lang,
    AppProps,
    ThemeColors,
    loadingApp,
    iNote
}