// function editElement(h1, stringToReplace, newString) {
//     let text = h1.textContent;

//     let result = text.replace(stringToReplace, newString);

//     h1.innerHTML = result;
     
// }

function editElement(elem, match, replacer) {
    const re = new RegExp(match, 'g');
    elem.innerHTML = elem.innerHTML.replace(re, replacer);
}