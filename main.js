const DOMHeader = document.querySelector('#header');
const buttonSection = document.querySelector('.btn-container');
const DOMInfo = document.querySelector('#DOMInfo');
const hiddenList = document.querySelectorAll('.hidden');
const returnButton = document.querySelector('.reset-btn');
const queryButton = document.querySelector('#query');

console.log(hiddenList)


function changeWindow(event) {
    console.log(event, event.target)
    switch (event.target) {
        case returnButton:
            hiddenList.forEach(element => element.classList.remove('hidden'));
            hiddenList.forEach(element => element.classList.add('hidden'));
            buttonSection.classList.remove('hidden');
            break;
        case DOMHeader:
            buttonSection.classList.add('hidden');
            DOMInfo.classList.remove('hidden');
            break;
    }
}

// function landingReset() {
//     hiddenList.forEach(element => element.classList.remove('hidden'));
//     hiddenList.forEach(element => element.classList.add('hidden'));
//     buttonSection.classList.remove('hidden');
// }

// returnButton.onclick = landingReset;

window.addEventListener('click', changeWindow)