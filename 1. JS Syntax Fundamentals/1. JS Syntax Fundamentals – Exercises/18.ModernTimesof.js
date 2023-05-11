function hashTag(text) {
    const words = text.split(' ');
    const specialWords = [];
  
    for (const word of words) {
      if (word.startsWith('#')) {
        const specialWord = word.substring(1);
        if (/^[a-zA-Z]+$/.test(specialWord)) {
          specialWords.push(specialWord);
        }
      }
    }
  
    return specialWords.join('\n');
  }

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');