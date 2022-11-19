// login btn event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    // disappear
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    // to hide the transaction area
})

// depo btn event handler
    const depositBtn = document.getElementById("addDeposit")
    depositBtn.addEventListener("click" , function(){
        const depositNumber = getInputNumber("depositAmount");
        // const depositAmount = document.getElementById("depositAmount").value;
        // const depositNumber = parseFloat(depositAmount);
        // const currentDeposit = document.getElementById("currentDeposit").innerText;
        // currentDepositNumber = parseFloat(currentDeposit)
        // const totalDeposit = depositNumber + currentDepositNumber;
        
        // document.getElementById("currentDeposit").innerText = totalDeposit;

        updateSpanText("currentDeposit", depositNumber);

        // add any num on deposit btn.

        // main calc
        // const currentBalance = document.getElementById("currentBalance").innerText;
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance = depositNumber + currentBalanceNumber;
        // document.getElementById("currentBalance").innerText = totalBalance;
        
        updateSpanText("currentBalance", depositNumber);


        document.getElementById("depositAmount").value = "";
        // input field 

    })

    // withdraw btn event handler
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click", function(){

        const withdrawNumber = getInputNumber("withdrawAmount");
        // console.log(withdrawNumber);
        //
        // const withdrawAmount = document.getElementById("withdrawAmount").value;
        // console.log(withdrawAmount)
        // turning into number
        // const withdrawNumber = parseFloat(withdrawAmount);
    })


    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }
    // no rep
    function updateSpanText(id, depositNumber) {
         // main calc
         const current = document.getElementById(id).innerText;
         const currentNumber = parseFloat(current);
         const totalAmount = depositNumber + currentNumber;
         document.getElementById(id).innerText = totalAmount;
    }

