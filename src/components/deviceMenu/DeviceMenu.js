import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getNameOfType, changeTypeDevices } from '../../state/ducks/devices';
import { Menu, MenuEntry } from './DeviceMenuStyledComponents';

// Groups array of objects by value
// https://stackoverflow.com/a/34890276
const groupBy = (xs, key) => {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const DeviceMenu = (props) => {
  const onClickType = (type) => {
    props.changeTypeDevices(type);
  }
  const groupedByType = groupBy(props.deviceList, 'type');

  const menuNodes = [];
  for (const [key, value] of Object.entries(groupedByType)) {
    menuNodes.push(
      <MenuEntry key={key} onClick={() => {onClickType(key)}}>
        {getNameOfType(key)} ({value.length})
      </MenuEntry>
    );
  }

  return (
    <Menu>
      <MenuEntry onClick={() => {onClickType(null)}}>All ({props.deviceList.length})</MenuEntry>
      {menuNodes}
    </Menu>
  );
}


DeviceMenu.propTypes = {
  deviceList: PropTypes.array.isRequired,
  changeTypeDevices: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTypeDevices
}, dispatch);


const mapStateToProps = state => {
  return {
    deviceList: state.devices.devices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceMenu);
