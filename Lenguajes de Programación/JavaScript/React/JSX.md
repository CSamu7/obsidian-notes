Es una sintaxis diseñada para la librera de React que nos permite escribir etiquetas HTML en javascript.

```jsx
const title = "Soy un titulo"

return (
	<h1>{title}</h1>
)
```

Al final estas etiquetas HTML es azucar sintetizado, lo que realmente hace React es esto:
```jsx
/*Azucar sintetizada*/
const Title = () => {
  return (
    <>
      <h1>{title}</h1>
      <p>Esto es una descripción</p>
    </>
  )
}
```

```js
/*Detrás*/
var Title = function Title() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, "Esto es una descripci\xF3n"));
};
```

## Reglas
###  1. Regresar una sola etiqueta
 En nuestros componentes solo se podrá regresar una etiqueta. Por ejemplo:
```jsx
const Title = () => {
  return (
     <h1>{title}</h1>
     <p>Esto es una descripción</p>
  )
}
```

Aquí React nos estaría marcando un error; ¿Por que?, sencillamente por que estos  
## Referencias:
1. 1. [¿Qué es JSX? ¿Por qué usamos JSX en React y como funciona? (matiashernandez.dev)](https://www.matiashernandez.dev/blog/post/que-es-jsx-por-que-usamos-jsx-en-react-y-como-funciona)
2. [Writing Markup with JSX (reactjs.org)](https://beta.reactjs.org/learn/writing-markup-with-jsx)