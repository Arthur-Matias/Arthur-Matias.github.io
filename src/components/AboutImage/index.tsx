import MeBlue from '../../assets/azul.svg';
import MeOrange from '../../assets/laranja.svg';
import MeGreen from '../../assets/verde.svg';

interface ImageInterface{
    color: string;
}

const AboutImage: React.FC<ImageInterface> = ({
    color
})=>{

    function imgSelector(){
        if (color==='green') {
            return MeGreen;
        }else if(color==='orange'){
            return MeOrange;
        }else{
            return MeBlue
        }
    }
    
    return(
        <>
            <div>
                <img alt={`A pictrue of me on the color ${color}`} src={imgSelector()} />
            </div>
        </>
    )
}

export default AboutImage;