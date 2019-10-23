import React ,{Component} from 'react';
//使用仓库数据
import {observer,inject} from 'mobx-react';
@observer
//设置响应起来
@inject('productsStore','cartStore')
//辅助函数,作用将仓库里面的数据映射到当前组件,
//比如我们要使用store/index.js里面的this.productsStore的数据,那只需要填productsStore即可
class Products extends Component{
    render (){
        console.log(this.props);
        const {productsStore,cartStore} =this.props;
        return (
            <div>
                <h2>产品组件</h2>
                <p>得到store/products.js里的foo数据:{productsStore.foo}</p>
                <p>在产品组件里也能得到store/cart.js里的foo数据:{cartStore.foo}</p>
            </div>
        )
    }
}
export default Products;