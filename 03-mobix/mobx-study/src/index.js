import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import { observable, action, autorun, computed,configure,runInAction,when, reaction} from 'mobx'
import { observer } from 'mobx-react'
// import './test.js'
configure({
  enforceActions:'observed'
})
class Store {
  @observable count = 0 //把普通数据转为可观察的数据
  //  foo = 'bar' //普通数据,没有加修饰器
  @observable foo = 'bar' //加修饰器
  @action.bound increment() {
    this.count++
  }
  @observable price = 10
  // @observable count = 0
  @computed get computedTotalPrice() {
    // console.log(123);//同一数据,多次调用也只执行一次
    return this.price * this.count
  }
  @action.bound change(value=100) {
    // console.log(this);//没有添加bound,这里是undefined
    // console.log(this);//加了就是指向Store对象
    // this.foo = 'foo'
    // this.count = 1
    this.count = value
  }
  @action.bound changeFoo(){
    this.foo='newfoo'
  }
  @action.bound asyncChange(){
    //定义异步
    setTimeout(() => {
      // this.count=100
      // this.changeCount()
      // 方法二:直接调用action,参数一是自定义名,参数二是函数.它返回的是一个函数,再自调用一下
      // action('changCount',()=>{
      //   this.count=100
      // })()

      //方法三:runInAction
      // runInAction(()=>{
      //   this.count=100
      // }) 

    }, 2000);
  }
  //方法一:定义一个action函数
  // @action.bound changeCount(){
  //   this.count=100
  // }
}
const store = new Store()
//when()
//当count大于100的时候只执行一次自定义逻辑
when(()=>{
  return store.count>100
},()=>{
  console.log("when=>",store.count);
  
})
//reaction
reaction(()=>{
  return store.count
},(data,reaction)=>{
  console.log("reaction",data);
  //加上reaction.dispose()//会停止执行
  reaction.dispose()
})

store.change(200)
store.change(300)//reaction第二次会继续执行




//异步调用
// store.changeFoo()
// store.asyncChange()//重新定义一个action函数后,可以用调用异步操作


//使用runInAciton修改类成员的值
// runInAction(()=>{
//   store.foo="newBar"
//   store.count=4
// })

// autorun(() => {
//   console.log('autorun:', store.count, store.foo)
// })


// const change=store.change
// change();


// store.count=3//有了configure限制只能action修改,无法直接修改了

// autorun(() => {
//   //默认会执行一次,每次状态改变也会再执行一次
//   // console.log(store.count);
//   console.log(store.foo)
// })
// // store.count=20
// store.foo = 'newbar' //没有添加observable,默认只执行autorun,状态改变时没有重新再执行.

@observer
class App extends React.Component {
  render() {
    // console.log(this.props);

    const { store } = this.props
    return (
      <div>
        <h1>App Component</h1>
        <p>{store.count}</p>
        <p>
          <button onClick={store.increment}>增加</button>
        </p>
        <p>总数:{store.computedTotalPrice}</p>
        <p>总数:{store.computedTotalPrice}</p>
        <p>总数:{store.computedTotalPrice}</p>
        <p>总数:{store.computedTotalPrice}</p>
        {/* <p>总数:{store.price * store.count}</p>
        <p>总数:{store.price * store.count}</p>
        <p>总数:{store.price * store.count}</p>
        <p>总数:{store.price * store.count}</p> */}
      </div>
    )
  }
}
ReactDOM.render(<App store={new Store()} />, document.getElementById('root'))

serviceWorker.unregister()
