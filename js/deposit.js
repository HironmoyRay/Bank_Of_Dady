document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;
    depositField.value='';
    const depositAmount = parseFloat(depositAmountString);
    console.log(depositAmount);
    if(isNaN(depositAmount)){
        alert("Please, Enter a Number as Amount");
        return ;
    }
   
    const totalDepositField= document.getElementById("total-deposit-field");
    const totalDepositFieldString= totalDepositField.innerText;
    const totalDeposit= parseFloat(totalDepositFieldString);
    // console.log(totalDeposit);
    const updateTotalDeposit = depositAmount + totalDeposit;
    // console.log(updateTotalDeposit);
    totalDepositField.innerText = updateTotalDeposit;


const totalBalanceField = document.getElementById("total-balance-field");
const totalBalanceFieldString = totalBalanceField.innerText;
const totalBalance = parseFloat(totalBalanceFieldString);
// console.log(totalBalance);
const updateBalance = depositAmount + totalBalance;
totalBalanceField.innerText = updateBalance;
})