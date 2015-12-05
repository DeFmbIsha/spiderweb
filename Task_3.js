var myMath = (function() {
    return {
        sum: function(a, b) {
            return a + b;
        },

        diff: function(a, b) {
            return a + b;
        },

        mult: function(a, b) {
            return a * b;
        },

        div: function(a, b) {
            return a / b;
        }
    };
})();

function caching(f) {
    var cache = {};

    return function(a,b) {
    if (!([a + "," + b] in cache)) {
        cache[a + "," + b] = f.call(this, a,b);
    }
    return cache[a + "," + b];
    };
};

myMath.sum = caching(myMath.sum);
myMath.diff = caching(myMath.diff);
myMath.mult= caching(myMath.mult);
myMath.div = caching(myMath.div);

console.log(myMath.sum(1,2));
console.log(myMath.sum(1,2));
console.log(myMath.sum(1,2));
console.log(myMath.sum(8,4));
console.log(myMath.sum(8,4));

console.log("==================");

console.log(myMath.mult(1,2));
console.log(myMath.mult(1,2));
console.log(myMath.mult(1,2));
console.log(myMath.mult(8,4));
console.log(myMath.mult(8,4));

