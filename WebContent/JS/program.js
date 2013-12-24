// create method
Function.prototype.method = function (name, func){
	this.prototype[name] = func;
	return this;
};


// create object; if statement will be false
if(typeof Object.create !== 'function'){
	Object.create = function(o){
		var F = function () {};
		F.prototype = o;
		return new F();
	};
};





// test 1
document.write('Hello, world!');
document.write('<br>');
// test 2
var bar = {
	firstname:'Bar',
	lastname: 'BBB',
	age: 16
};
var foo = Object.create(bar);
foo.firstname = "Foo";
foo.func = function(notify){document.write('<br>--------------'+notify+'----------------</br>');};
foo.func('hasOwnProperty');
document.write(" [foo.firstname:"+foo.firstname);
document.write(" [bar.firstname:"+bar.firstname);
document.write(' <br>');
document.write(" [foo.hasOwnProperty(firstname):"+foo.hasOwnProperty('firstname')); // this object has the property, not prototype chain.
document.write(" [foo.hasOwnProperty(lastname):"+foo.hasOwnProperty('lastname'));
document.write(" [foo.hasOwnProperty(func):"+foo.hasOwnProperty('func'));
foo.func('loop property name with no order and contain prototype properties');
for(name in foo){
	document.write('<br>');
	document.write(" typeof foo."+name+":"+typeof foo[name]);
}
foo.func('delete, but will not touch prototype properties');
document.writeln(" [delete foo.firstname:"+delete foo.firstname);
document.writeln(" [foo.firstname:"+foo.firstname);
foo.func('function');
var add = function (a, b){
	return a+b;
};
add.value = 1;
add.double = function (){
	var that = this; // this is bound to 'add' function
	var helper = function(){ // this will be bound to 'global'
		that.value = add(that.value, that.value);
	};
	
	helper();
}
add.double();
document.writeln(add.value);
foo.func('inherence: change father object properties can affect all sub object');
var sss = {
		p1:9,
		p2:8,
		p3:7
}

var child = Object.create(sss);
child.p4 = 5;
child.__proto__.p0 = 1;

var child2 = Object.create(sss);
document.writeln(child2.p0);




