function solve() {
  let output = document.getElementById('output');
  let inputText = document.getElementById('input').value;
  let sentences = inputText.split('.');

  sentences.pop();

  while (sentences.length > 0) {

    let newParagraph = document.createElement('p')
    let sentencesToAdd = sentences.slice(0, 3)
    sentences = sentences.slice(3);
    newParagraph.innerText = sentencesToAdd.join('.')+'.';
    output.appendChild(newParagraph);


  }
}