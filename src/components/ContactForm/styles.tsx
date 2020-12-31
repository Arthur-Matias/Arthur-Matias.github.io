import styled from 'styled-components';



interface FormInterface{
  color:string;
}
export const ContactFormContainter = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  padding-right: 5rem;
  `;

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem
`;

export const Input = styled.input<FormInterface>`
    height: 4rem;
    width: 30rem;
    border-radius: 3px;
    border: 3px solid var(--main-${props=>props.color});
    background-color: var(--gray);
    padding: 1rem;
    color: var(--white);
    font-size: 1.1rem;
`;
export const MailMessage = styled.textarea<FormInterface>`
    height: 14rem;
    width: 30rem;
    border: 3px solid var(--main-${props=>props.color});
    background-color: var(--gray);
    font-size: 1.3rem;
    padding: 1rem;
    color: var(--white);
    ::-webkit-scrollbar {
      width: 8px;
    }
  ::-webkit-scrollbar-thumb {
      background-color: var(--main-${props=>props.color});
      border-radius: .5rem;
    }
  ::-webkit-scrollbar-track {
      background-color: var(--gray);
      border-radius: .5rem;
    }
`;
export const Button = styled.button<FormInterface>`
    height: 3.5rem;
    width: 12.5rem;
    border-radius: 3px;
    border: 3px solid var(--main-${props=>props.color});
    color: var(--main-${props=>props.color});
    font-weight: bold;
    background-color: transparent;
    font-size: 2rem;
    &:hover{
      color: var(--gray);
      background-color: var(--main-${props=>props.color});
    }
`;