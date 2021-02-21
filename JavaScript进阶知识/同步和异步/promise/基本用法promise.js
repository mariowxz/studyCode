// function load() {
// 	return new Promise(
// 		(resolve, reject) => {
// 			异步
// 		}
// 	)
// }

const promise = new Promise(function(resolve, reject){
	//这里用于对象承若
	
	resolve(100) // 承若达成
	
	// reject(new Error('promise rejected'))//承若失败 
})

promise.then(function(value){
	console.log('resolve',value);
},function(error){
	console.log('rejected',error);
})

//链式调用
promise.then(function(value){
	retrun promise1
}).then(function(value){
	retrun promise2
}).then(function(value){
	retrun promise3
}).then(function(value){
	retrun promise4
})
//回调地狱
setTimeout(()=>{
	console.log(123);]
	
	setTimeout(()=>{
		
		setTimeout(()=>{
			
			setTimeout(()=>{
				
				setTimeout(()=>{
					
					setTimeout(()=>{
						
					},1000)
				},1000)
			},1000)
		},1000)
	},1000)
},1000)
