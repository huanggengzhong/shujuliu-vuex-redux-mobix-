const _products = [
    {"id": 1, "title": "mac", "price": 3000, "inventory": 2},
    {"id": 2, "title": "ipad", "price": 2000, "inventory": 10},
    {"id": 3, "title": "iphone", "price": 1000, "inventory": 5}
  ]

  //导出一个获取数据的异步方法
  export const getAllProducts=callback=>{
    setTimeout(function() {
      callback(_products)
    }, 100);
  }
//模拟一个结算购物车的异步方法,模拟后台可能成功,也可能失败

export const buyProducts=(products,callback,error)=>{
setTimeout(() => {
  let suiji= Math.random()
  console.log(suiji);
  suiji>0.5?callback():error()
}, 100);
}
