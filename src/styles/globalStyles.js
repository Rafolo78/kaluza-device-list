import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`

  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');


  body {
    font-family: ${props => props.theme.fontFamilyText};
    font-size: ${props => props.theme.fontSize};
    line-height: ${props => props.theme.lineHeight};
    height: 100vh;
    background: ${props => props.theme.mainBgColor};
  }

  * {
    box-sizing: border-box;
  }
`;
