/*
Set 它类似于数组，但是成员的值都是唯一的，没有重复的值。
*/

	var newSet = new Set([1,2,3,1,"red"])
	console.log(newSet) //1,2,3,"red" 类数组 键值与键名相同
//操作方法
	/*
		add(value)：添加某个值，返回 Set 结构本身。
		delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
		has(value)：返回一个布尔值，表示该值是否为Set的成员。
		clear()：清除所有成员，没有返回值。
	*/
	newSet.add("green")
	newSet.delete(1)
	newSet.has(2) //true
	newSet.clear()

//Set 遍历方法
	/*
		keys()：返回键名的遍历器
		values()：返回键值的遍历器
		entries()：返回键值对的遍历器
		forEach()：使用回调函数遍历每个成员
	*/
//遍历Set 
	for (let i of newSet.keys()){
		console.log(i)
	}// 1 2 3 red

	for (let i of newSet.values()){
		console.log(i)
	}// 1 2 3 red

	for (let i of newSet.entries()){
		console.log(i)
	}//[1,1] [2,2] [3,3] ["red" ,"red"]

	newSet.forEach((value,key)=>console.log(value,key))
	//[1,1] [2,2] [3,3] ["red" ,"red"]

	console.log(...newSet)// 1 2 3 red
//Set 的交集并集 和差集
	var a = new Set([1,2,3,4]) ,b = new Set([4,5,6,7,8,1])
	//交集
	var jiaoji = new Set([...a].filter( x => b.indexOf(x) == -1 ? false : true))
	var jiaoji2 = new Set([...a].filter(x => b.has(x)))
	//并集
	var union = new Set([...a, ...b])
	//差集
	var chaji = new Set([...a].filter( x => Boolean( b.indexOf(x) == -1 ? true : false )))
	var jiaoji2 = new Set([...a].filter(x => !b.has(x)))