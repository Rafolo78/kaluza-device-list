import styled, {css} from 'styled-components';
import smartChargerIcon from '../../static/images/domestic-battery-storage.png';
import v2gChargerIcon from '../../static/images/nissan-leaf.png';
import battery from '../../static/images/battery.svg';

const getDeviceIcon = (deviceType) => {
  switch (deviceType) {
    case "SMART_CHARGER":
      return smartChargerIcon;
    case "V2G_CHARGER":
      return v2gChargerIcon;
    default:
      return null;
  }
}

export const DeviceCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: ${props => props.theme.largeMargin};
  padding: ${props => `${props.theme.largePadding} ${props.theme.largePadding} ${props.theme.largePadding} 120px`};
  border-radius: 5px;


  &:after {
    content: "";
    position: absolute;
    left: 20px;
    top: 15px;
    width: ${props => props.theme.deviceIconSize};
    height: ${props => props.theme.deviceIconSize};
    border-radius: 50%;
    background: url(${props => getDeviceIcon(props.type)}) no-repeat #eee;
    background-size: contain;

    ${props => !props.isOnline && css`
      filter: grayscale(100%);

    `}
  }
`;

export const DeviceTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.titleColor};
  text-transform: uppercase;
  font-weight: normal;
`;

export const DeviceId = styled.div`
  font-weight: normal;
  font-size: 0.75em;
  color: ${props => props.theme.textColor};
  margin-bottom: ${props => props.theme.mediumMargin};
`;

export const LastPacket = styled.div`
  font-size: 0.85em;
  margin-right: auto;
  span {
    font-weight: bold;
  }
`;
export const Charge = styled.div`
  position: relative;
  margin-right: ${props => props.theme.largeMargin};
  border-radius: 2em;
  padding: 5px 15px 5px 35px;
  background-color: ${props => props.theme.chargeBgColor};
  text-align:center;
  font-size: 0.8em;
  font-weight: bold;

  color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 13px;
    width: 18px;
    height: 25px;
    background: url(${battery}) no-repeat;
    background-size: contain;
  }

`;

export const Indicators = styled.div`
  display: flex;
  align-items: center;
`;
export const OnlineStatus = styled.div`
  text-transform: uppercase;
  font-size: 0.75em;
  color: ${props => props.isOnline ? props.theme.onLineColor : props.theme.offLineColor}

`;
