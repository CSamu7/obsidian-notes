Este modulo nativo de node.js nos permite crear un servidor.

```js
const {createServer} = require("http")
const server = createServer(() => {
  console.log("Servidor contesta")
})

server.listen(3000)
```

Con la función createServer() podemos crear un servidor y uno de sus parametros recibe una función donde declaramos que **va a realizar cuando recibamos una solicitud**

Con server.listen(port) ponemos al servidor a recibir peticiones.

```js
const {createServer} = require("http")
const server = createServer((req, res) => {
  res.end("Contestado")
})

server.listen(3000)
```

La función que tenemos en createServer tiene como parametros req y res. Esto nos trae todos los datos de la **request** y todos los datos del **response**

**res.end** es uno de los varios metodos que nos sirve para contestar al usuario que envio la solicitud.

```js
const {createServer} = require("http")

const server = createServer((req, res) => {
  console.clear()
  console.log(req.method)
  console.log(req.url)
  console.log(req.headers)
  res.end("Contestado")
})
server.listen(3000)
```

Con el codigo de arriba, cuando enviamos una solicitud PUT obtenemos lo siguiente:
![[Pasted image 20230218211133.png]]

¿Y donde queda el body? Bueno, node para mejorar el rendimiento no lo trae por defecto, tu lo tienes que armar. Además, node parte el body en trozos en caso de que este sea muy grande.

Con el evento on del request, podemos ir armando el body nosotros mismos:

```js
  let data = ""
  req.on("data", (chunk) => {
    data += chunk
  })

  console.log(data)
  res.end("Contestado")
```
Pero si tratamos de hacer un console.log de data luego del evento, no nos aparecera la data. Esto pasa porque no sabemos cuando va acabar la función de iterar, y para el momento que queramos ver los resultados a conexion ya se habria cerrado. 
Para saber cuando ya hayamos juntado toda la data, **tenemos el evento req.on("end")**

```js
  req.on("data", (chunk) => {
    data += chunk
    chunkIndex++
    console.log(chunkIndex)
  })
  
  req.on("end", () => {
    if(req.method === "GET"){
      if(req.url === "/api/v1/task"){
        return res.end("Datos de tarea")
      }else if(req.url === "/api/v1/tasks"){
        return res.end("Varias tareas")
      }else{
        return res.end("Datos random")
      }
    }
    res.end("Contestado")
  })
```

Aquí esta el ejercicio completo, y eso es solo para responder a una solicitud GET con dos rutas determinadas. Solo hay que imaginar cuando tengamos que manejar decenas de rutas además de que estas rutas podran tener sus metodos GET, POST, PATCH, DELETE.