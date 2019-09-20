import styled from 'styled-components';

export const Menu = styled.ul`
  padding: 0;
  width: 100%;
`;

export const MenuEntry = styled.li`
  cursor: pointer;
  color: ${props => props.theme.lightColorText};
  text-align: center;
  padding: ${props => props.theme.largePadding } 0;
  list-style: none;
  border-top: 1px solid rgba(255,255,255, 0.15);
  &:last-of-type {
    border-bottom: 1px solid rgba(255,255,255, 0.15);
  }
  transition: all .3s;
  &:hover {
    background-color: ${props => props.theme.menuHoverColor};
    color: ${props => props.theme.mainBgColor};
  }
`;
