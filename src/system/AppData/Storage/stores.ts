import { writable } from "svelte/store";
import { eLang, eThemeMode } from "../../Global/consts/enums";

let storage = undefined ? JSON.parse(localStorage['stores']) : [];
console.log(storage);

export const isLanguageSelectionOpen = writable(storage[4] || false);
export const openApps = writable(storage[9] || []);
export const minimizedApps = writable(storage[10] || []);

export const mailStorage = writable({
    create: false,
    listReceived: true,
    listSent: false,
    reading: false,
    current: undefined,
    inboxList: {
        "pt": [],
        "en":[]
    },
    sentList: {
        "pt": [],
        "en":[]
    }
})
export const notes = writable({
    addNote: false,
    listNotes: true
})
export const PageStorage = writable({
    isHomeActive: true,
    isAboutActive: false, 
    isFindMeActive: false
})

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