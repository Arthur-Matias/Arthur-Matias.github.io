export default function Colors(){
    document.documentElement.style.setProperty("--gradient", generateGradient());
    function generateGradient(){
        let gradient = "linear-gradient(to right, "

        for (let i = 1; i < 361; i++) {
            if (i === 360) {
                gradient += `hsl(${i}, 96%, 45%))`            
            }else{
                gradient += `hsl(${i}, 96%, 45%),`            
            }
        }

        // gradient += ")"
        return gradient;
    }

    function setMainColor(value: string){
        console.log(value)
        document.documentElement.style.setProperty("--main-color", `hsl(${value}, 96%, 45%)`);
        document.documentElement.style.setProperty("--hue-angle", `${value}deg`);
    }
    return{
        setMainColor
    }
}