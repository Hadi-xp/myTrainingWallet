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




























