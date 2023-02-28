function EventController(){
    let mylatesttap;

    function handleTap(singleTapCB?:()=>void, doubleTapCB?: ()=>void){
        
        var now = new Date().getTime();
        var timesince = now - mylatesttap;
        if((timesince < 600) && (timesince > 0)){

            // double tap   
            doubleTapCB;

        }else{
            
            singleTapCB();
        }

        mylatesttap = new Date().getTime();

    }
    
    return {
        handleTap
    }
}

export default EventController