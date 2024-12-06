// console.log('connected utilities file');

// repetition কমানোর জন্য এই ফাংশন (যাতে সব যায়গায় ব্যবহার করা যায়)

// common shared function:

// console.log('utilities loaded');

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const addMoney=document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    return inputValue;
}