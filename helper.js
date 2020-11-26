module.exports.ayuda = () => {
const Elpato = [
  {name:"amarillo", age:20, type:"white"},
] 

const Patos = Elpato.reduce((acc,el)=>({
...acc,
  [el.name]:el,
}),{})
console.log(Patos);
}
