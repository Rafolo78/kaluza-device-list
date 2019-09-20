import React from 'react';
import PropTypes from 'prop-types';
import {
  DeviceCardWrapper,
  DeviceTitle,
  DeviceId,
  Indicators,
  OnlineStatus,
  LastPacket,
  Charge
} from './DeviceCardStyledComponents';
import moment from 'moment';
import config from "../../config";

const DeviceCard = (props) => {
  const {name, type, id, isOnline, lastPacketTime, stateOfCharge} = props;
  const formatLastPacketTime = moment(lastPacketTime).format(config.dateFormat);
  const onlineText= isOnline ? "Online" : "Offline";
  const chargeNode = (stateOfCharge && isOnline) ?
    <Charge>{stateOfCharge}%</Charge> :
    null;
  return (
    <DeviceCardWrapper type={type} isOnline={isOnline}>
      <DeviceTitle>{name}</DeviceTitle>
      <DeviceId>({id})</DeviceId>
      <Indicators>
        <LastPacket><span>Last Packet</span>: {formatLastPacketTime}</LastPacket>
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lastPacketTime: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  stateOfCharge: PropTypes.number
};


export default DeviceCard;
