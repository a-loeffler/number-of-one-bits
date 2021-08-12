// Runtime: 125 ms, faster than 6.08% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 39.8 MB, less than 97.12% of JavaScript online submissions for Number of 1 Bits.


var hammingWeight = function(n) {
    let string = n.toString(2);
    
    return (string.substring(0, 8) % 9) + (string.substring(8, 16) % 9) + (string.substring(16, 24) % 9) + (string.substring(24, 32) % 9) + (string.substring(32) % 9)

};