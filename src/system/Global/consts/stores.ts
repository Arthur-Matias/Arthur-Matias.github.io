import { writable } from "svelte/store";
import { eLang, eThemeMode } from "../../Global/consts/enums";

let storage = undefined ? JSON.parse(localStorage['stores']) : []
console.log(storage)

export const isMobile = writable(storage[0] || false);
export const activeLang = writable(storage[1] || eLang.En);
export const activeColor = writable(storage[2] || 0);
// export const isLauncherOpen = writable(storage[3] || false);
// export const isLanguageSelectionOpen = writable(storage[4] || false);
// export const isLoadingActive = writable(storage[5] || false);
// export const isBootActive = writable(storage[6] || true);
// export const isTurnedOff = writable(storage[7] || false);
export const activeTheme = writable(storage[8] || eThemeMode.Dark);
// export const openApps = writable(storage[9] || [0]);
// export const minimizedApps = writable(storage[10] || []);
// export const settingsTrayOpen = writable(storage[11] || false);
export const transparency = writable(storage[12] || 0.6);
// export const activeBg = writable(storage[13] || 1);
// export const isHomeActive = writable(storage[14] || true);

// export const screens = writable({
//     isOff: false,
//     isBootActive: true,
//     isLoginActive: false,
//     isWorkspaceActive: false,
//     isLoadingActive: false,
// })
// // 

// let bootActive = true,
//     loginActive = false,
//     desktopActive = false,
//     loadingActive = false;

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