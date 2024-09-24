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
    const date = new Date();
    date.getMonth();
    date.getHours();
    date.getMinutes();
    if (isNaN(feniValueEl)) {
        alert('Please Input Amount Of Number');
        return;
    }
    else if(feniValueEl < 0){
        alert('Please Input Valid Number');
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
        const div = document.createElement('div');
        div.innerHTML = `<div class="lg:flex flex-col p-6 text-lg font-bold mx-auto h-28 rounded-lg container mt-6 w-3/4 border-2 border-slate-200">
                           <p>${feniValueEl} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
                           <p class="text-base text-text-color font-normal">Date: ${date}</p>
                           </div>
                           

        `
        document.getElementById('transaction-histryBtn').classList.add('hidden');
        const historySection = document.getElementById('history-section');
        historySection.appendChild(div);
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
    const date = new Date();
    date.getMonth();
    date.getHours();
    date.getMinutes();
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
        const div = document.createElement('div');
        div.innerHTML = `<div class="lg:flex flex-col p-6 text-lg font-bold mx-auto h-28 rounded-lg container mt-6 w-3/4 border-2 border-slate-200">
                           <p>${feniValueEl} Taka is Donated for Flood Relief at Noakhali, Bangladesh</p>
                           <p class="text-base text-text-color font-normal">Date: ${date}</p>
                           </div>
                           

        `
        document.getElementById('transaction-histryBtn').classList.add('hidden');
        const historySection = document.getElementById('history-section');
        historySection.appendChild(div);
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
    const date = new Date();
    date.getMonth();
    date.getHours();
    date.getMinutes();
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
        const div = document.createElement('div');
        div.innerHTML = `<div class="lg:flex flex-col p-6 text-lg font-bold mx-auto h-28 rounded-lg container mt-6 w-3/4 border-2 border-slate-200">
                           <p>${feniValueEl} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                           <p class="text-base text-text-color font-normal">Date: ${date}</p>
                           </div>
                           

        `
        document.getElementById('transaction-histryBtn').classList.add('hidden');
        const historySection = document.getElementById('history-section');
        historySection.appendChild(div);
        inputQuota.value = '';
    }

})