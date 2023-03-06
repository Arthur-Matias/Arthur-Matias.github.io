import { minimizedApps, openApps } from "../Storage/AppStores"

function WindowManager(){
    function openApp(appId: number, onRun?:()=>void){
        if(onRun){
            onRun()
        }
        setTimeout(()=>{
            openApps.update(e=>{
                let alreadyOpen = false;
                e.map(item=>{
                    if(item === appId){
                        alreadyOpen = true
                        changeActiveAppIndex(appId)
                    }
                })
                if (!alreadyOpen) {
                    e.push(appId)
                }else{
                    unMinimizeApp(appId)
                }
                return e
            })
        },100)
    }
    function closeApp(appId:number){
        openApps.update(e=>{
            e.map((item, i)=>{
                if(item === appId){
                    e.splice(i, 1)
                }
            })
            return e
        })
        minimizedApps.update(e=>{
            e.map((item, i)=>{
                if(item === appId){
                    e.splice(i, 1)
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
            e.map((item,i)=>{
                if(item === appId){
                    e.splice(i, 1)
                    changeActiveAppIndex(appId)
                }
            })
            return e
        })
    }

    function changeActiveAppIndex(appId: number){
        openApps.update(e=>{
            e.map((openAppId, i)=>{
                if(appId === openAppId){
                    let el = e.splice(i, 1)[0]
                    e.push(el)
                }
            })
            return e
        })
    }
    
    return {
        openApp,
        closeApp,
        minimizeApp,
        unMinimizeApp,
        changeActiveAppIndex
    }
}

export default WindowManager()