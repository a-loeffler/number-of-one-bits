# LeetCode Problem # 191:  Number of 1 Bits

## The Setup:

```
Write a function that takes an unsigned integer and returns the number of 
'1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer 
type. In this case, the input will be given as a signed integer type. It 
should not affect your implementation, as the integer's internal binary 
representation is the same, whether it is signed or unsigned.

In Java, the compiler represents the signed integers using 2's complement 
notation. Therefore, in Example 3, the input represents the signed integer. -3.
```

## My Attempts:

### Attempt #1
* For this attempt, I was aware of the fact that you can calculate the sum of a decimal number's digits by using modulo 9.  I thought doing strict mathematical calculations might work faster than looping through the digits in the number.
  * For example, with the number 12, 1 + 2 = 3.  This is the same as 12 % 9.
  * This runs into complications if the sum of the digits is greater than or equal to 9.
  * Example: with the number 29, 2 + 9 = 11.  But 29 % 9 = 2
* For binary numbers, this becomes easier to deal with; as long as the sum of the digits can never exceed 9, modulo 9 will work.
  * An easy way to handle this is to limit the amount of digits to 8 or less, since the digit sum would never exceed 9.
  * Example: 11111111 has a digit sum of 8.
* One difficulty that arose is that JavaScript automatically converts binary numbers to decimal on calculations
  * So numbers like 00110101 would get converted to decimal first before the modulo is applied
  * 00110101 % 9 was giving an output of 53 % 9 = 8 instead of the expected 0+0+1+1+0+1+0+1 = 4
  * The only way I could find to work around this was to type cast to a string with the .toString(2) method that preserved the correct digit placement.
* After summing the modulo 9 of each smaller section of the overall binary number, the return correctly finds the correct Hamming weight of the binary number.
  ```javascript
  var hammingWeight = function(n) {
    let string = n.toString(2);
    
    return (string.substring(0, 8) % 9) + (string.substring(8, 16) % 9) + (string.substring(16, 24) % 9) + (string.substring(24, 32) % 9) + (string.substring(32) % 9)

  };
  ```
#### Conclusion:
* This approach ended up working more slowly than expected.  Looping approaches that I researched appeared to be faster.
  * I believe this is due to the calculation work being time-costly.  If there were a way to use the same approach with just one calculation on the entire input binary number, this approach might end up being faster than looping.
  * Results:
    * Runtime: 125 ms, faster than 6.08% of JavaScript online submissions for Number of 1 Bits.
    * Memory Usage: 39.8 MB, less than 97.12% of JavaScript online submissions for Number of 1 Bits.
