import {observable} from 'mobx';

class CartStore{
@observable items=[];
@observable foo='cart'

constructor(rootStore){
this.rootStore=rootStore;
}
}
export default CartStore;