

interface LogoInterface{
    color: string;
}

const Logo:React.FC<LogoInterface> = ({
    color
}) =>{
    function handleLogoClick() {
        window.location.href = '/';
    }
    return <svg onClick={handleLogoClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.74 102.84"><title>logo</title><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path style={{fill: `var(--main-${color}`}} className="cls-1" d="M97.74,84.62h0L87.2,102.84a57.37,57.37,0,0,0-36.69-10.6,56.73,56.73,0,0,0-29.24,10.6L39.85,70.78a36.39,36.39,0,0,1,26.7,3.27L52.28,49.34c-1.14-2-2.28-3.93-3.41-5.9l-34.43,59.4h-3.9L0,84.62H0L48.87,0Z"/></g></g></svg>
}

export default Logo;