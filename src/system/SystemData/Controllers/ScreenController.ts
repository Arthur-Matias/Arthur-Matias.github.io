import { screens } from "../Storage/stores";

function ScreenController(){
    let allScreens;

    screens.subscribe(e=>{
        allScreens = e
    })

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
        toggleLoading
    }
}

export default ScreenController()


