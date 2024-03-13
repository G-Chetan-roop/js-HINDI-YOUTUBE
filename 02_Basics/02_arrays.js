const marvel_heroes = ["Thor","Ironman","spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes)

const all_new_Heroes = [...marvel_heroes,...dc_heroes]

//console.log(all_new_Heroes);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_Array = anotherArray.flat(Infinity)

// console.log(real_another_Array);

console.log(Array.isArray("CHetan"))
console.log(Array.from("CHetan"))
console.log(Array.from({name :"Chetan"}))// intersting case as it asks about how to change the argument into 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))