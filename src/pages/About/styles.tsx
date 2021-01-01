import styled from 'styled-components';


export const AboutContainer = styled.div`
    position: relative;
    background-color: var(--gray);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1200px){
        flex-direction: column;
        position: static;
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 60%;
    margin-right: 20rem;
    margin-bottom: 8rem;

    @media(max-width: 1600px){
        width: 50vw;
    }
    @media(max-width: 1200px){
        width: 60vw;
        position: static;
        margin: 0;
    }
`;

export const AboutContent = styled.div`
    width: 50vw;
    height: 60vh;
    background-color: var(--dark-gray);
    margin-left: 17rem;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-top: 6.5rem;

    @media(max-width: 1200px){
        width: 100%;
        margin: 0;
        padding 2rem 6rem;
        width: auto;
        height: auto;
    }
    
`;

export const AboutText = styled.p`
    max-width: 20vw;
    color: var(--white);
    font-size: 1.7rem;
    @media(max-width: 1600px){
        max-width: 25vw;
    }
`;
