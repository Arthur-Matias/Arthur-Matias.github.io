import styled from 'styled-components';


interface HomeLayooutnterface{
  color:string;
}


export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: var(--gray);
`;

export const BGImage = styled.div`
    flex: 1;
    height: auto;
    width: 35vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media(max-width: 1200px) {
        width: 50vw;
      }
    @media(max-width: 860px) {
        width: 60vw;
      }
`;

export const HomeContent = styled.div<HomeLayooutnterface>`
    position: absolute;

    >p{
        color: var(--main-${props => props.color});
        text-decoration: underline;
        font-family: var(--code-font) @important;
        font-size: 48px;
        letter-spacing: .3rem;
        font-weight: regular;
    }

    >h2{
        font-weight: bold;
        color: var(--white);
        font-size: 96px;

        @media(max-width: 1000px) {
            font-size: 86px;
          }
        @media(max-width: 860px) {
            
          }
    }

    
    
`;