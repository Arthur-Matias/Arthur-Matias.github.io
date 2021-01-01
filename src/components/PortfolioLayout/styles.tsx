import styled from 'styled-components'

import {PortfolioInterface} from './index'

export const PortfolioContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    @media(max-width: 1200px) {
      flex-direction: column;
    }
`;

export const PortfolioSection = styled.div`
    background-color: var(--light-gray);
    max-width: 30rem;
    max-height: 40rem;
    margin-right: 2rem;
    padding: 5rem;
    cursor: pointer;
    border-radius: 12px;
    @media(max-width: 1200px) {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      max-width: auto;
      max-height: 45rem;
      margin: 0;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: center;
    }
    
`;

export const AwesomeLink = styled.div`
    
`;
export const IconContainer = styled.div`
    
`;

export const PortfolioContent = styled.div`
    display: flex;
    flex-wrap: nowrap;
    max-height: 30vh;
`;
export const PortfolioText = styled.p<PortfolioInterface>`
    color: var(--white);
    font-size: 1.4rem;
    overflow: auto;
    padding-right: 1rem;
    font-family: var(--code-font);
    
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
      @media(max-width: 1200px) {
        margin: 0;
        padding: 0;
      }
`;