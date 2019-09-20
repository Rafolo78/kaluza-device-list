import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { ThemeProvider } from 'styled-components';
import DeviceListPage from './pages/DeviceListPage';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeKaluza }  from './styles/theme';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeKaluza}>
        <div>
          <GlobalStyle />
          <DeviceListPage />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
