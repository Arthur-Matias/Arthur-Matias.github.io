import { minimizedApps, openApps } from "../../../consts/stores"

function WindowManager(){
    function openApp(appId: number, onRun?:()=>void){
        if(onRun){
            onRun()
        }
        openApps.update(e=>{
                let alreadyOpen = false;
                e.map(item=>{
                    if(item === appId){
                        alreadyOpen = true
                    }
                })
                if (!alreadyOpen) {
                    e.push(appId)
                }
                return e
            })
    }
    function closeApp(appId:number){
        openApps.update(e=>{
            e.map((item)=>{
                if(item === appId){
                    e.splice(appId, 1)
                }
            })
            return e
        })
    }
    function minimizeApp(appId:number){
        minimizedApps.update(e=>{
            let alreadyMinimized = false;
            e.map(item=>{
                if(item === appId){
                    alreadyMinimized = true
                }
            })
            if (!alreadyMinimized) {
                e.push(appId)
            }
            return e
        })
    }
    function unMinimizeApp(appId:number){
        minimizedApps.update(e=>{
            e.map((item)=>{
                if(item === appId){
                    e.splice(appId, 1)
                }
            })
            return e
        })
    }

    return {
        openApp,
        closeApp,
        minimizeApp,
        unMinimizeApp
    }
}

export default WindowManager()