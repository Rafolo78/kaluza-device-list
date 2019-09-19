import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchDevices } from '../state/ducks/devices';
import DeviceList from '../components/deviceList/DeviceList';
import ConnectionFilter from '../components/connectionFilter/ConnectionFilter';
import { Layout, MenuColumn, MainColumn, TopBar, Content } from './DeviceListPageStyledComponents';

class DeviceListPage extends React.Component {
  componentDidMount() {
    this.props.fetchDevices();
  }

  render() {
    return (
        <Layout>
          <MenuColumn>
            Columna
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
