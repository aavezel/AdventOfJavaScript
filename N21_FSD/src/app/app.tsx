import React from 'react';
import { Provider } from 'react-redux';

import { MainPage } from '@/pages';

import store from './store';
import './app.css';

export function Application() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default Application;
