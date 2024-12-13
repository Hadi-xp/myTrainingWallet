let totalIncome = prompt('Please Add Your Weekly Income');

if(totalIncome !== ''){
    document.querySelector('#total').textContent = totalIncome;
    document.querySelector('#left').textContent = totalIncome
}else{
    while(totalIncome == ''){
        totalIncome = prompt('Please Add Your Weekly Income');
        if(totalIncome !== ''){
            document.querySelector('#total').textContent = totalIncome;
            document.querySelector('#left').textContent = totalIncome
        }
    }
}

const btn = document.querySelector('.btn-primary');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const expense = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;
    console.log(expense);
    console.log(amount);
})





























