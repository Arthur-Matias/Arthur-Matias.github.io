import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    *, button, input{
        border: 0;
        outline: 0;
        transition: all .2ms;
    }

    html, body, #root{
        heigth: 100%;
    }

    html{
        font-family: var(--title-font);
    }

    h1,h2,h3,h4,h5,h6{
        font-family: var(--title-font);
    }

    a:-webkit-any-link {
        color: transparent;
        cursor: pointer;
        text-decoration: none;
    }

    :root {
        --main-blue: rgba( 39, 165, 239, 1 );
        --hover-blue: rgba( 39, 165, 239, .8 );
        
        --main-green: rgba( 100, 244, 172, 1 );
        --hover-green: rgba( 100, 244, 172, .8 );
        
        --main-orange: rgba( 255,94,52, 1 );
        --hover-orange: rgba( 255,94,52, .8 );

        --light-gray: #36383D;
        --dark-gray: #2A2B2F;
        --gray: #2D2E32;

        --white: #FFF;

        --title-font: 'Sarala', sans-serif;
        --text-font: 'Sarala', sans-serif;
        --code-font: 'Coda', cursive;
      }

      .ColorContainer{
          display: flex;
          position: absolute;
      }
`;