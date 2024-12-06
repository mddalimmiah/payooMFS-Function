// console.log('cashOut connected');
// event handlers add kora

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut=getInputFieldValueById('input-cash-out');
    const cashPinNumber=getInputFieldValueById('input-cash-out-pin');

    // console.log('cash out clicked', cashOut, cashPinNumber)
    if(cashPinNumber===1234){
        const balance=getTextFieldValueById('account-balance');
        const newBalance=balance - cashOut;
        document.getElementById('account-balance').innerText=newBalance;
        console.log('balance here', balance, newBalance)
    }
    else{
        alert('Failed to cash out!, please try again later!');
    }
});