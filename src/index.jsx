import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';
import { cube } from './math';

const mountNode = document.getElementById('app');
render(<App />, mountNode);
window.console.log(cube(2));
