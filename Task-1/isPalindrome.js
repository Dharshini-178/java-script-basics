function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

function isPalindrome(str) {
    if (typeof str !== 'string') {
        return false;
    }
    var cleaned = str.toLowerCase();
    cleaned = cleaned.replace(/[^a-z0-9]/g, '');
    var reversed = reverseString(cleaned);
    if (cleaned === reversed) {
        return true;
    } else {
        return false;
    }
}
console.log('isPalindrome("A man, a plan, a canal: Panama") =>', isPalindrome('A man, a plan, a canal: Panama'));
