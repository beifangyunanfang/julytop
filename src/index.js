import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    render(){
        return(
            <div>
                这是啦啦啦啦
            </div>
        )
    }
}

export default hot(App)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


// // Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept()
// }




