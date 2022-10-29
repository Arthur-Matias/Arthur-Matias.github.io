import { activeColor, activeTheme, isLoading, transparency } from "../../../consts/stores";
import { eThemeMode } from "../../../consts/enums";
import type { ThemeColors } from "../../../consts/types";

let opacity;
transparency.subscribe(e=>{
    opacity = e
})

const darkColors:ThemeColors   = {
    bgDark: "#252525",
    bgDarkTransparent: `rgba(50, 50, 50, ${opacity})`,
    bgLight: "#323232",
    accent: "#BEC0CD",
    accentLight: "#CCCCD6",
}
const lightColors:ThemeColors = {
    bgDark: "#F8F8F8",
    bgDarkTransparent: `rgba(248, 248, 248, ${opacity})`,
    bgLight: "#FFFFFF",
    accent: "#323232",
    accentLight: "#252525",
}

class ColorController{
    private colors: {
        theme: ThemeColors[],
        mainColors: string[],
        mainColorsLight: string[]
    };
    private activeMode: eThemeMode = eThemeMode.Dark;

    constructor(){
        
        this.colors = {
            theme: [darkColors, lightColors],
            mainColors: [
                "#CD0042",
                "#E44500",
                "#ECBA00",
                "#12B101",
                "#018E72",
                "#0256DC",
                "#2401BA",
                "#6A0099",
                "#474746",
            ],
            mainColorsLight: [
                "#FF3375",
                "#FF834C",
                "#FFDA52",
                "#31FE1B",
                "#02F3C3",
                "#498FFD",
                "#4E25FE",
                "#B100FF",
                "#7B7B7A",
            ]
        };
        this.activeMode = eThemeMode.Dark
        this.updateColors()
    }

    public changeActiveColor(colorIndex: number){
        activeColor.set(colorIndex)
        isLoading.set(true)
        // this.activeColor = colorIndex
        this.updateColors(300)
    }
    public changeActiveTheme(themeMode: eThemeMode){
        activeTheme.set(themeMode)
        isLoading.set(true)
        this.updateColors(500)
    }
    public changeOpacity(val: number){
        transparency.set(val)
        this.updateColors(50)
    }

    public updateColors(timeout?: number){

        let active: number;
        let opacity: number;
        
        transparency.subscribe(val=>{
            opacity = val
        })
        activeColor.subscribe((val)=>{
            active = val
        })

        const darkColors:ThemeColors   = {
            bgDark: "#252525",
            bgDarkTransparent: `rgba(50, 50, 50, ${opacity})`,
            bgLight: "#323232",
            accent: "#BEC0CD",
            accentLight: "#CCCCD6",
        }
        const lightColors:ThemeColors = {
            bgDark: "#F8F8F8",
            bgDarkTransparent: `rgba(248, 248, 248, ${opacity})`,
            bgLight: "#FFFFFF",
            accent: "#323232",
            accentLight: "#252525",
        }
        this.colors.theme = [darkColors, lightColors]

        document.documentElement.style.setProperty('--bg-dark', this.ActiveTheme.bgDark);
        document.documentElement.style.setProperty('--bg-dark-transparent', this.ActiveTheme.bgDarkTransparent);
        document.documentElement.style.setProperty('--bg-light', this.ActiveTheme.bgLight);
        document.documentElement.style.setProperty('--main-color', this.colors.mainColors[active]);
        document.documentElement.style.setProperty('--main-color-light', this.colors.mainColorsLight[active]);
        document.documentElement.style.setProperty('--accent', this.ActiveTheme.accent);
        document.documentElement.style.setProperty('--accent-light', this.ActiveTheme.accentLight);
        

        setTimeout(()=>{
            isLoading.set(false)
        }, timeout?timeout:1000)
    }

    public get ActiveTheme():ThemeColors{
        let active
        activeTheme.subscribe((e)=>{
            active = e
        })
        return this.colors.theme[active]
    }
    public get ActiveColor(){
        let active: number;
        activeColor.subscribe((val)=>{
            active = val
        })
        return this.colors.mainColors[active]
    }
    public get AllMainColors(){
        return this.colors.mainColors
    }
}

export default new ColorController()