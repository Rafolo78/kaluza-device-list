import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export const MenuColumn = styled.div`
  flex: 0 0 230px;
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
