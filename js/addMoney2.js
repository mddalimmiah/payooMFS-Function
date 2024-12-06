
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('input-add-money');

    if(isNaN(addMoney)){
        alert('failed to add money');
        return; // return na korle habijabi dekhabe transaction hoye gece
    }
    const pinNumber=getInputFieldValueById('input-pin-number');
    // console.log('input add money inside addmoney2',addMoney, pinNumber);

    // ভ্যারিভাই পিন নাম্বার
// ভুল ভাবে ভ্যারিফাই করছি আপাতত 
    if(pinNumber===1234){
        const balance=getTextFieldValueById('account-balance');
        const newBalance=balance + addMoney;
        // console.log(newBalance, addMoney)
        document.getElementById('account-balance').innerText=newBalance;

        // add to transaction history:

        const p=document.createElement('p');
        p.innerText=` Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p)

        // should be a common function:
        document.getElementById('transaction-section').appendChild(p);
    }
    else{
        alert('failed to add money! please try again later!')
    }
});
    
