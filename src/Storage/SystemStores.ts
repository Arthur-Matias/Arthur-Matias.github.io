import { writable } from "svelte/store";

let storage = undefined ? JSON.parse(localStorage['SystemStores']) : []
// console.log(storage)

export const isLauncherOpen = writable(storage[1] || false);
export const isLoadingActive = writable(storage[2] || false);
export const settingsTrayOpen = writable(storage[4] || false);
export const activeBg = writable(storage[5] || Math.floor(Math.random()*14));

export const screens = writable({
    isOff: false,
    isBootActive: true,
    isLoginActive: false,
    isWorkspaceActive: false,
    isLoadingActive: false,
})

const stores = [
    isLauncherOpen
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