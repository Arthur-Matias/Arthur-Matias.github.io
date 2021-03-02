<script lang='ts'>
    export let color:string = `hsl(0,100%,41%)`;
    export let secondaryColor:string = `hsl(0,100%,28%)`;
    let colorValue:string = '0';

    const setColor = (value: string)=>{
        color = `hsl(${value},100%,41%)`;
        secondaryColor = `hsl(${value},100%,28%)`;
    };
    function handleChange(e: Event ) {
        let target = e.target as HTMLInputElement
        let value = target.value;
        console.log(target.value)
        console.log(color)
        setColor(value);
    };
    const getGradient = () => {
        let allColorsGradient = 'linear-gradient(to right, hsl(0,100%,41%),';
        for (let i = 1; i < 360; i++) {
            allColorsGradient += `hsl(${i},100%,41%),`
        }
        allColorsGradient+='hsl(360,100%,41%))'
        return allColorsGradient;
    }
    let gradient = getGradient();
    var sheet = document.createElement('style')
    sheet.innerHTML = `
    input[type=range]{
        -webkit-appearance: none;
        width: 18.75rem;
        background-color: none;
        border: none;
        padding: 0;
        outline: none;
        transform: translateX(-50%);
    }
    @media screen and (max-height: 600px){
        input[type=range]{
        width: 10rem;
    }
        input[type=range]::-webkit-slider-thumb {
            height: 1rem;
            width: 1rem;
        }
    }

    input[type=range]::-webkit-slider-runnable-track {
        height: 5px;
        background: ${gradient};
        border: none;
    }

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: var(--current-color);
    transition: ease .2ms;
    cursor: pointer;

    margin-top: -.7rem;
}
input[type=range]::-webkit-slider-thumb:hover{
    filter: brightness(.8)
}
input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${gradient};
}
    `;
    document.body.appendChild(sheet);
</script>

<div class="slider-container" style={`--current-color: ${color};`}>
    <input 
    type="range" 
    name="colorSlider" 
    start='0' 
    min='0' max='360' 
    id="colorSlider" 
    on:change={(e)=>handleChange(e)}
    value={colorValue}
    />
</div>

<style>
    .slider-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>