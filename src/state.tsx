
let items: string[] = ['home', 'about', 'portfolio', 'contact'];

export const State = {
    menuItems: items,
    colors: {
        mainColors: ['blue','green','orange'],
        currentColor: '',
        getCurrentColor(){
            return this.currentColor;
        },
        setCurrentColor(color:string){
            this.currentColor = color;
        }
    },
}