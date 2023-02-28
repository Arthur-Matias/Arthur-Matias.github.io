import { writable } from "svelte/store";
import { eLang, eThemeMode } from "../Storage/GlobalEnums";
import state from "../Storage/SystemState";

function StoreController(){
    
    let storage = undefined ? JSON.parse(localStorage['system']) : []
    console.log(storage)
    
    //Global
    const isLauncherOpen = writable(storage[1] || false);
    const isLoadingActive = writable(storage[2] || false);
    const settingsTrayOpen = writable(storage[4] || false);
    const activeBg = writable(storage[5] || Math.floor(Math.random()*14));

    //System
    const isMobile = writable(storage[0] || false);
    const activeLang = writable(storage[1] || eLang.En);
    const activeColor = writable(storage[2] || 0);
    const activeTheme = writable(storage[8] || eThemeMode.Dark);
    const transparency = writable(storage[12] || 0.6);
    
    //Apps
    const isLanguageSelectionOpen = writable(storage[4] || false);
    const openApps = writable(storage[9] || []);
    const minimizedApps = writable(storage[10] || []);
    const mailStorage = writable({
        create: false,
        listReceived: true,
        listSent: false,
        reading: false,
        current: undefined,
        inboxList: {
            "pt": [{}],
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

    const notes = writable({
        addNote: false,
        listNotes: true
    })
    const PageStorage = writable({
        isHomeActive: true,
        isAboutActive: false, 
        isFindMeActive: false
    })

    function global(){
        let launcherOpen;
        let loadingActive;
        let settingsOpen;
        let currBg;

        isLauncherOpen.subscribe((e)=>{launcherOpen = e})
        isLoadingActive.subscribe((e)=>{loadingActive = e})
        settingsTrayOpen.subscribe((e)=>{settingsOpen = e})
        activeBg.subscribe((e)=>{currBg = e})

        //Background
        function setBackground(i: number){
            if(i<state.images.length){
                activeBg.set(i)
            }
        }
        //Launcher
        function setLauncherOpen(){
            isLauncherOpen.set(true)
        }
        function setLauncherClose(){
            isLauncherOpen.set(false)
        }
        function toggleLauncher(){
            isLauncherOpen.set(!launcherOpen)
        }
        //Settings
        function setSettingsOpen(){
            settingsTrayOpen.set(true)
        }
        function setSettingsClose(){
            settingsTrayOpen.set(false)
        }
        function toggleSettings(){
            settingsTrayOpen.set(!launcherOpen)
        }
        return {
            background: {
                value: currBg,
                setBackground: e=>setBackground(e)
            },
            launcher: {
                value: launcherOpen,
                setOpen: setLauncherOpen(),
                setClose: setLauncherClose(),
                toggle: toggleLauncher()
            },
            settings: {
                value: settingsOpen,
                setOpen: setSettingsOpen(),
                setClose: setSettingsClose(),
                toggle: toggleSettings()
            }
        }
    }
    function apps(){

        return {
            
        }
    }
    function system(){

        return {
            
        }
    }

    return {
        Global: global(),
        Apps: apps(),
        System: system()
    }
}

export default StoreController()