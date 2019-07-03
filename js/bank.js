window.onload = function() {

    function Account() {
        var accountInfoList = [];
        var name = document.getElementById("acc");
        var deposit = document.getElementById("deposit");

        function printAccounts() {
            document.getElementById("data").innerHTML = " ";
            for (let i in accountInfoList) {
                document.getElementById("data").innerHTML += "Account name: " + accountInfoList[i].name + ", Balance: " + accountInfoList[i].balance + "&#13;&#10;";
            }
        }

        return {

            add: function() {
                if (name.value && deposit.value) {
                    let newAcc = { name: name.value, balance: deposit.value }
                    accountInfoList.push(newAcc);
                    console.log(accountInfoList);
                    printAccounts();
                } else {
                    alert("Enter your Information ...");
                }
            }
        }
    }

    var acc = Account();
    var newBtn = document.getElementById("createNew");
    newBtn.onclick = acc.add;
}