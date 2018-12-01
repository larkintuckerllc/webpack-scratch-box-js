import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import 'whatwg-fetch';
import App from './components/App';
import { cube } from './math';

const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
const AppUsed = process.NODE_ENV === 'production' ? <App /> : <AppWithHot />;
render(AppUsed, mountNode);
window.console.log(cube(2));
