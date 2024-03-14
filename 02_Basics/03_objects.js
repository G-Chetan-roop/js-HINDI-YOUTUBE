// singleton 
// Object.create -- > constructor method of creation singleton is created
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chetan",
    "full name": "chetang",
    [mySym]: "mykey1",
    age: 18,
    location: "Hyderabad",
    email: "1gcet.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser)

// JsUser.email = "chetan@google.com"
// Object.freeze(JsUser)
// JsUser.email = "chet@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User")
}

console.log(JsUser.greeting());