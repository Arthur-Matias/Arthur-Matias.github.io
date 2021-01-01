import styled from 'styled-components';


interface HomeLayooutnterface{
  color:string;
}

export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--gray);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1200px){
    flex-direction: column;
  }
`;

export const ContactContent = styled.div`
    max-width: 35rem;
    margin-right: 15rem;
    padding-left: 5rem;
    @media(max-width: 1200px){
      padding: 0;
      margin: 0;
      padding-bottom: 2rem;
    }
`;

export const ContactWays = styled.div<HomeLayooutnterface>`

>u{
  font-family: var(--code-font);
  font-size: 1.1rem;
  font-weight: regular;
  color: var(--main-${props => props.color});
}

>h2{
  font-size: 2.4rem;
  padding-top: .5rem;
  margin-bottom: 4rem;
  line-height: 2.8rem;
}

`;

export const ContactWayWrapper = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const ContactWayTitle = styled.p`
  text-transform: capitalize;
`;
export const ContactWayData = styled.h2`
  font-size: 1.4rem;
`;