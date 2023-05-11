function solve(sentence) {
let answer = [];

var pattern = /(\w+)/g;
var result = sentence.match(pattern)

result.forEach(element => {
    answer.push(element.toUpperCase());
});

console.log(answer.join(', '));


}

solve('Hi, how are you?')