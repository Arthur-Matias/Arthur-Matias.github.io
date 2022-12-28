import { writable } from "svelte/store";
import { eLang, eThemeMode } from "../../Global/consts/enums";

let storage = undefined ? JSON.parse(localStorage['stores']) : [];
console.log(storage);

// export const isMobile = writable(storage[0] || false);
// export const activeLang = writable(storage[1] || eLang.En);
// export const activeColor = writable(storage[2] || 0);
// export const isLauncherOpen = writable(storage[3] || false);
export const isLanguageSelectionOpen = writable(storage[4] || false);
// export const isLoadingActive = writable(storage[5] || false);
// export const isBootActive = writable(storage[6] || true);
// export const isTurnedOff = writable(storage[7] || false);
// export const activeTheme = writable(storage[8] || eThemeMode.Dark);
export const openApps = writable(storage[9] || []);
export const minimizedApps = writable(storage[10] || []);
// export const settingsTrayOpen = writable(storage[11] || false);
// export const transparency = writable(storage[12] || 0.6);
// export const activeBg = writable(storage[13] || 1);
export const isHomeActive = writable(storage[14] || true);

export const mailStorage = writable({
    create: false,
    listReceived: true,
    listSent: false,
    reading: false,
    current: undefined,
    inboxList: {
        "pt": [{
            mail: "ahmmfdc@gmail.com",
            title: "Bem vindo",
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium rutrum feugiat. Proin scelerisque nec orci non commodo. Donec dapibus scelerisque erat, at pulvinar eros accumsan non. Mauris efficitur velit vitae imperdiet consequat. Praesent sit amet consequat nisi. Maecenas semper eu enim ac sagittis. Fusce imperdiet bibendum lorem ac accumsan. Nullam quis nunc ut tortor molestie posuere eget a quam. Donec ac maximus erat. Proin eu ornare dui, a interdum ligula. Phasellus non mollis diam.

                Vivamus volutpat auctor volutpat. Donec quis mattis mi, ac fringilla mi. Nulla hendrerit ex a lorem cursus, porttitor dictum mi laoreet. Cras commodo dui eu risus pellentesque tristique. Donec pretium bibendum ante, iaculis dapibus enim. Nunc consectetur aliquet tellus semper volutpat. Fusce posuere eros dui, quis commodo justo sodales vitae. Pellentesque sit amet ipsum pharetra urna egestas rhoncus. Nam in pharetra leo, ac pharetra metus.
                Aliquam molestie efficitur ante, ut auctor nisi. Sed facilisis vulputate viverra. Morbi eu neque ut
            `,
            time: new Date().toISOString()
        }],
        "en":[
            {
                mail: "ahmmfdc@gmail.com",
                title: "Welcome",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium rutrum feugiat. Proin scelerisque nec orci non commodo. Donec dapibus scelerisque erat, at pulvinar eros accumsan non. Mauris efficitur velit vitae imperdiet consequat. Praesent sit amet consequat nisi. Maecenas semper eu enim ac sagittis. Fusce imperdiet bibendum lorem ac accumsan. Nullam quis nunc ut tortor molestie posuere eget a quam. Donec ac maximus erat. Proin eu ornare dui, a interdum ligula. Phasellus non mollis diam.
    
                    Vivamus volutpat auctor volutpat. Donec quis mattis mi, ac fringilla mi. Nulla hendrerit ex a lorem cursus, porttitor dictum mi laoreet. Cras commodo dui eu risus pellentesque tristique. Donec pretium bibendum ante, iaculis dapibus enim. Nunc consectetur aliquet tellus semper volutpat. Fusce posuere eros dui, quis commodo justo sodales vitae. Pellentesque sit amet ipsum pharetra urna egestas rhoncus. Nam in pharetra leo, ac pharetra metus.
                    Aliquam molestie efficitur ante, ut auctor nisi. Sed facilisis vulputate viverra. Morbi eu neque ut
                `,
                time: new Date().toISOString()
            }

        ]
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