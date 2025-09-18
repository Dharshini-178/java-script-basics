function countVowels(str) {
    if (typeof str !== 'string') {
        return 0;
    }
    var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count = count + 1;
        }
    }
    return count;
}
console.log('countVowels("Hello World") =>', countVowels('Hello World'));
