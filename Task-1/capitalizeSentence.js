function capitalizeSentence(sentence) {
    if (typeof sentence !== 'string') {
        return '';
    }
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(' ');
}
console.log('capitalizeSentence("presidio training task sheet") =>', capitalizeSentence('presidio training task sheet'));
