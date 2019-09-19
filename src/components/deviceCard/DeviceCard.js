import React from 'react';
import PropTypes from 'prop-types';
import { DeviceCardWrapper, DeviceTitle, Indicators, OnlineStatus, Charge } from './DeviceCardStyledComponents';
import moment from 'moment';

//NOTE: the name of the device should come from the backend
const mapNameToType = {
  SMART_CHARGER: "Smart Charger",
  V2G_CHARGER: "V2G Charger"
};

const DeviceCard = (props) => {
  const {type, id, isOnline, lastPacketTime, stateOfCharge} = props;
  const formatLastPacketTime = moment(lastPacketTime).format();
  const onlineText= isOnline ? "Online" : "Offline";
  const chargeNode = stateOfCharge ?
    <Charge>Charged: {stateOfCharge}%</Charge> :
    null;
  return (
    <DeviceCardWrapper>
      <DeviceTitle>
        {mapNameToType[type]} <span>({id})</span>
      </DeviceTitle>

      <div>Last Packet: {formatLastPacketTime}</div>

      <Indicators>
        {chargeNode}
        <OnlineStatus isOnline={isOnline}>
          {onlineText}
        </OnlineStatus>
      </Indicators>
    </DeviceCardWrapper>
  );
}

DeviceCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lastPacketTime: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  stateOfCharge: PropTypes.number
};


export default DeviceCard;
