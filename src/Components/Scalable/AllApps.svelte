<script lang="ts">
    import state from '../../Storage/AppState';
    import { isLauncherOpen, settingsTrayOpen } from '../../Storage/SystemStores'
    import AppIcon from './AppIcon.svelte';
    import type { AppProps } from '../../Storage/GlobalTypes';
    import { isMobile } from '../../Storage/GlobalStores';

    let w: number,h: number;
    let toolbarHeight = 76;
    const shortcuts: AppProps[] = state.apps
    function handleWindowClick(mouse: MouseEvent){
        if ($isLauncherOpen && !checkIfInside(mouse)) {
            closeLauncher()
        }
    }
    function closeLauncher(){
        isLauncherOpen.update(val=> false)

    }
    function checkIfInside(e: MouseEvent) {
        
        let rem = 16,
            xRange = (e.clientX > (0.9* rem)) && (e.clientX < (1.1*rem + w)),
            yRange = (e.clientY > (window.innerHeight - toolbarHeight - 1*rem - h)) && (e.clientY < (window.innerHeight - toolbarHeight - 1*rem))

        return xRange && yRange
    }

    function openConfigOptions(){
        setTimeout(()=>{
            settingsTrayOpen.update(val=> true)
            closeLauncher()
        }, 50)
    }
    
</script>

<div class="all-apps">
    {#each shortcuts as shortcut}
        {#if shortcut.mobileOnly && $isMobile}
            <AppIcon props={shortcut} onRun={()=>closeLauncher()} openAtfirstClick={true} />
        {:else if shortcut.desktopOnly && !$isMobile}
            <AppIcon props={shortcut} onRun={()=>closeLauncher()} openAtfirstClick={true} />
        {:else if !shortcut.mobileOnly && !shortcut.desktopOnly}
            <AppIcon props={shortcut} onRun={()=>closeLauncher()} openAtfirstClick={true} />    
        {/if}
    {/each}
</div>

<style>
    .all-apps{
        width: 100%;
        height: 100%;
        margin: 1rem;
        overflow-y: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-flow: row wrap;
                flex-flow: row wrap;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start;
    }
</style>