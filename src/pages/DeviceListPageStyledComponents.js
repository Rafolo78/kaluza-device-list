import styled from 'styled-components';
import kaluzalogo from '../static/images/logo-kaluza.png';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainLogo = styled.div`
  background: url(${kaluzalogo}) no-repeat;
  background-size: contain;
  height: 50px;
  width: 65%;
  margin: 30px 0 10px;

`;

export const MenuColumn = styled.div`
  flex: 0 0 230px;
  z-index: 2000;

  & > div {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 230px;
    height: 100%;
    box-shadow: 14px 0px 16px -1px rgba(0,0,0,0.26);
  }
`;


export const MainColumn = styled.div`
  flex: 1 0;
`;

export const TopBar = styled.div`
  width: 100%;
  height: ${props => props.theme.filterBarHeight};
  position: fixed;
  z-index:100;
  background-color: ${props => props.theme.mainBgColor};
`;

export const Content = styled.div`
  height: 100%;
  padding-top: ${props => props.theme.filterBarHeight};

`;
