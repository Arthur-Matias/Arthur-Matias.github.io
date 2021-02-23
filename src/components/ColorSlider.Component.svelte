<script lang='ts'>
    
    export let color:string = `hsl(0,100%,41%)`;
    export let secondaryColor:string = `hsl(0,100%,28%)`;
    let colorValue:string = '0';

    const setColor = (value: string)=>{
        color = `hsl(${value},100%,41%)`;
        secondaryColor = `hsl(${value},100%,28%)`;
    };
    function handleChange(e: any) {
        let value = e.target.value;
        console.log(e.target.value)
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
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: ${gradient};
        border: none;
        border-radius: 3px;
    }

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--white);
    margin-top: -4px;
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

<div class="colored-slider-container">
    <input type="range" name="colorSlider" start='0' min='0' max='360' id="colorSlider" on:change={(e)=>handleChange(e)} value={colorValue}/>
</div>

<style>
    .colored-slider-container{
        display: flex;
        align-items: center;
        height: 20px;
        margin-top: 4rem;
        margin-left: -1rem;
        grid-column-start: 2;
        grid-column-end: 8;
        grid-row-start: 1;
        padding-top: 2rem;
        margin-left: 2rem;
    }
</style>