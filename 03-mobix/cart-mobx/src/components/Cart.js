import React ,{Component} from 'react';
import {observer,inject} from 'mobx-react'
@inject('cartStore')
@observer
class Cart extends Component{
    render (){
        const {cartStore} =this.props;
        return (
            <div>
                <h2>我的购物车组件</h2>
                <p>得到store/cart.js里的数据:{cartStore.foo}</p>
                <ul>
                    {cartStore.cartProducts.map(item=>{
                       return <li key={item.id}>
                            商品名:{item.title}-单价:{item.price}美元 - 已选数量:{item.quantity}个 
                        </li>
                    })}
                </ul>
                <p>总价:{cartStore.totalPrice}美元</p>
                <p>
                    <button 
                    disabled={!cartStore.items.length}
                    onClick={()=>{
                        //在方法里将计算好的数据传递过去
                        cartStore.chekout(cartStore.cartProducts)
                    }}
                    >结算</button>
                </p>

                {cartStore.checkoutStatus && <p>结算状态:{cartStore.checkoutStatus}</p>}
                
            </div>
        )
    }
}
export default Cart;