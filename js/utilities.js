function inputFieldById(id) {
    const inputAmount = document.getElementById(id).value;
    const inputValue = parseFloat(inputAmount);
    return inputValue;
}

function inputTextById(id) {
    const inputText = document.getElementById(id).innerText;
    const innerInputText = parseFloat(inputText);
    return innerInputText;
}

function showBtn(id){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.add('bg-color');
    // show btn 
    document.getElementById(id).classList.remove('hidden');
    
}

function showColor(id){
    document.getElementById('donation-btn').classList.remove('bg-bg-color');
    document.getElementById('donation-history').classList.remove('bg-bg-color');
    // show color 
    document.getElementById(id).classList.add('bg-bg-color');
}
// const feniValue = inputFeni.value;
// const prFeniValue = parseFloat(feniValue);
// const donatedMoneyCard = donatedMoney.innerText;
// const monyeCardDonate = parseFloat(donatedMoneyCard);
// const newBalance = prFeniValue + monyeCardDonate;
// const accountBalanceText = accountBalance.innerText;
// const mainAccountBalance = parseFloat(accountBalanceText);
// const newAccountBalance = mainAccountBalance - prFeniValue;
// accountBalance.innerText = newAccountBalance;
// donatedMoney.innerText = newBalance;
// inputFeni.value = '';


// onclick="my_modal_1.showModal()"



// class="lg:flex mx-auto h-28 rounded-lg container mt-6 w-3/4 border-2 border-slate-200"