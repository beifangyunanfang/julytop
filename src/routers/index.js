/**
 * Created by v_liukai01 on 2019/4/19.
 */

import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Route, Switch, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import store from '../stores'
import Login from './Login'
import Layouts from './Layouts'


import { Provider } from 'mobx-react'
import Home from '../pages/home';
import Detail from '../pages/detail';
import ReactHot from '../pages/react';

// const Routes = () => (
//     <Router>
//         <div>
//             <Route exact path="/" component={Home}/>
//             <Route path="/about" component={Detail}/>
//         </div>
//     </Router>
// )
//
// export default Routes;

@withRouter
class Routers extends Component {
  constructor(props) {
    super(props)
    this.pathname = props.location.pathname
  }

  checkJsessionID = () => {
    if (this.props.location.pathname != '/login') {
      if (!Cookies.get('JSESSIONID')) {
        this.props.history.replace('/login')
      }
    } else {
      if (Cookies.get('JSESSIONID')) {
        this.props.history.replace('/home')
      }
    }
  }

  componentWillMount() {
    if (this.pathname == '/') {
      if (Cookies.get('JSESSIONID')) {
        this.props.history.replace('/home')
      } else {
        this.props.history.replace('/login')
      }
    } else {
      this.checkJsessionID()
    }
  }

  componentWillReceiveProps() {
    this.checkJsessionID()
  }

  render() {
    return (
      <Provider { ...store }>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Layouts} />
        </Switch>
      </Provider>
    )
  }
}

export default Routers


