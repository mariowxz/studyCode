# typeof 

##能够判断所有值类型，并且能具体什么值类型
##能够判断是不是函数
##能够判断是不是引用类型，但不能具体是什么引用类型
 
#instanceof

##能够判断具体引用类型

# 浅拷贝 就是复制引用类型的地址
# 深拷贝 不复制引用类型地址，获得同样的数据
 
 const obj1 = {
	 name:'wxz',
	 age:'18',
	 address:{
		 city:'湖南'
	 }
 }
 const obj2 = obj1
 obj2.address.city = '深圳'
 console.log(obj1.address.city);//打印了深圳  因为是浅拷贝 复制了地址
 
###/*
### * 深拷贝
### * @param {Object} obj 要拷贝的对象
### */
 
### function deepClone(obj = {}){
###	 if(obj != 'object' || obj == 'null'){
###		 retrun obj
###	 }
###	 
###	 let result
###	 if(obj instanceof Array){
###	     result = []
###	 }else{
###	     result = {}
###	 }
###	 
###	 for(let key in obj){
###	     //保证key不是原型的属性
###	     if(obj.hasOwnProperty(key)){
###	         //递归调用 !!! 核心关键
###	         result[key] = deepClone(obj[key])
###	     }
###	 }
###	 
###	 retrun result
### }