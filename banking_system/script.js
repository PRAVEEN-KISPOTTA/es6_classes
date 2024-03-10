function main() {
    //create your class here with the name Account with all the private properties and getter and setter
    class Account{
        #accountNumber;
        #balance;

        constructor(accountNumber){
            this.#accountNumber = accountNumber;
            this.#balance = 0;
        }

        get getbalance(){
            return this.#balance;
        }

        set setbalance(money){
            if(money >= 0){
                this.#balance += money;
            }
            else{
                console.log("Please enter a positive value for the balance")
            }
        }
        deposit(money){
            this.#balance += money;
        }

        withdraw(money){
            if(money <= this.#balance){
                this.#balance -= money;
            }
            else{
                console.log("Insufficient balance");
            }
        }
    }
  
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }
  main();