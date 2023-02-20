Libreria que permite simplificar el [[Modulo HTTP]].

## Creando el servidor
```js
const createExpressServer = require("express")
const PORT = 3000
const expressApp = createExpressServer()

expressApp.listen(PORT, () => {
  console.log("Servidor levantado")
})
```

Empezamos de manera similar como los modulos HTTP. Tenemos la función createExpressServer que nos crea una aplicación Express ademas de que podemos hacer que el servidor empiece a escuchar las solicitudes.

## Endpoints
La aplicación ya tiene como metodos los get, post, put, patch y delete:
```js
expressApp.get("/api/v1/task", (req, res) => {
  res.send("Tu tarea")
})

expressApp.post("api/v1/task", (req, res) => {
  res.send("Publicando tarea")
})
```
Para poder recibir un valor y guardarlo en una variable, por ejemplo, si necesitamos que nos envien una ID para una cuenta, podemos hacer lo siguiente:
```js
expressApp.get("/api/v1/task/:idtask", (req, res) => {
  console.log(req.params.idtask)
  res.send("Tu tarea")
})
```
## Headers
```js
expressApp.get("/api/v1/task/:idtask", (req, res) => {
  console.log(req.params.idtask)
  res.send("Tu tarea")
})
```