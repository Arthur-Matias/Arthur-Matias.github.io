import {AboutContainer, MyImg, AboutContent, AboutText} from './styles'

interface AboutInterface{
    color: string;
}

const About: React.FC<AboutInterface>  = ({
    color
})=>{
    return(
        <AboutContainer>
            <MyImg>
                
            </MyImg>
            <AboutContent color={color}>
                <AboutText>i'm a Designer & Developer from Brazil, please feel free to contact if u want to know more about me, my past projects or even to discuss a future one.</AboutText>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;