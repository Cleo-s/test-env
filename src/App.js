import React from 'react';
import { Provider } from 'react-redux';
import Counter from './store/counter/index';
import store from './store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;   

