import {ContactFormContainter, InputWrapper, Input, MailMessage, Button} from './styles'

interface HomeInterface{
    color: string;
}

const ContactForm:React.FC<HomeInterface>  = ({
    color
})=>{

    return(
        <>
            <ContactFormContainter id="mailForm" action="https://formspree.io/f/mvovzoka" method="POST">
                <InputWrapper>
                    <Input name="formInput" color={color} placeholder='Email...' type='email' required ></Input>
                </InputWrapper>
                <InputWrapper>
                    <Input name="formInput" color={color} placeholder='Subject matter...' type='text' required ></Input>
                </InputWrapper>
                <InputWrapper>
                    <MailMessage name="formInput" color={color} placeholder='Message...'></MailMessage>
                </InputWrapper>
                <Button type='submit' color={color}>Send</Button>
            </ContactFormContainter>
        </>
    )
}

export default ContactForm;