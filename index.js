//vamos a elimar algo men
const {ayuda} = require("./helper.js");
//cohen maldoand
const add = (ns)=>{
let acumulado = 0;
        for(i = 0; i < ns.length; i++){
        acumulado += ns[i];
     }
    return acumulado;
}
//un poco de texto para eliminar 
ayuda();

const numbers = [1,2,3,4,5];
//const multiply = numbers.map(x => x * 2);

//Pares de arrays
//const two = numbers.map(x => [x,x])
//console.log(two)

const pets = [
{name: "cohen", age: 5, type:"person" },
{name: "Killer", age: 5, type:"dog" },
{name: "Kissy", age: 3, type:"dog" },
{name: "mishu", age: 1, type:"cat" },
]

const arrayAge = pets.map(x => x.age)
console.log(arrayAge);

const arrayName = pets.map(z => z.name)
console.log(arrayName)

const result = add(arrayAge);
console.log(result /arrayAge.length);
//const result = add(pets)
//console.log(result)


//console.log(multiply);

//metodo para filtrar elemntos de un array

const numbers2 = [1,2,3,4,5,6,7,8,9,10];

const pets2 = [
{name: "Raul", age: 1, type:"cat" },
{name: "Killer", age: 5, type:"dog" },
{name: "Kissy", age: 3, type:"dog" },
{name: "mishu", age: 1, type:"cat" },
]

const filterPets2 = pets2.filter( x => x.type == "dog" )
console.log(filterPets2)

const filterCats = pets2.filter( x => x.name == "Raul")
console.log(filterCats)


const filter = numbers2.filter( x => x < 5 )
console.log(filter, numbers2)

//Reduce, funciones reducer

const pets3 = [
{name: "Raul-cohen", age: 1, type:"cat" },
{name: "Killer", age: 5, type:"dog" },
{name: "Kissy", age: 3, type:"dog" },
{name: "mishu", age: 1, type:"cat" },
]

const indexed = pets3.reduce((acc,el) => ({
    ...acc,
    [el.name] : el,
}),{}) 

console.log(indexed)

const  numbers4 = [1,2,3,4,5,6,7,8,9,10];
const xxx = numbers4.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(xxx)
