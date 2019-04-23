/**
 * Created by v_liukai01 on 2019/4/19.
 */
import React from 'react'
// import '../css/home.css'

class home extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '这是首页243243234'
        }
    }
    handleClick(){
        this.props.history.push({pathname: `/detail`})
    }
    render() {
        return (
            <div className='getName'>
                {this.state.name}
                <button onClick={()=>this.handleClick()}>页面跳转</button>
                <button onClick={()=>this.props.history.push({pathname:'/react'})}>调整react-增加插件react-hot-loader</button>
            </div>
        )
    }
}
export default home

