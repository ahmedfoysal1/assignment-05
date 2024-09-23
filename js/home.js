// const specificDate = new Date(2088, 0, 30);
// specificDate.setMonth(11);
// console.log(specificDate.toLocaleString('en-GB'))
// const today = new Date();
// const date = new Date('2062-09-13');
// console.log(date.toLocaleDateString('en-GB'));
// console.log(date.getMonth())
// console.log(date.getDay())

const inputFeni = document.getElementById('feni-input');
const donatedMoney = document.getElementById('donated-money');
const accountBalance = document.getElementById('main-balance');
document.getElementById('donate-btn1').addEventListener('click', function () {
    const feniValueEl = inputFieldById('feni-input');
    const feniText = inputTextById('donated-money')
    const balanceText = inputTextById('main-balance');
    if (isNaN(feniValueEl)) {
        alert('Please Input Amount Of Number');
        return;
    }
    else if(feniValueEl < 0){
        alert('Please Input a Number');
        inputFeni.value = '';
        return;
    }
    else if (feniValueEl > balanceText) {
        return alert("Insufficient Balance")
    }
    else {
        const newBalance = balanceText - feniValueEl;
        accountBalance.innerText = newBalance;
        const totalDonatedMoney = feniValueEl + feniText;
        const newDonatedMoney = totalDonatedMoney;
        donatedMoney.innerText = newDonatedMoney;
        document.getElementById('my_modal_1').showModal();
        inputFeni.value = '';
    }

})

const inputNoakhali = document.getElementById('noakhali-input');
const donatedMoneyNoakhali = document.getElementById('donated-money2');
const accountBalanceNoakhali = document.getElementById('main-balance');

document.getElementById('donate-btn2').addEventListener('click', function () {
    const feniValueEl = inputFieldById('noakhali-input');
    const feniText = inputTextById('donated-money2');
    const balanceText = inputTextById('main-balance');
    if (isNaN(feniValueEl)) {
        alert('Please Input Amount Of Number');
        return;
    }
    else if(feniValueEl < 0){
        alert('Please Input a Number');
        inputFeni.value = '';
        return;
    }
    else if (feniValueEl > balanceText) {
        return alert("Insufficient Balance")
    }
    else {
        const newBalance = balanceText - feniValueEl;
        accountBalance.innerText = newBalance;
        const totalDonatedMoney = feniValueEl + feniText;
        const newDonatedMoney = totalDonatedMoney;
        donatedMoneyNoakhali.innerText = newDonatedMoney;
        document.getElementById('my_modal_1').showModal();
        inputNoakhali.value = '';
    }

})



const inputQuota = document.getElementById('input-quota');
const donatedMoneyQuota = document.getElementById('donated-money3');
const accountBalanceQuota = document.getElementById('main-balance');

document.getElementById('donate-btn3').addEventListener('click', function () {
    const feniValueEl = inputFieldById('input-quota');
    const feniText = inputTextById('donated-money3')
    const balanceText = inputTextById('main-balance');
    if (isNaN(feniValueEl)) {
        alert('Please Input Amount Of Number');
        return;
    }
    else if(feniValueEl < 0){
        alert('Please Input a Number');
        inputFeni.value = '';
        return;
    }
    else if (feniValueEl > balanceText) {
        return alert("Insufficient Balance")
    }
    else {
        const newBalance = balanceText - feniValueEl;
        accountBalanceQuota.innerText = newBalance;
        const totalDonatedMoney = feniValueEl + feniText;
        const newDonatedMoney = totalDonatedMoney;
        donatedMoneyQuota.innerText = newDonatedMoney;
        document.getElementById('my_modal_1').showModal();
        inputQuota.value = '';
    }

})