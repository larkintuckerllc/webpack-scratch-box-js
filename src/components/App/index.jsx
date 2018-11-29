import React from 'react';
import cat from './cat.jpg';
import AppCSS from './AppCSS';
import AppCSSModules from './AppCSSModules';

const App = () => (
  <div>
    <div>Hello World</div>
    <div>
      <img src={cat} alt="cat" />
    </div>
    <AppCSS />
    <AppCSSModules />
  </div>
);

export default App;
