function solve(wordsToFind) {

    let wordCount = [];
    let wordsToFindArr = wordsToFind[0].split(' ');
    let wordArr = wordsToFind.slice(1)

    wordsToFindArr.forEach(element => {
        // let count = wordArr.filter(word => word === element).length;
        wordCount.push({
            word: element,
            occurrences: wordArr.filter(word => word === element).length
        })
    });

    wordCount.sort((a, b) => b.occurrences - a.occurrences)
        .forEach(element => {
            console.log(`${element['word']} - ${element['occurrences']}`);
        });

}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)