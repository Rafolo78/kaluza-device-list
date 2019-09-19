import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: ${props => props.theme.largePadding};

  label {
    color: ${props => props.theme.lightColorText};
    margin-right: ${props => props.theme.largeMargin};
  }
`;
