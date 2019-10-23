import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'

import { observable, action,autorun } from 'mobx';

import {observer} from 'mobx-react'

// import './test.js'

class Store {
  @observable count = 0 //把普通数据转为可观察的数据
  foo='bar'//普通数据,没有加修饰器
  @action.bound increment() {
    this.count++
  }
}
const store=new Store()

autorun(()=>{//默认会执行一次,每次状态改变也会再执行一次
  // console.log(store.count);
  console.log(store.foo);
   
})
// store.count=20
store.foo="newbar"//没有添加observable,默认只执行autorun,状态改变时没有重新再执行.

@observer
class App extends React.Component{
    render(){
        // console.log(this.props);
        
        const {store}=this.props
        return (
            <div>
                <h1>App Component</h1>
                <p>{store.count}</p>
                <p>

                <button onClick={store.increment}>增加</button>
                </p>
            </div>
        )
    }
}
ReactDOM.render(<App store={new Store()} />, document.getElementById('root'))

serviceWorker.unregister()
