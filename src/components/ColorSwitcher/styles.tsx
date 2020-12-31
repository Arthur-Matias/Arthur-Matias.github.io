import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ColorsContainer = styled.div`
    position: absolute;
    display: flex;
    bottom: 6vh;
    right: 6vw;
    z-index: 10;
`;
