import { writable } from "svelte/store";
import { eLang, eThemeMode } from "../../Global/consts/enums";

let storage = undefined ? JSON.parse(localStorage['stores']) : []
console.log(storage)

export const isMobile = writable(storage[0] || false);
export const activeLang = writable(storage[1] || eLang.En);
export const activeColor = writable(storage[2] || 0);
export const activeTheme = writable(storage[8] || eThemeMode.Dark);
export const transparency = writable(storage[12] || 0.6);

const stores = [
    // activeLang,
    // activeColor,
    // isLauncherOpen,
    // isLanguageSelectionOpen,
    // isLoading,
    // isBootLoading,
    // isTurnedOff,
    // activeTheme,
    // openApps,
    // minimizedApps,
    // settingsTrayOpen,
    // transparency,
    // activeBg,
    // homeActive
]

// function setStorage(store,i){
//     console.log("Auto saving storage: " + i)
//     console.log(storage[i])
//     console.log("-----------------------------")
//     storage[i] = store
//     localStorage['stores'] = JSON.stringify(storage)
// }

// stores.map((store,i)=>{
//     store.subscribe((e)=>setStorage(e, i))
// })