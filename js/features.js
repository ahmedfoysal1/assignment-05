
document.getElementById('donation-btn').addEventListener('click', function(){
    // document.getElementById('donation-btn').style.backgroundColor = 'rgb(180, 244, 97)';
    showColor('donation-btn');
    showBtn('main-section');
    document.getElementById('footer-id').classList.remove('hidden');

})

document.getElementById('donation-history').addEventListener('click',function(){
    showColor('donation-history');
    showBtn('history-section');
    document.getElementById('footer-id').classList.add('hidden');
})