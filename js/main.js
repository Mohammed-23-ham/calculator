const mainX = document.getElementById('main');
const displayArea = document.getElementById('display-area');

mainX.addEventListener('click', (e) => {
    if (e.target.nodeName == 'BUTTON') {
        switch (e.target.textContent) {
            case 'C':
                clear();
                break;

            case 'DEL':
                del();
                break;

            case '=':
                evaluate();
                break;

            default:
                addToDisplay(e.target.textContent);
        }
    }
});

function clear() {
    displayArea.textContent = '';
}

function addToDisplay(value) {
    displayArea.textContent = displayArea.textContent + value;
}

function del() {
    let curContent = displayArea.textContent;
    displayArea.textContent = curContent.substring(0, curContent.length -1);
}

function evaluate(){
    try {
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch(error) {
        displayArea.textContent = "Invalod Oparation";
        console.error(error);
    }
}