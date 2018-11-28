import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import 'whatwg-fetch';
import App from './components/App';

const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
render(<AppWithHot />, mountNode);
