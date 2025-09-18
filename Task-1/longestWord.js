function longestWord(sentence) {
    if (typeof sentence !== 'string' || sentence.trim() === '') {
        return '';
    }
    var words = sentence.split(' ');
    var longest = '';
    for (var i = 0; i < words.length; i++) {
        var word = words[i].replace(/[^a-zA-Z0-9]/g, '');
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log('longestWord("I am learning JavaScript functions") =>', longestWord('I am learning JavaScript functions'));
