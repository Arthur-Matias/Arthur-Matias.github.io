import { writable } from "svelte/store";
import { eLang, eThemeMode } from "./enums";

let storage = localStorage['stores']?JSON.parse(localStorage['stores']):[]

export const activeLang = writable(storage[0] || eLang.En);
export const activeColor = writable(storage[1] || 0);
export const isLauncherOpen = writable(storage[2] || false);
export const isLanguageSelectionOpen = writable(storage[3] || false);
export const isLoading = writable(storage[4] || false);
export const isBootLoading = writable(storage[5] || true);
export const isTurnedOff = writable(storage[6] || false);
export const activeTheme = writable(storage[7] || eThemeMode.Dark);
export const openApps = writable(storage[8] || [0]);
export const minimizedApps = writable(storage[9] || []);
export const settingsTrayOpen = writable(storage[10] || false);
export const transparency = writable(storage[11] || 0.6);
export const activeBg = writable(storage[12] || 1);

const stores = [
    activeLang,
    activeColor,
    isLauncherOpen,
    isLanguageSelectionOpen,
    isLoading,
    isBootLoading,
    isTurnedOff,
    activeTheme,
    openApps,
    minimizedApps,
    settingsTrayOpen,
    transparency,
    activeBg,
]

setInterval(()=>{
    stores.map((store,i)=>{
        store.subscribe((e)=>{
            storage[i] = e
        })
    })
    localStorage['stores'] = JSON.stringify(storage)
}, 5000)