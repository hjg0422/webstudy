/*
	圣杯模式
————目的：
		构造函数实例化后 实例对象们均可调用原型上的方法(公共方法)，
		圣杯模式便是解决实例化对象若想改变继承的原型上的公共方法为己用而
		不实际改变原型上公共方法而生的一种解决方案。

*/
//构造函数
function People(){}

//原型
People.prototype.introduce = () => console.log( "i\'m chinese" )
People.prototype.race = () => console.log("i don\'t known my race")

//实例化A,B
var pa = new People()
var pb = new People()

pa.introduce() // i'm chinese
pb.introduce() //i'm chiese
pa.race() // i don't known my race
pb.race() // i don't known my race
	//————结果均一致 因为调用的是原型上的公共方法

//倘若实例c 想介绍自己的种族为黄种人,调用公共方法race 显然是不可能的，
//若修改原型上的race方法，也不可取，因为这样会导致修改后的原型方法
//race也会被其他实例化的对象所继承，圣杯模式实现如下：

var changeRace = (function(){
	return function (Origin,Target){
		var Temp = function(){} // 临时.构造函数 便于中转原型
		Temp.prototype = Origin.prototype
		Target.prototype = new Temp() //间接继承origin的所有原型方法属性 
		// new 不仅使实例化对象继承原型，并且绑定了this 所以 Target.prototype = Temp.prototype 之后还需执行Temp.call(Target)
		// 也可用 Object.setProptypeOf(Target,Origin.prototype) + Origin.call(Target) 代替
		Target.prototype.constructor = Target
	}
})() //不懂为什么要加上立即执行的匿名函数 , 测试不用立即执行函数也可

var YellowP = function(){}
changeRace(People,YellowP)
YellowP.prototype.race = () => console.log("i\'m Yellow Race")
// 实例化
var pc = new YellowP()

pa.race() //i don't known my race
pb.race() //i don't known my race
pc.race() //i'm Yellow Race
 //及达成