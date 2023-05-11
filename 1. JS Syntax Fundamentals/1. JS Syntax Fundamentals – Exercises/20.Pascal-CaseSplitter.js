function pascalSplitter(text) {
    let wordArray = text.split(/(?=[A-Z])/);

    console.log(wordArray.join(', '))
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');