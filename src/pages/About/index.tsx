import {AboutContainer, ImageContainer, AboutContent, AboutText} from './styles'

import AboutImage from '../../components/AboutImage'

interface AboutInterface{
    color:string;
}

const About: React.FC<AboutInterface>  = ({
    color,
})=>{
    
    return(
        <AboutContainer>
            <ImageContainer>
                <AboutImage color={color} />
            </ImageContainer>
            <AboutContent>
                <AboutText><br />I'm a Designer & Developer from Brazil, please feel free to contact if u want to know more about me, my past projects or even to discuss a future one.</AboutText>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;