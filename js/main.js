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
    // تحديد الإشارات الحسابية
    const operators = ['+', '-', '*', '/', '%', '^'];
    const isOperator = operators.includes(value);
    
    // الحصول على آخر حرف في منطقة العرض
    const lastChar = displayArea.textContent.slice(-1);
    const isLastCharOperator = operators.includes(lastChar);
    
    // إذا كانت القيمة المدخلة إشارة وآخر حرف أيضاً إشارة، استبدل الإشارة السابقة بالجديدة
    if (isOperator && isLastCharOperator) {
        // حذف آخر حرف (الإشارة السابقة) واستبداله بالإشارة الجديدة
        displayArea.textContent = displayArea.textContent.slice(0, -1) + value;
    } else {
        // إضافة القيمة إلى منطقة العرض كالمعتاد
        displayArea.textContent = displayArea.textContent + value;
    }
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