import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/index';
import { AppContainer } from 'react-hot-loader';


const App=()=>{
    return (
        <div>
            <p>Hello React And Webpack</p>
            <p>Hello</p>
        </div>
    )
}

// export default App;

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


