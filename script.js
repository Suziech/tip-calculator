const billInput = document.getElementById("bill");
const btn10 = document.getElementById("10%");
const btn15 = document.getElementById("15%");
const btn18 = document.getElementById("18%");
const btn20 = document.getElementById("20%");
const result = document.getElementById("result");

function calculateTip(percentage) {
    const billAmount = Number(billInput.value);
    const tip = billAmount * (percentage / 100);
    const total = billAmount + tip;

    result.innerText = `Tip: $${tip.toFixed(2)} / Total: $${total.toFixed(2)}`
    return billAmount;
}

btn10.addEventListener("click", () => { calculateTip(10) });
btn15.addEventListener("click", () => { calculateTip(15) });
btn18.addEventListener("click", () => { calculateTip(18) });
btn20.addEventListener("click", () => { calculateTip(20) });

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected')); // 다른 버튼 선택 해제
        btn.classList.add('selected'); // 클릭한 버튼 강조
    });
});
