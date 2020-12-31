import {ContactContainer, ContactContent, ContactWays, ContactWayWrapper, ContactWayTitle, ContactWayData} from './styles'

import ContactForm from '../ContactForm';

interface HomeInterface{
    color: string;
}

const ContactLayout: React.FC<HomeInterface>  = ({
    color
})=>{

    function handleClick(path:string) {
        window.location.href = path;
    }

    return(
        <ContactContainer>
            <ContactContent>
                <ContactWays color={color}>
                <u>Get in Touch</u>
                <h2>Let’s make something amazing toghether</h2>
                    <ContactWayWrapper onClick={()=>handleClick(`tel:+55 (41) 99871-4328`)}>
                        <ContactWayTitle>
                            Whatsapp me
                        </ContactWayTitle>
                        <ContactWayData>
                            +55 (41) 99871-4328
                        </ContactWayData>
                    </ContactWayWrapper>
                    <ContactWayWrapper onClick={()=>handleClick('https://www.behance.net/arthurmm18')}>
                        <ContactWayTitle>
                            Find me on Behance
                        </ContactWayTitle>
                        <ContactWayData>
                            behance.net/arthurmm18
                        </ContactWayData>
                    </ContactWayWrapper>
                    <ContactWayWrapper onClick={()=>handleClick('https://www.linkedin.com/in/arthur-matias')}>
                        <ContactWayTitle>
                            Find me on Linkedin
                        </ContactWayTitle>
                        <ContactWayData>
                            linkedin.com/in/arthur-matias
                        </ContactWayData>
                    </ContactWayWrapper>
                    <ContactWayWrapper onClick={()=>handleClick('https://github.com/Arthur-Matias')}>
                        <ContactWayTitle>
                        Find me on Github
                        </ContactWayTitle>
                        <ContactWayData>
                            github.com/Arthur-Matias
                        </ContactWayData>
                    </ContactWayWrapper>
                </ContactWays>
            </ContactContent>
            <ContactForm color={color} />
        </ContactContainer>
    )
}

export default ContactLayout;