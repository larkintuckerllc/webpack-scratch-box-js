import React from 'react';
import cat from './cat.jpg';
import AppCSS from './AppCSS';
import AppCSSModules from './AppCSSModules';
import AppSASS from './AppSASS';
import AppSASSModules from './AppSASSModules';

const App = () => (
  <div>
    <div>Hello World</div>
    <div>
      <img src={cat} alt="cat" />
    </div>
    <AppCSS />
    <AppCSSModules />
    <AppSASS />
    <AppSASSModules />
  </div>
);

export default App;
