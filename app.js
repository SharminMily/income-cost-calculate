
document.getElementById('calculate').addEventListener('click', function(){
    const incomeFieldValue = document.getElementById('income');
    const incomeField = incomeFieldValue.value;       

    const incomeFieldNum = parseFloat(incomeField);
     
    const foodField = document.getElementById('food').value;
  
    const rentField = document.getElementById('rent').value;
  
    const otherField = document.getElementById('other').value;

       const sum = parseFloat(parseFloat(foodField) + parseFloat(rentField) + parseFloat(otherField));
  

        const totalExp =  document.getElementById('total-exp').innerHTML = sum;

        const totalBalance = parseFloat(incomeFieldNum - sum);
        
        const balance =  document.getElementById('balance');
        balance.innerText = totalBalance;                     
        
})   

document.getElementById('saving-btn').addEventListener('click', function(){
    const savingField = document.getElementById('saving').value;      
    const savingValue  = parseFloat(savingField) 
    
    const incomeField = document.getElementById('income').value;
    const incomeFieldNum = parseFloat(incomeField);

    const savingDis = incomeFieldNum / 100;
    const savings = savingDis * savingValue;  
    const mySaving =  parseFloat(savings.toFixed(2));  
  

    const savingAmount = document.getElementById('saving-amount'); 
    savingAmount.innerText = mySaving;   

    const balances = balance.innerText;    

    const remaining = parseFloat(balances) - mySaving  ;
    

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remaining.toFixed(2);               
})  


// click go home button then clean all calculation
document.getElementById('go-home').addEventListener('click', function(){        
    const incomeFieldValue = document.getElementById('income');
    incomeFieldValue.value ="";

    const foodField = document.getElementById('food')
    foodField.value = '';

    const rentField = document.getElementById('rent')
    rentField.value = '';

    const otherField = document.getElementById('other')
    otherField.value = '';

    const savingField = document.getElementById('saving');
    savingField.value= '';

    const totalExp =  document.getElementById('total-exp')
    totalExp.innerText = "00";

    const balance =  document.getElementById('balance')
    balance.innerText = "00";

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = 0;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = 0;
})

