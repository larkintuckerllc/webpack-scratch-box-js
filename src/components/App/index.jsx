import React, { PureComponent } from 'react';
import cat from './cat.jpg';
import AppCSS from './AppCSS';
import AppCSSDynamic from './AppCSSDynamic';
import AppCSSModules from './AppCSSModules';
import AppSASS from './AppSASS';
import AppSASSModules from './AppSASSModules';
import ChartA from './ChartA';
import ChartB from './ChartB';

class App extends PureComponent {
  state = {
    route: 'hello',
  };

  handleHelloClick = () => this.setState({ route: 'hello' });

  handleChartAClick = () => this.setState({ route: 'charta' });

  handleChartBClick = () => this.setState({ route: 'chartb' });

  handleAppCSSDynamicClick = () => this.setState({ route: 'appcssdynamic' });

  render() {
    const { route } = this.state;
    let content;
    switch (route) {
      case 'appcssdynamic':
        content = <AppCSSDynamic />;
        break;
      case 'charta':
        content = <ChartA />;
        break;
      case 'chartb':
        content = <ChartB />;
        break;
      default:
        content = (
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
    }
    return (
      <div>
        <div>
          <button disabled={route === 'hello'} onClick={this.handleHelloClick} type="button">
            Hello
          </button>
          <button disabled={route === 'charta'} onClick={this.handleChartAClick} type="button">
            ChartA
          </button>
          <button disabled={route === 'chartb'} onClick={this.handleChartBClick} type="button">
            ChartB
          </button>
          <button
            disabled={route === 'appcssdynamic'}
            onClick={this.handleAppCSSDynamicClick}
            type="button"
          >
            AppCSSDynamic
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
