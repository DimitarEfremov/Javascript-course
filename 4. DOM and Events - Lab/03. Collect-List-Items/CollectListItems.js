function extractText() {
    let liItems = Array.from(document.getElementsByTagName('li'));
    let textArea = document.getElementById('result');

    let textBundle = [];

    liItems.forEach(element => {
        textBundle.push(element.textContent);
    });
    

    let joinedText = textBundle.join('\n');
    
    textArea.value = joinedText;
}

// textContent