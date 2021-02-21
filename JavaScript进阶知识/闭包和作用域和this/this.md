# 作为普通函数
# 使用call apply bind
# 作为对象方法被调用 
# 在class方法中调用
# 箭头函数

## this 取什么样的值 是在函数执行的时候确认的 ！！！不是在函数定义的时候确认的

function fn1(){
	console.log(this)
}

fn1() //打印window

fn1().call( { x:100 } ) //打印 { x:100 }

const fn2 = fn1.bind({ x:200 })
fn2() // 打印{ x:200 }