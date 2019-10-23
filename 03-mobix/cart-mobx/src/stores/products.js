import {observable} from 'mobx';

class ProductsStore{
@observable all=[];
@observable foo='products'

constructor(rootStore){
    this.rootStore=rootStore
}
}
export default ProductsStore;