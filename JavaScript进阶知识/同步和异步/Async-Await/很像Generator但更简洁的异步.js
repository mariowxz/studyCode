//不需要co..什么什么的调用
async function main() {
	try {
		const first = await('第一个异步处理')
		console.log(first);

		const second = await('第二个异步处理')
		console.log(second);

		const Thread = await('第三个异步处理')
		console.log(Thread);
	} catch (e) {
		console.log(e);
	}
}