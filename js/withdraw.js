document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldString = withdrawField.value;
  // console.log(withdrawFieldString);
  withdrawField.value = "";
  const withdrawAmount = parseFloat(withdrawFieldString);
  //   console.log(withdrawAmount);

  if (isNaN(withdrawAmount)) {
    alert("Please, Enter a Number as Amount");
    return;
  }

  const totalBalanceField = document.getElementById("total-balance-field");
  const totalBalanceFieldString = totalBalanceField.innerText;
  const totalBalance = parseFloat(totalBalanceFieldString);
  // console.log(totalBalance);

  if(withdrawAmount > totalBalance){
    alert("Limit Exceed!");
    return;
  }

  const totalWithdrawField = document.getElementById("total-withdraw-field");
  const totalWithdrawFieldString = totalWithdrawField.innerText;
  const totalWithdraw = parseFloat(totalWithdrawFieldString);

  const updateTotalWithdraw = withdrawAmount + totalWithdraw;
  totalWithdrawField.innerText = updateTotalWithdraw;

  const updateBalance = totalBalance - withdrawAmount;
  totalBalanceField.innerText = updateBalance;
});
