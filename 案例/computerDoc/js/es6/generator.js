/*基本概念*/
	/*
		Generator 函数是一个状态机，封装了多个内部状态。
		执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
		返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
	*/
/*基础语法*/
	/*
		形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
		二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
	*/
		function* helloWorldGenerator() {
		  yield 'hello';
		  yield 'world';
		  return 'ending';
		}

		var hw = helloWorldGenerator();//调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
		//执行
		hw.next() //{value: "hello", done: false}
		hw.next() //{value: "world", done: false}
		hw.next() //{value: "ending", done: false}
		hw.next() //{ value: undefined, done: true }
		//
		function* numbers () {
		  yield 1
		  yield 2
		  return 3
		  yield 4
		}

		// 扩展运算符
		[...numbers()] // [1, 2]

		// Array.from 方法
		Array.from(numbers()) // [1, 2]

		// 解构赋值
		let [x, y] = numbers();
		x // 1
		y // 2

		// for...of 循环
		for (let n of numbers()) {
		  console.log(n)
		}
		// 1
		// 2
/**
	斐波那契数列(1,1,2,3,5,8,13,21,34...)F(n)=F(n-1)+F(n-2) n>=4
*/
	function* fbn(){
		var [pre,curr]=[0,1];
		while(true){
			console.log("yield")
			yield curr;
			[pre,curr] = [curr,pre+curr];
		}
	}
	for (let n of fbn()) {
	  if (n > 1000) break;
	  console.log(n);
	}
//普通函数实现
	function fib( value = 1){
		var arr =[0,1];		//初始化（0，1，0 + 1，1 + 1...）
		var [a,b] = [0,1];
		while(arr.length < value){
			[a,b] = [b,a + b];
			arr.push(b);
		}
		return arr;
	}
	// 测试:
	fib(5); // [0, 1, 1, 2, 3]
	fib(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//generator 实现