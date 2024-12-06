
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('input-add-money');
    const pinNumber=getInputFieldValueById('input-pin-number');
    // console.log('input add money inside addmoney2',addMoney, pinNumber);

    // ভ্যারিভাই পিন নাম্বার
// ভুল ভাবে ভ্যারিফাই করছি আপাতত 
    if(pinNumber===1234){
        const balance=getTextFieldValueById('account-balance');
        const newBalance=balance + addMoney;
        // console.log(newBalance, addMoney)
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('failed to add money! please try again later!')
    }
});
    
