const billInput = document.getElementById("bill");
const btn15 = document.getElementById("15%");
const btn20 = document.getElementById("20%");
const result = document.getElementById("result");

function calculateTip(percentage) {
    const billAmount = Number(billInput.value);
    const tip = billAmount * (percentage / 100);
    const total = billAmount + tip;

    result.innerText = `Tip: $${tip.toFixed(2)} / Total: $${total.toFixed(2)}`
    return billAmount;
}

btn15.addEventListener("click", () => { calculateTip(15) });
btn20.addEventListener("click", () => { calculateTip(20) });