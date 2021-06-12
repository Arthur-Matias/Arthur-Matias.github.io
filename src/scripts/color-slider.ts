
// color slide
$(()=>{
    $('#color-slider').val(`${Math.round(Math.random() * 360)}`)
    handleChange(String($('#color-slider').val()))
})

$('#color-slider').on("change", ()=>{
    handleChange(String($("#color-slider").val()));
})

const handleChange = (e:string) => {
    let currMainColor = `hsl(${e},100%,41%)`;
    let currSecondaryColor = `hsl(${e},100%,28%)`;
    document.body.style.setProperty('--main-color', currMainColor);
    document.body.style.setProperty('--secondary-color', currSecondaryColor);
}

// Create gradient of all colors
const getGradient = () => {
    let allColorsGradient = "linear-gradient(to right, hsl(0,100%,41%),";
    for (let i = 1; i < 360; i++) {
        allColorsGradient += `hsl(${i},100%,41%),`;
    }
    allColorsGradient += "hsl(360,100%,41%))";
    return allColorsGradient;
};

const gradient = getGradient();
$(()=>document.body.style.setProperty('--gradient', gradient));