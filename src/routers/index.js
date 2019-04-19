/**
 * Created by v_liukai01 on 2019/4/19.
 */

import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
// import {hot} from 'react-hot-loader';

import Detail from '../pages/detail'
import Home from '../pages/home'

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
)

class App extends React.Component {
    render() {
        return (
            <div>
                <Main/>
            </div>
        )
    }
}

// export default hot(App)
export default App


