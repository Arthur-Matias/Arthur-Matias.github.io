<script lang="ts">
import { navigate } from "svelte-routing";

    export let currPage: string;

    let lastTouch: Touch;
    function handleTouchMove(e: TouchEvent){
        let element = e.changedTouches[0];
        switch (currPage) {
            case '01':
                if (lastTouch === undefined) {
                lastTouch = e.changedTouches[0]
                }
                
                setTimeout(()=>{
                    if(lastTouch.screenY > element.screenY){
                    navigate("/about", { replace: true })
                }else if(lastTouch.screenY < element.screenY){
                    return   
                }}, 200)
                break;
            case '02':
                if (lastTouch === undefined) {
                    lastTouch = e.changedTouches[0]
                }
                setTimeout(()=>{
                    if(lastTouch.screenY > element.screenY){
                    navigate("/portfolio", { replace: true })
                }else if(lastTouch.screenY < element.screenY){
                    navigate("/", { replace: true })
                }
                }, 200)
                
                break;
                case '03':
                    if (lastTouch === undefined) {
                        lastTouch = e.changedTouches[0]
                    }
                    setTimeout(()=>{
                        if(lastTouch.screenY > element.screenY){
                            navigate("/contact", { replace: true })
                        }else if(lastTouch.screenY < element.screenY){
                            navigate("/about", { replace: true })
                        }
                    }, 200)
                    break;
                case '04':
                    setTimeout(()=>{
                        if (lastTouch === undefined) {
                            lastTouch = e.changedTouches[0]
                        }else if(lastTouch.screenY > element.screenY){
                            return
                        }else if(lastTouch.screenY < element.screenY){
                            navigate("/portfolio", { replace: true })
                        }
                    }, 200) 
                break;
            default:
                break;
        }
        
    }
</script>

<div on:touchmove={e=>handleTouchMove(e)} class="trace">
    <div></div>
</div>

<style>
    .trace{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
    }
    .trace div{
        width: .3rem;
        height: 100%;
        background: var(--bg-color);
        margin: 0;
    }
</style>