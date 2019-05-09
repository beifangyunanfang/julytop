import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
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

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

// 页面的加载 热更新


