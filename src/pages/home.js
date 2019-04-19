/**
 * Created by v_liukai01 on 2019/4/19.
 */
import React from 'react'
// import '../css/home.css'

class home extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '这是首页'
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
            </div>
        )
    }
}
export default home

