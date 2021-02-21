function* main() {
	try {
		const first = yield('第一个异步处理')
		console.log(first);

		const second = yield('第二个异步处理')
		console.log(second);

		const Thread = yield('第三个异步处理')
		console.log(Thread);
	} catch (e) {
		console.log(e);
	}
}

function co(generator) {
	const g = generator()

	function handleResult(result) {
		if (result.done) return //生成函数结束
		result.value.then(data => {
			handleResult(g.next(data))
		}, error => {
			g.throw(error)
		})
	}
	//调用一次即可
	handleResult(g.next())
}
co(main)