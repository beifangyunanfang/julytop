import React from 'react'
class ReactHot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    add(){
        this.setState((preState)=>{
            return{
                count:preState.count+1
            }
        })
    }
    sub(){
        this.setState((preState)=>{
            return{
                count:preState.count-1
            }
        })
    }
    render() {
        return(
            <div className="container">
                <h1>{this.state.count}</h1>
                <button onClick={() => this.add()}>count+1</button>
                <br/>
                <button onClick={() => this.sub()}>count-1</button>
                <h1>Hello, React</h1>
                <p>如果不增加插件react-hot-loader,当页面热更新的时候，state里面的值不会保存。</p>
                <p>babelrc增加，webpack-base.js增加，index.js 首页增加</p>
                <p>网上还有增加热插件以后，没有效果，并没有复现</p>
            </div>
        )
    }
}

export default ReactHot;