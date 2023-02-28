import { screens } from "../Storage/SystemStores";

function ScreenController(){
    let allScreens;

    screens.subscribe(e=>{
        allScreens = e
    })

    function turnOff(){
        screens.set({
            isOff: true,
            isBootActive: false,
            isLoginActive: false,
            isWorkspaceActive: false,
            isLoadingActive: false,
        })
    }
    function toggleBoot() {
        screens.set({
            isOff: false,
            isBootActive: true,
            isLoginActive: false,
            isWorkspaceActive: false,
            isLoadingActive: false,
        })
    }
    function toggleLogin() {
        screens.set({
            isOff: false,
            isBootActive: false,
            isLoginActive: true,
            isWorkspaceActive: false,
            isLoadingActive: false,
        })
    }
        
        
    function toggleWorkspace() {
        screens.set({
            isOff: false,
            isBootActive: false,
            isLoginActive: false,
            isWorkspaceActive: true,
            isLoadingActive: false,
        })
    }
        
        
    function toggleLoading() {
        screens.set({
            isOff: false,
            isBootActive: false,
            isLoginActive: false,
            isWorkspaceActive: true,
            isLoadingActive: true,
        })
    }


    return {
        toggleBoot,
        toggleLogin,
        toggleWorkspace,
        toggleLoading,
        turnOff
    }
}

export default ScreenController()


