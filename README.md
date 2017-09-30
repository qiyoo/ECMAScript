# ECMAScript

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
  1. 语法：()=>{}
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
- 阿斯蒂芬
###2.3 数组
###2.4 字符串
###2.5 面向对象
###2.6 promise
###2.7 generator
###2.8 模块化
