/**
 * Created by v_liukai01 on 2019/5/9.
 */
import React from 'react';
import Routes from './routers/index';

import {Provider} from 'mobx-react';
import stores from './stores/index';


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div >
                {/*<Provider {...stores}>*/}
                    {/*<Routes />*/}
                {/*</Provider>*/}

            </div>
        );
    }
};
export default App