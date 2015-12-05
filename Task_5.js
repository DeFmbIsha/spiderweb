// ========================#1============================
var array = [
                [1,2,3,undefined,4],
                [1,2,3,4,"1",5],
                [3,2,,5],
                [3,null,5]
            ];
var maxSum;

for ( var i = 0; i < array.length; i++ ) {
    var sum = 0; 
        
    for ( var j = 0; j < array[i].length; j++ ) {
            if ( !array[i][j] || isNaN(array[i][j]) || typeof array[i][j] === 'string' ) {
                break;
            };      
            sum += array[i][j];
    };
    console.log("sum = ", sum);

    if ( !maxSum ) {
        maxSum = sum;
    } else if ( maxSum < sum ) {
        maxSum = sum;
    };
};

console.log("maxSum = " + maxSum);
console.log("========================");

// ========================#2============================
function stringSum(longString) {
    var array = longString.split(" ");
    if ( array.length < 1 ) {
        console.log("You have to paste string with two numbers");
        return;
    };

    array[0] = Number.parseInt(array[0]);
    array[1] = Number.parseInt(array[1]);
    if ( Number.isNaN(array[0] + array[1]) ) {
        console.log("please, paste two valid numbers");
    } else if ( array[0] + array[1] > Number.MAX_SAFE_INTEGER) {
        console.log("sum of your numbers is too long");
    } else {
        console.log(array[0] + array[1]);
    }
};

var longString1 = "7007199254740992s 1007199254740992";
var longString2 = "7007199254740992";
var longString3 = "7007199254740992 7007199254740992";

stringSum(longString1);
stringSum(longString2);
stringSum(longString3);
console.log("========================");

// ========================#3============================
function arrayDiff(array1, array2) {
    // в resultObj будет храниться подсчет одинаковых разниц элементов и результирующий массив
    var resultObj = {};
    var newArray = [];
    var length = array1.length;
    if ( array1.length > array2.length ) {
        length = array2.length;
    };

    for ( var i = 0; i < length; i++ ) {
        newArray[i] = array1[i] - array2[i];

        if ( !resultObj.hasOwnProperty(newArray[i]) ) {
            resultObj[newArray[i]] = 0;
        };
        resultObj[newArray[i]] += 1;
    };

    resultObj.diffArray = newArray;
    return resultObj;
};

array1 = [7,6,5,4,3,2,1];
array2 = [2,1,3,3,2,1];

console.log(arrayDiff(array1, array2));
