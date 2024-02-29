const accountId = 144553
let accountEmail = "gchetan@gmail.com"
var accountPassword = "54321"
accountCity = "Hyderabad"

// accountId = 2 // not allowed 

accountEmail = "gc@gmail.com"
accountPassword = "256464"
accountCity = "Delhi"
let accountState;

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope

*/ 



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])