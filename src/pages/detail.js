/**
 * Created by v_liukai01 on 2019/4/19.
 */
import React from 'react'
import '../css/detail.css'

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
                <p className="large-size">这是检验css的作用</p>
            </div>
        )
    }
}
export default index

