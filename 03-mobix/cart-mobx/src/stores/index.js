
import ProductsStore from './products'
import CartStore from './cart'
class RootStore{
    constructor(){
        this.productsStore=new ProductsStore(this)
        this.cartStore=new CartStore(this)//加this是实现父子仓库相互通信
    }
}

export default RootStore;