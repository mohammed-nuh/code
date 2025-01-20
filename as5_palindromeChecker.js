function isPalindrome(str) {
    var lowerStr = str.toLowerCase();
    var strArr = lowerStr.split("");
    var processedArray = [];
    for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
        str = strArr_1[_i];
        if (str !== " " && str !== ',') {
            processedArray.push(str);
        }
    }
    var processedStr = processedArray.join("");
    var reversedStr = processedArray.reverse().join("");
    if (processedStr === reversedStr) {
        return true;
    }
    return false;
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
