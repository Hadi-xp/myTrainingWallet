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
    const expense = document.querySelector('#expense');
    const amount = document.querySelector('#amount');
    if(expense.value == '' || amount.value == ''){
        alert('Please Fill All Fields');
    }else{
        const ul = document.querySelector('.list-group');
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        span.textContent = expense.value;
        span2.textContent = amount.value;
        li.appendChild(span);
        li.appendChild(span2);
        ul.appendChild(li);
        expense.value = '';
        amount.value = '';
    }
  
   
})
































