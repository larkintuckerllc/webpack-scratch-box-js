import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';

const mountNode = document.getElementById('app');
render(<App />, mountNode);
