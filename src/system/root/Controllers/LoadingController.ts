import { isLoading } from "../../../consts/stores";

class LoadingController{

    private loading: boolean;

    constructor(){
        this.setLoading(true);
        isLoading.subscribe((val)=>{
            this.loading = val
        })
    }

    public setLoading(val: boolean){
        isLoading.set(true)
    }
    public isLoading(){
        return this.loading
    }
}

export default new LoadingController()