function main(){
    class BankingApp{
        #AccountNumber;
        #Balance;

        constructor(AccountNumber){
            this.#AccountNumber = AccountNumber;
            this.#Balance = 0;

        }

        get getBalance(){
            return this.#Balance;
        }

        set setbalance(value){
            if(value>0){
                this.#Balance = value;
            }
            else{
                console.log("Invalid Balance")
            }
        }

        // deposit function 
        deposit(amount){
            if(amount>0){
                this.#Balance += amount;
            }
            else{
                console.log("enter a valid amount")
            }
        }

        // withdraw balance
        withdraw(amount){
            if(amount>=this.#Balance){
                console.log("insufficient Balance");
            }
            else if(amount > 0){
                this.#Balance -= amount;
            }
            else{
                console.log("Enter a valid Amount");
            }
        }

    }

    const myAccount = new BankingApp("12345");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getBalance);
    return BankingApp;
}

main();