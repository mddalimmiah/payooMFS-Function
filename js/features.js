// console.log('features file connected')

document.getElementById('show-add-money-form').addEventListener('click', function(){
    // console.log('add money btn clicked')
   showSectionById('add-money-form')
});

document.getElementById('show-cash-out-form').addEventListener('click', function(){
 showSectionById('cash-out-form');
//  console.log('cash out clicked')
});

document.getElementById('show-transactin-history').addEventListener('click', function(){
    showSectionById('transaction-section');
})