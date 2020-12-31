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
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 50vw;
    margin-right: 25rem;
    margin-bottom: 8rem;

    @media(max-width: 1600px){
        width: 50vw;
    }
    @media(max-width: 1000px){
        width: 60vw;
        position: relative;
        margin: 0;
    }
`;

export const AboutContent = styled.div`
    height: 30vh;
    width: 40vw;
    background-color: var(--dark-gray);
    margin-left: 17rem;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-top: 6.5rem;
    @media(max-width: 1200px){
        height: auto;
        width: auto;
        font-size: 1.3rem;
        margin:0;
        padding: 1rem 2rem;
        flex-direction: column;
        justify-content: center;
    }
`;

export const AboutText = styled.p`
    max-width: 20vw;
    color: var(--white);
    font-size: 1.7rem;
    @media(max-width: 1600px){
        max-width: 25vw;
    }

    @media(max-width: 1000px){
        font-size: 1.5rem;
        max-width: 30vw;
    }
`;
