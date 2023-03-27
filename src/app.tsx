import { Provider } from 'mobx-react';
import React from 'react';
import 'taro-ui/dist/style/index.scss';
import './app.scss';
import Store from './global/store';

const store = { Store };

const App: React.FC = (props: any) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};

export default App;
