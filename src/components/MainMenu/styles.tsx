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
`;

export const MenuSection = styled.div<MainMenuInterface>`
    display: flex;
    flex-direction: column;
    min-width: 7rem;

    >svg{
        margin-right: 18rem;
        height: 8rem;
        fill: var(--main-${(props => props.color)});
        cursor: pointer;
    }
    >a{
        text-decoration: none;
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
        }
        
        &:hover, .active{
            color: var(--main-${(props => props.color)});
        }
    }
    >div p{
        letter-spacing: .15em;
        font-size: .8rem;
      }
    
      `;