import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/index';
import Home from './pages/home';
import { AppContainer } from 'react-hot-loader';




if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <AppContainer>
                <Router />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}


ReactDOM.render(
    <AppContainer>
        <Router />
    </AppContainer>,
    document.getElementById('root')
)


