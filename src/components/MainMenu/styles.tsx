import styled from 'styled-components';

interface MainMenuInterface {
    color: string;
}

export const MenuContainer = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 8rem;
    background-color: var(--gray);
    display: flex;
    justify-content: space-around;
    font-family: var(--code-font);
    @media(max-width: 1200px) {
        justify-content: center;
        
      }
`;

export const MenuSection = styled.div<MainMenuInterface>`
    display: flex;
    flex-direction: column;
    

    >svg{
        margin-right: 18rem;
        height: 8rem;
        fill: var(--main-${(props => props.color)});
        cursor: pointer;
        @media(max-width: 1200px) {
            margin-right: 10rem;
            height: 4rem;            
          }
    }
    >a{
        text-decoration: none;
    }

    @media(max-width: 1200px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    @media(min-width: 1200px) {
        min-width: 7rem;      
    }
`;

export const MenuLogo = styled.img`
    height: 4.5rem;
    cursor: pointer;
`;

export const MenuItem = styled.div<MainMenuInterface>`
    color: var(--white);
    font-family: var(--code-font) @important;
    text-transform: capitalize;
    transition: all .2s;
    >div{
        
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        
        &:before{
            content: '<';
        }
        &:after{
            content: '>';
            @media(max-width: 1200px) {
                margin-right: 1rem;
            } 
        }
        &:hover{
            color: var(--main-${(props => props.color)});
        }
        &.active{
            color: var(--main-${(props => props.color)});
        }
    }
    >div p{
        letter-spacing: .15em;
        font-size: .8rem;
        @media(max-width: 1200px) {
            font-size: 1.3rem;
        } 
    }
      `;