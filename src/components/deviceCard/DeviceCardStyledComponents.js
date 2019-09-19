import styled from 'styled-components';

export const DeviceCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: ${props => props.theme.smallMargin};
  padding: ${props => props.theme.largePadding};
`;

export const DeviceTitle = styled.h3`
  margin: 0 0 ${props => props.theme.largeMargin} 0;
  span {
    font-weight: normal;
    font-size: 0.8em;
  }
`;

export const Charge = styled.div`
  margin-right: ${props => props.theme.largeMargin};
`;

export const Indicators = styled.div`
  display: flex;
  position: absolute;
  right: ${props => props.theme.largePadding};
  bottom: ${props => props.theme.largePadding};
`;
export const OnlineStatus = styled.div`
  color: ${props => props.isOnline ? props.theme.onLineColor : props.theme.offLineColor}
`;
