const _products = [
    {"id": 1, "title": "mac", "price": 3000, "inventory": 2},
    {"id": 2, "title": "ipad", "price": 2000, "inventory": 10},
    {"id": 3, "title": "iphone", "price": 1000, "inventory": 5}
  ]

  //导出一个异步方法
  export const getAllProducts=callback=>{
    setTimeout(function() {
      // console.log(_products);
      
      callback(_products)
    }, 100);
  }