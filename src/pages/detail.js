/**
 * Created by v_liukai01 on 2019/4/19.
 */
import React from 'react'
// import '../css/index.css'

class index extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '首页63qwe66'
        }
    }
    changeTohome() {
        this.props.history.push({pathname: `/`})
    }
    render() {
        return (
            <div className='getName' onClick={this.changeTohome.bind(this)}>
                {this.state.name}
            </div>
        )
    }
}
export default index

