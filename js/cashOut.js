// console.log('cashOut connected');
// event handlers add kora

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut=getInputFieldValueById('input-cash-out');
    const cashPinNumber=getInputFieldValueById('input-cash-out-pin');

    // console.log('cash out clicked', cashOut, cashPinNumber)

    if(isNaN(cashOut)){
        alert('failed to cash out');
        return;
    }
    if(cashPinNumber===1234){
        const balance=getTextFieldValueById('account-balance');
        if(cashOut>balance){
            alert('You do not have Enough Money to cash out!');
            return;
        }
        const newBalance=balance - cashOut;
        document.getElementById('account-balance').innerText=newBalance;
        console.log('balance here', balance, newBalance)
        
        // add to transaction history:

        const div=document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML=`
        <h2 class="text-2xl font-bold"> Cash Out </h2>
        <p> ${cashOut} .withdraw. new Balance: ${newBalance} </p>
        `
        // appned child kore dibo tahole dekha jabe 
        document.getElementById('transaction-section').appendChild(div);
    }
    else{
        alert('Failed to cash out!, please try again later!');
    }
});