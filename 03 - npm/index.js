var 
    string = require('useful-string'),
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

console.log(text);
console.log(string.hyphenate(text));
console.log(string.toCamelCase(text));
console.log(string.guid());