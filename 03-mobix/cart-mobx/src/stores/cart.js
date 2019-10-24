import { observable, action, computed } from 'mobx'

import * as shop from './../api/shop'
//cart需要的数据id和库存{id:1,quantity:2}
class CartStore {
  @observable items = []
  @observable foo = 'cart'
  @observable checkoutStatus = null
  @action.bound addCart(value) {
    // console.log(value.id) //得到商品信息的Proxy对象
    /*   
    判断cart购物车数据中是否已经有该商品,
    如果有,则让购物车中的商品数量加1;
    如果没有,则添加新的商品到购物车中.
    */
    const prod = this.items.find(cartItem => {
      return cartItem.id == value.id //返回有相同的商品对象{}
    })

    if (prod) {
      //有相同商品,则加数量
      prod.quantity++
    } else {
      //没有有相同商品,手动增加一个商品
      this.items.push({
        id: value.id,
        quantity: 1
      })
    }
    // console.log(this.items);//成功
    //添加完购车以后,调用products.js库的减少方法,并把当前商品传过去
    this.rootStore.productsStore.decrementInventory(value)
  }
  @computed get cartProducts() {
    const { productsStore } = this.rootStore
    return this.items.map(cartItem => {
      const prod = productsStore.all.find(prodItem => {
        return prodItem.id == cartItem.id
      })
      // 返回购物车的数据
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: cartItem.quantity //注意这是购物车的库存
      }
    })
  }
  @computed get totalPrice() {
    // cartProducts里有当前购物车商品数据
    return this.cartProducts.reduce((total, prod) => {
      //total是上一次的和
      // prod是当前数组元素
      return total + prod.price * prod.quantity //当前循环总价加上次循环价,得到的就是最新总价,返回一个新的值
    }, 0)
  }
  @action.bound chekout(products) {
    // console.log(products);//打印传递过来的数据
    // 1.备份购物车数据;
    const savedProducts = [...products] //不用解构直接赋值也是一样的
    // const savedProducts=products//不用解构直接赋值也是一样的
    // console.log(savedProducts);

    // 2.清空结算状态;
    this.setCheckoutStatus(null) //直接传递空
    // 3.清空购物车;(清空的作用是防止可以二次点击)
    this.setItems([]) //直接传递空数组进去
    // 4.发起结算请求:
    // 如果成功:将结算状态变为成功;
    // 如果失败,将结算状态变为失败,并还原购物车数据.
    shop.buyProducts(
      products,
      () => {
        this.setCheckoutStatus('结算成功')
      },
      () => {
        this.setCheckoutStatus('结算失败')
        this.setItems(savedProducts)
      }
    )
  }
  @action.bound setCheckoutStatus(status) {
    this.checkoutStatus = status
  }
  @action.bound setItems(items) {
    this.items = items
  }
  constructor(rootStore) {
    this.rootStore = rootStore
  }
}
export default CartStore
