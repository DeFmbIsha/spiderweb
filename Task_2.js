// ====================== #1 ======================
//Результат буде 10

// ====================== #2 ======================
/**
* Це відбувається через те, що функція має свою область бачення, в якій інтерпретатор
* оголошує змінну foo, але інтерпретатор спочатку виконує рядок “if (!foo) {“,
* а потім вже ініціалізує змінну, тому вона буде мати значення Undefined. 
* При приведенні Undefined до логічного типу даних вийде false, тому умова спрацює 
* і foo буде ініціалізована значенням 10, що і буде виведено.
*/

// ====================== #3 ======================
/**
* Результатом буде 1. Через те, що “function a()” – це function declaration, 
* тому з самого початку буде ініціалізована локальна змінна “а”, в яку і буде записане
* значення 10. Тому глобальна змінна не буде змінена.
*/

// ====================== #4 ======================

var a = 1;

function b() {
    a = 10;
    return;
    
    // Найпростіший варіант - змінити назву функції
    function someName() {}
}

b();
console.log(a);

// ====================== #5 ======================
//унарні (витримка з ECMAScript 5.1)
a++;
a--;
++a;
--a;
delete;
typeof;
void;
+a;
-a;
~a;
!a;

//я вважаю, що слід додати ще оператор 'new'
new

//бінарні
a = 5;
a + b;
a += b;
a - b;
a -= b;
a * b;
a *= b;
a / b;
a /= b;
a % b;
a %= b;
a == b;
a != b;
a > b;
a >= b;
a < b;
a <= b;
a && b;
a || b;
a & b;
a ^ b;
a | b;
a << b;
a >> b;
a |= b;
a ^= b;
a <<= b;
a >>= b;
a[b];
a.b;
a, b;
instanceof;
in;

//тернарні
<condition> ? <true-сode> : <false-code>;

// ====================== #6 ======================
var arr = 'Нехай завжди буде';
var newArr = arr.concat(' сонце,\n', arr, ' небо,\n', arr, ' мама,\n', arr, ' я.\n');

console.log(newArr);

// ====================== #7 ======================
var buff = '*********';
var secondRowLength = 17;
var changingRate = 8;
    
for ( var i = 0; i < 4; i++ ) {
    buff = buff.concat('\n');
    
    for ( var j = 0; j < secondRowLength; j++ ) {
        buff = buff.concat('*');
    }
    changingRate -= 2;
    secondRowLength += changingRate;
};

//вірішив не виводити весь малюнок циклом через те, що це затратна операція, тому зеркальна частина виведена реверсом
buff = buff.concat('\n', buff.split('').reverse().join(''));

console.log(buff);

// ====================== #8 ======================
function setTimer(delay) {
    var date = Date.now();
    var timer = date + delay;
    
    console.log('timer start = ' + date);
    while ( date < timer ) {
        date = Date.now();
    };
    console.log('timer end   = ' + timer);
}

setTimer(10000);
