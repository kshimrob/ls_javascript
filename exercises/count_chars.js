var phrase = prompt('Please write a phrase:');
var strippedPhrase = phrase.replace(/[^A-Za-z]/g,'');
console.log('There are ' + String(strippedPhrase.length) + ' characters in ' + phrase);