import {observable,action} from 'mobx';
import * as shop from './../api/shop'



class ProductsStore{
@observable all=[];
@observable foo='products'

constructor(rootStore){
    this.rootStore=rootStore
}

@action.bound getAllProducts(){
    shop.getAllProducts(products=>{
        this.setAll(products)
    })
}
@action.bound setAll(products){
    this.all=products//将all赋值
}
//增加一个减少库存的方法
@action.bound decrementInventory(product){
    //在all里找到当前的商品
    const prod=this.all.find((item=>{
       return item.id==product.id
    }))
    prod.inventory--

}

}
export default ProductsStore;