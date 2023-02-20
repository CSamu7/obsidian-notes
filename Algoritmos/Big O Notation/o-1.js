const o1 = (arr, index) => {
  return arr[index]
}

const arrayPequenio = Array.from(Array(10).keys()) 
const arrayMediano = Array.from(Array(100).keys()) 
const arrayLargo = Array.from(Array(1000).keys()) 

console.time("Prueba")

/*Array pequeño: 3.17ms, 3.136ms */
/*Array mediano: 3.135ms, 3.109ms */
/*Array largo: 3.841ms, 3.468ms, 3.218ms, 3.235ms, 3.416ms*/

console.log(o1(arrayLargo, 32))
    
console.timeEnd("Prueba")
