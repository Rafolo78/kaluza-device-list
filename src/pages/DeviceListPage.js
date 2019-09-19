import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchDevices } from '../state/ducks/devices';
import DeviceList from '../components/deviceList/DeviceList';
import DeviceMenu from '../components/deviceMenu/DeviceMenu';
import ConnectionFilter from '../components/connectionFilter/ConnectionFilter';
import { Layout, MenuColumn, MainColumn, TopBar, Content, MainLogo } from './DeviceListPageStyledComponents';

class DeviceListPage extends React.Component {
  componentDidMount() {
    this.props.fetchDevices();
  }

  render() {
    return (
        <Layout>
          <MenuColumn>
            <div>
              <MainLogo />
              <DeviceMenu />
            </div>
          </MenuColumn>
          <MainColumn>
            <TopBar>
              <ConnectionFilter />
            </TopBar>
            <Content>
              <DeviceList />
            </Content>
          </MainColumn>
        </Layout>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDevices
}, dispatch);

export default connect(null, mapDispatchToProps)(DeviceListPage);
