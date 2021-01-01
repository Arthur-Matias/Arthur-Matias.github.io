import styled from 'styled-components';

interface ButtonInterface{
    color: string;
}

export const ButtonContainer = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    margin: 0 .5rem;
    @media(max-width: 1200px) {
        height: 3.5rem;
        width: 3.5rem;
      }
`;

export const ButtonColor = styled.div<ButtonInterface>`
    background-color: var(--main-${props => props.color});
    height: 100%;
    width: 100%;

    border-radius: 50%;

    transition: ease .2s;

    &:hover{
        background-color: var(--hover-${props => props.color});
    }
`;