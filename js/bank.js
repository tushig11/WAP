window.onload = function() {

    function Account() {
        var accountInfoList = [];
        var name = document.getElementById("acc");
        var deposit = document.getElementById("deposit");
        var namePattern = document.getElementById("acc").pattern;
        var depositPattern = document.getElementById("deposit").pattern;
        var reName = new RegExp(namePattern);
        var reDep = new RegExp(depositPattern);

        function printAccounts() {
            document.getElementById("data").innerHTML = " ";
            for (var i in accountInfoList) {
                document.getElementById("data").innerHTML += "Account name: " + accountInfoList[i].name + ", Balance: " + accountInfoList[i].balance + "&#13;&#10;";
            }
        }

        return {

            add: function() {
                console.log(reName.test(name.value));
                if (reName.test(name.value) && reDep.test(deposit.value)) {
                    var newAcc = { name: name.value, balance: deposit.value };
                    accountInfoList.push(newAcc);
                    console.log(accountInfoList);
                    printAccounts();
                } else {
                    alert("Enter Correct information ...");
                }
            }
        };
    }

    var acc = Account();
    var newBtn = document.getElementById("createNew");
    newBtn.onclick = acc.add;
};