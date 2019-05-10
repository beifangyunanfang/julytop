import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Routers from './routers'
import { AppContainer } from 'react-hot-loader';

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routers />
      </HashRouter>
    )
  }
}

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

// 页面的加载 热更新


