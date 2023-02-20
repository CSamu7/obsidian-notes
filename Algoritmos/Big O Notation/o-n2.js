const oN = (arr) => {
  arr.forEach(key => {
    console.log(arr[key])
  })
}

const arrayPequenio = Array.from(Array(10).keys()) 
const arrayMediano = Array.from(Array(100).keys()) 
const arrayLargo = Array.from(Array(1000).keys()) 

console.time("Prueba")

/*Array pequeño: 4.918ms, 4.967ms*/
/*Array mediano: 15.46ms, 17.736ms, 15.906ms, 15.616ms */
/*Array largo: 116.457ms, 117.609ms, 115.515ms*/

console.log(oN(arrayLargo, 32))
    
console.timeEnd("Prueba")
