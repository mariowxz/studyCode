#promise
##promise的then方法会返回一个全新promise对象
##后面的then方法就是为上一个then返回的promise注册回调
##前面then方法中回调函数的返回值会作为后面then方法回调的参数
##如果回调中返回的是promise，那么后面then方法的回调会等待他的结束

#多个异步处理
##promise.all 并行请求 且 等待所有的异步处理完
##promise.rance 并行请求 且 只等待第一个请求成功的请求
 
 
