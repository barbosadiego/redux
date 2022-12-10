import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/cart/Cart';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export default App;
