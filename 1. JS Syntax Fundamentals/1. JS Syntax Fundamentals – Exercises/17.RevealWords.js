function revealWords(words, text) {

    let wordsArray = words.split(", ");
    let textArray = text.split(" ");

    wordsArray.forEach(element => {
        let censored = element.replace(element, '*'.repeat(element.length));
        let counter = 0;

        textArray.forEach(element2 => {
            if (censored === element2) {
                textArray[counter] = element;
            }
            counter++;
        });

    });

    let uncensoredText = textArray.join(" ");
    console.log(uncensoredText);
}


// revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning','softuni is ***** place for ******** new programming languages');

