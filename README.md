# ECMAScript [ http://es6.ruanyifeng.com](http://es6.ruanyifeng.com "es6中文教程")

##1、编译
###1.1在线编译--不推荐
babel == browser.js:作用是使浏览器支持babel，可以使用ES6进行写js代码。browser.js会对使用ES6语法写的js代码进行编译，使ie10一下的浏览器可以使用。如果使用ES5，可以不引入brower.js文件。script标签的type="text/babel"
##2、ES6的内容：
###2.1 变量：let定义的是变量   const定义的是常量


- var定义变量的缺陷

    1.可以重复声明 eg:`var a=12;var a=10;alert(a) ==》10`

    2.无法限制修改，就是没有常量的概念，不严谨；

    3.没有块级作用域
- ES6定义变量的新方式：let

    1.不能重复声明变量 `let a = 12;let a=5;alert(a); ==》报错Identifier 'a' has already been declared`会提示变量a已经声明
 
    2.可以修改
      `let a1=3; a1=4;alert(a1) ==》a1=4`

    3.有块级作用域
      `if(true){let a2 =4} alert(a2) ==》报错：a2未定义`
- ES6定义常量的方式：const

     1.不能重复声明常量 `const b = 12;const b=5;alert(b); ==》报错Identifier 'b' has already been declared` 会提示变量b已经声明

     2.不可以修改
       `const b1=3; b1=10; alert(b1) ==》报错：Assignment to constant variable.就是不能对常量进行赋值`

     3.有块级作用域
      `if(true){let b2 =4} alert(b2) ==》报错：a2未定义`
- 块级作用域

    1.var没有作用域的概念，所以在作用域之外是可以进行访问的，
	` window.onload = function(){
      var aBtn = document.getElementsByTagName("input");

      for(var i=0;i<aBtn.length;i++){
        aBtn[i].onclick(function(){
          alert(i);
        })
      }
    }`
     输出是三个3. 解决方法
    ` window.onload = function(){
      var aBtn = document.getElementsByTagName("input");

      for(var i=0;i<aBtn.length;i++){
        (function(i){
			aBtn[i].onclick(function(){
            alert(i);
        })
		})(i)
      }
    }`
    输出  0 1 2  var只能利用函数来限制它的作用域
	2.
	`window.onload = function(){
       var aBtn = document.getElementsByTagName("input");

       for(let i=0;i<aBtn.length;i++){
         aBtn[i].onclick(function(){
           alert(i);
         })
       }
     }`
    输出  0 1 2
	

###2.2 函数--箭头函数
- #### 标准函数写法   
 1. 语法：function 函数名(){}
- #### ES6中的箭头函数
  1. 语法：()=>{}  等价于 function(){}
  2. 如果只有一个参数，()可以省略
       `let Parentheses = (a)=>{
    		 return a*2;
       }
       alert(Parentheses(4));`

          //如果只有一个参数,()可以省略
	   `let ignoreParentheses = a=>{
	 		return a*2;
	   }
 	   alert(ignoreParentheses(6));
       `
     
  3. 如果只有一个return，{}和return可以省略
     //如果只有一个return ,{}可以省略 和下面的函数效果一样
	 ` let brackets = (a)=>{
	     return a*2;
	   }
   		alert(brackets(24));
     `

         //如果只有一个return,{}和return可以省略
		  ` let ignoreBrackets = a=>a*2;
		   alert(ignoreBrackets(23));`
  
- ####  函数的参数    
   1. 参数扩展/展开：收集剩余的参数。传参数的时候可以传入多个参数，剩余的参数放在一个argus数组中，剩余参数的名字可以是任意的，前面有...三个点，但只能是最后一个形参，不能再argts后面再添加形参。
   ` function show(a,b,...argts){
      alert(a);
      alert(b);
      alert(arguments);
    }
    show(10,12,25,23,1);`
   1.2.展开数组：用...数组名 等价于 数组的值 show(...arr)；等价于show(1,2,3),展开后的效果，跟直接把数组的内容拿出来放在这儿一样。
      ` let arr =[1,2,3]
	    //...arr等价于 1,2,3
	    function show(a,b,c){
	      alert(a);
	      alert(b);
	      alert(c);
	    }
	    show(...arr);`

        `let arr1=[1,2,3];
	    let arr2=[6,7,8];
	    let arr=[...arr1,...arr2];
	    alert(arr);`
    1.3 参数的收集和展开示例：
        `  function show(...args){//用于收集参数
		      //用于展开参数
		      fn(...args);
		    }
		
		    function fn(a,b){
		      alert(a+b);
		    }
		    show(2,5);`
   3. 默认参数：如果没有定义参数，就使用默认参数；如果有定义参数，就使用定义的参数
      `//设置默认参数
	    function show(a,b=5,c=12){
	      console.log(a,b,c);
	    }
	    show(2);//如果没传参数，就按照默认的参数显示
	    show(2,23,45);//如果传参数，就按照传入的显示`

- ####  解构赋值 ####
	1. 解构：拆开
	2. 左右两边结构必须一样 ：
	
	左边是数组，右边也要是数组`let [a,b,c] = [1,2,3];`
    
     左边是json，右边对应的也要是json
     ` let {f,g,h} = {f:23,g:6,h:65};`

	    ` let [{a,b},[n1,n2,n3],num,str]=[{a:2,b:3},[12,34,56],3,"sdfsdf"];
	      
	    console.log(a,b,n1,n2,n3,num,str);//输出2 3 12 34 56 3 "sdfsdf"`

       //也可以获取整个json或者数组,保持左右两边的结构一直就可以了
	    `let [json,[n1,n2,n3],num,str]=[{a:2,b:3},[12,34,56],3,"sdfsdf"];
	    console.log(json,n1,n2,n3,num,str);//Object {a: 2, b: 3} 12 34 56 3 "sdfsdf"`
	3. 右边必须是个东西，就是要是语法正确的数组或者json，不能是不正确的语法，比如{12,5},不是数组也不是json
	4. 声明和赋值不能分开
	 不能先声明，再去赋值， let [a,b]; [a,b]=[12,4];报错
	5. 
- 待续。。。
###2.3 数组
- 数组的新方法
	1. map--映射：一个对一个，可以给原数组做转换
	`map(function(elements,index){})`//第一个参数是元素，第二个参数是元素的下标
	2. reduce--汇总 一堆数据汇总成一个，相当于计算数组的参数的总和
 计算总和：	 
//tmp:(每次reduce时，前面数据累加的结果)最终返回的是所有数据的和，item是数组的元素，index数组元素的下标,
   `let result = arr.reduce((tmp,item,index)=> tmp+item )`

        计算平均数：求和之后/数组的长度
	3. filter--过滤器
		过滤器：`let arr1 =[
		   {title:"男士衬衫",price:75},
		   {title:"女式包",price:1375},
		   {title:"女鞋",price:575},
		   {title:"男鞋",price:475}];`

 			`let result1=arr1.filter(json=>json.price>=1000);`
	4. forEach--循环
	   遍历数组：`let arr= [12,56,23];arr.forEach((item,index)=>{alert(item);})`

###2.4 字符串
- 多了两个新方法
  1. startsWidth:以什么开头，返回的是Boolean值，可以用来判断字符串是以什么开口的。实际应用：判断一个网址的类型，http/https/git.svn等
    `let str = "fasdfasdfsad";
    let result = str.startsWith("f"); =>true`  
     
    `let str = "htttp://www.baidu.com";
    if(str.startsWith("http://")){
      alert("普通网址");
    }else if(str.startsWith("https://")){
      alert("加密网址");
    }else if(str.startsWith("git://")){
      alert("git");
    }else if(str.startsWith("svn://")){
      alert("svn");
    }else{
      alert("其他");
    }`
  2. endsWIdth：以什么结尾,返回的是Boolean值，可以用来判断字符串是以什么结尾的。实际应用：可以判断邮箱的类型或者上传附件的时候，根据判断上传附件的类型或者附件的类型显示对应的图标
   ` let str = "fasdfasdfsad";
     let resultEnd = str.endsWith("d"); =>true`

     `let str = "身份证.jpg";
    if(str.endsWith(".jpg")){
      alert("jpg图片");
    }else if(str.endsWith(".txt")){
      alert("txt文件");
    }else if(str.endsWith(".png")){
      alert("png图片");
    }else{
      alert("其他");
    }`
- 字符串模板  
   1. 字符串模板，可以解析${变量}格式中的变量值。在js中，单引号和双引号的括起来的字符没有区别，二字符串模板就是用反单引号括起来的字符串``（切换成英文输入法，按1左边的键既可以敲出）。
	`let a = "234";
    let b =`${a}`;
    console.log(b);=>234 `

    `let c ='${a}';
    console.log(c);=>${a}`

   2. 可以用来拼接字符串，随意折行。和常规的字符串拼接相比，可以随意换行和拼接
    let title="简介";
    let content="你好，我是某某...";
    //传统字符串拼接，换行的时候要加反斜杠
    let str ='<div>\
	<h1>'+title+'</h1>\
	<p>'+content+'</p>\
	</div>';
    alert("str="+str);


   //模板字符串
    let strTemp = `<div><h1>${title}</h1><p>${content}</p></div>`
    alert("strTemp="+strTemp);
   
- 水电费
###2.5 面向对象
- 原来的面向对象，定义一个抽象的函数，包含一类东西的属性或者方法，也可以通过原型属性给对象添加方法。
- 原来的面向对象存在的缺陷：   
   1. 类也是构造函数
   2.
   `  function user(name,age){
        this.name = name;
        this.age = age;
      }
      user.prototype.showName = function(){
        alert(this.name);
      }
      user.prototype.showAge = function(){
        alert(this.age);
      }

      var u1 = new user("张三","23");
      u1.showName();
      u1.showAge();`
- 原来的面向对象 继承：站在巨人的肩膀上实现自己的目的：实现继承的方法：call、apply
    `function user(name,age){
        this.name = name;
        this.age = age;
      }
      user.prototype.showName = function(){
        alert(this.name);
      }
      user.prototype.showAge = function(){
        alert(this.age);
      }

      function vipUser(name,age,level){
        user.call(this,name,age);
        this.level =level;
      }

      var u1 = new user("张三","23");
      u1.showName();
      u1.showAge();`
  
- 新的面向对象 多了关键字 class class{方法} ；有了专门的构造器
    //方法:每个方法之间不用加分号和function

   `class user{
         constructor(name,age){
           this.name = name ;
           this.age = age;
         }
         showName(){
           alert(this.name);
         }
         showAge(){
           alert(this.age);
         }
       }
      var u1 = new user("张三","23");

      u1.showName();

      u1.showAge();`
- 面向对象德 继承 ：继承别人的功能，在别人功能的基础上进行扩展自己的功能
     1.原来的继承方法 
     `function user(name,age){
        this.name = name;
        this.age = age;
      }
      user.prototype.showName = function(){
        alert(this.name);
      }
      user.prototype.showAge = function(){
        alert(this.age);
      }

      function vipUser(name,age,level){
        user.call(this,name,age);
        this.level =level;
      }

      //继承的方法
      vipUser.prototype = new user();
      vipUser.prototype.constructor = vipUser;

      var v1 = new vipUser("blue","123456",'1');

      v1.showName();
      v1.showAge();`
    
      2.super():父类、超类，执行父类的方法
     
    ` class user{
      constructor(name,age){
        this.name = name ;
        this.age = age;
      }
      showName(){
        alert(this.name);
      }
      showAge(){
        alert(this.age);
      }
    }
    //es6 继承新方法
    class vipUser extends user{
      constructor(name,age,level){
        super(name,age);
        this.level = level;
      }
      showLevel(){
        alert(this.level);
      }
    }
   var v1 = new vipUser("张三","23",'1');
   v1.showName();
   v1.showAge();
   v1.showLevel();`

 
- 面向对应的应用 React
  - 1.React:组件化，一个组件就是一个class，依赖于JSX == babel == browser.js
  
###2.6 JSON
- 1.json 标准语法 数值是key:value的模式，key和value只能用双引号括起来;数据有逗号隔开，可以是json对象或者json数组，

json对象
    `let jsonObj={"a":"4","b":"5"};`

josn数组：由json对象构成的数组格式：[{},{},{}]
`let jsonArr = [{"a":"4","b":"5"},{"a":"4","b":"5"}，{"a":"4","b":"5"}]`
访问jsonArr   jsonArr[0].a
let json={"sites":[{"d":"5"},{"c":"4"},{}]}

- 2.将JSON转为字符串 stringify JSON.stringify(json对象)
   stringify:字符串化 的意思

    `let json = {"a":"3","b":"5"};
    let josnStr =JSON.stringify(json);
    console.log(josnStr);//输出的是字符串{"a":"3","b":"5"}`
- 3.将str字符串转为json parse ，JSON.parrse(str)

     `let str='{"a":"3","b":"5"}';
      let strJson = JSON.parse(str);
     console.log(strJson); `
   //输出的是对象	
    Object {a: "3", b: "5"}
	a:"3"
	b:"5"
- 4.json的简写
   - 1.当值和变量名一样时，可以只写一个
  `let a =12;
  let b=2;
  let jsonOrgin ={a:a,b:b};
  console.log(jsonOrgin);//原始写法
  let jsonES6 = {a,b,"c":89};//es6新写法
  console.log(jsonES6);`
    - 2.json中有函数，可以省略 ":function"
   ` let jsonFunction ={
		  a:12,
		  show(){//可以省略:function
		    alert(this.a);
		  }
		}   
   jsonFunction.show()`
###2.7 promise
- 1.promise:承诺  消除异步操作，用同步一样的方式，来书写异步代码

- 2.promise.all([p1,p2]).then(function(arr){alert("必须全部成功")；let[arr1,arr2] = arr },function(){alert("至少有一个失败了");})//all可以接收多个promise对象，如果需要分解两个promise对象的反馈结果，arr1对应的是第一个promise对象，arr2对应的是第二个promise对象
- 3.可以将多个promise函数封装在一个函数里面，url传参就行，ajax函数其实就是个json对象
- 4.高版本的jquery支持promise ajax的返回值是个promise对象
let p = $.ajax({});p 是个promise对象 ，所以ajax本身返回的就是promise对象，不用再new Promise()了
- Promise()all方法：promise对象中的ajax都是与的关系，必须都成功，then的结果才会成功，有一个失败，就全部失败了
   `Promise.all({$.ajax({}),$.ajax({}),$.ajax({})}).then(results=>{
    let [ajax1,ajax2,ajax3] =results;
	alert("成功了")
},err=>{
alert("失败了");    
})`
- Promise的race方法
###2.8 generator：是一个函数。
- 1. generator功能：可以在函数执行的过程中停止，使用的关键词是yield（放弃），函数名字前有*号，来区别普通函数（一旦执行，整个函数都会执行完整）；
- 2.执行generator函数的时候，不会直接运行函数中的代码，而是创建了generator对象。generatorObj对象有个next方法,继续执行，会执行函数中的内容。如果想执行yield后面的内容，继续使用next()的方法即可。
- 3.为什么需要函数中有停止需求：请求数据,因为可以暂停，可以不用在ajax的回调函数中处理数据。
   function *函数(){
		代码。。。
        yield ajax(xxx,function(){})
        代码。。。
   }
- 4.带逻辑的读取 promise generator
  - 1.promise 和普通回调相比没有优势
  - 2.generator ：不能写成箭头函数，带逻辑用起来比较方便
- 待续
###2.9 模块化
