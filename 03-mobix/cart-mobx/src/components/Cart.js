import React ,{Component} from 'react';
import {observer,inject} from 'mobx-react'
@observer
@inject('cartStore')
class Cart extends Component{
    render (){
        const {cartStore} =this.props;
        return (
            <div>
                <h2>购物车组件</h2>
                <p>得到store/cart.js里的数据:{cartStore.foo}</p>
            </div>
        )
    }
}
export default Cart;