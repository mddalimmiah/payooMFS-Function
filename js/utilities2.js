
// এই ফাংশন এর মাধ্যমে আমরা বারবার আইডি গুলো ব্যবহার করতে পারবো।  এটাই ফাংশন এর মজা। 
function getInputFieldValueById(id){
const inputValue=document.getElementById(id).value;
const inputNumber=parseFloat(inputValue); // একটা তে পরিবর্তন করলে ২ টাে তে পরিবর্তন হবে। 
// console.log(id, inputValue, inputNumber)
return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const TextNumber=parseFloat(textValue);
    return TextNumber;
}

function showSectionById(id){
    // hide all the section
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provide id as parameter ( ‍দেখাবে যেইটা তে প্যারামিটিার দিয়ে দেখাবো)
    document.getElementById(id).classList.remove('hidden');
}