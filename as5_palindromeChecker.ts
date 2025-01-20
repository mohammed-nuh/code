function isPalindrome(str: string): boolean {
    let lowerStr = str.toLowerCase();
    let strArr: string[] = lowerStr.split("");
    let processedArray: string[] = [];
    for(str of strArr) {
        if(str !== " " && str !== ','){
            processedArray.push(str);
        }
    }
    let processedStr = processedArray.join("");
    let reversedStr = processedArray.reverse().join("");

    if (processedStr === reversedStr) {
        return true;
    }
    return false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));