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

}
export default ProductsStore;