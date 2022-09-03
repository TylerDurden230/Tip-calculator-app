let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("total");
let customInput = document.getElementById('custom');
let billInput = document.getElementById('bill');
let peopleInput = document.getElementById('people');
let error = document.getElementById("error");
let tip = 0;
let bill = 0;
let total = 0;
let people = null;

customInput.addEventListener('change', updateTipAmount);
billInput.addEventListener('change', updateBillAmount);
peopleInput.addEventListener('change', updatePeople);

function calcAmounts() {
    if ((bill != 0 && bill != null) && (people != null && people != 0))
    {
        totalAmount.textContent = `$${((bill + (bill / 100 * tip)) / people).toFixed(2)}`;
        tipAmount.textContent = `$${((bill / 100 * tip) / people).toFixed(2)}`;
    }
}

function activeTip(selectedTip) {
    event.preventDefault();
    tip = selectedTip;
    calcAmounts();
}
function updateBillAmount(e) {
    let check = parseFloat(e.target.value);
    check < 0 ? e.target.value = null : bill = check;
    calcAmounts();
}

function activeTip(selectedTip) {
    event.preventDefault();
    tip = selectedTip;
    calcAmounts();
}

function updateTipAmount(e) {
    let check = parseInt(e.target.value)
    check < 0 ? e.target.value = null : tip = check;
    if (tip < 0)
        e.target.value = null;
    calcAmounts();
}

function updatePeople(e) {
    error.textContent = ""; 
    let check  = parseInt(e.target.value);
    check < 0 ? e.target.value = null : people = check;
    if (people === 0)
    {
        peopleInput.style.border = " 2px solid red";
        error.textContent = "Can't be zero!";
    }
    else {
        peopleInput.style.border = "2px solid var(--Strong-cyan)";
    }
    calcAmounts();
}

function reset() {
    event.preventDefault();
    customInput.value = null;
    peopleInput.value = null;
    billInput.value = null;
    tipAmount.textContent = "";
    totalAmount.textContent = "";
}