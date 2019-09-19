import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeviceCard from '../deviceCard/DeviceCard';
import { filters } from '../../state/ducks/filters';

const getVisibleDevices = (devices, filter) => {
  switch (filter) {
    case filters.ALL:
      return devices;
    case filters.ONLINE:
      return devices.filter(
        d => d.isOnline
      );
    case filters.OFFLINE:
      return devices.filter(
        d => !d.isOnline
      );
    default:
      return devices;
  }
};

const DeviceList = (props) => {
  // TODO: Display a spinner while props.deviceListLoading = true
  // TODO: Display error message is props.errorLoading
  // TODO: Add empty state if props.deviceList.length == 0
  const visibleDevices = getVisibleDevices(props.deviceList, props.filter)
  const devicesNodes = visibleDevices.map((device, index) => <DeviceCard key={index} {...device}/>);
  return (
      <div>
        {devicesNodes}
      </div>
  );
}

DeviceList.propTypes = {
  deviceList: PropTypes.array,
  deviceListLoading: PropTypes.bool,
  errorLoading: PropTypes.object,
  filter: PropTypes.string
};


const mapStateToProps = state => {
  return {
    deviceList: state.devices.devices,
    deviceListLoading: state.devices.loading,
    errorLoading: state.devices.error,
    filter: state.filters.filter
  }
}

export default connect(mapStateToProps, null)(DeviceList);
