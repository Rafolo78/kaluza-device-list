import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`

  ${styledNormalize}

  body {
    height: 100vh;
    background: ${props => props.theme.mainBgColor};
  }

  * {
    box-sizing: border-box;
  }
`;
