//es6修饰器练习
@test3
class Mytext {
 @noenumerable bar="bar值"
 @noenumerable test(){
     console.log("hello test");
     
 }
}
// 给类的实例添加属性
function test3(target) {
  target.prototype.foo="foo值"
}
//设置不允许遍历
function noenumerable(target, name,descriptor) {
    descriptor.enumerable=false
}

const c1=new Mytext()



for (const key in c1) {
   console.log(key,c1[key]);//发现只有foo,foo值, 无法遍历bar,bar值
   
}
console.log(c1.test());//没有遍历,但存在,调用时可以正常打印


