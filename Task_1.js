// ====================== #1 ======================
var str = 'someString';
var num = 5;
var bool = true;
var arr = [];
var obj = {};
var func = function() {};
var nall = null;
var undef;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof func);
console.log(typeof nall);
console.log(typeof undef);

// ====================== #2 ======================
var str2 = '123';
var num2 = 123;

//changing string
//in the bad, but possible way:
console.log(typeof (str2 - 2));
console.log(typeof +str2 );
console.log(typeof (str2 >> 0));

//in good way:
console.log(typeof Number(str2));
console.log(typeof parseInt(str2));

//changing number 
console.log(typeof (123 + ''));
console.log(typeof String(num2));
console.log(typeof num2.toString(10));

// ====================== #3 ======================
console.log('222' == 222 );
console.log('222' === 222 );


// ====================== #4 ======================
var num4 = 12345;
var cripted = num4.toString(8);
var uncripted = parseInt(cripted, 8);

console.log(cripted);
console.log(uncripted);
