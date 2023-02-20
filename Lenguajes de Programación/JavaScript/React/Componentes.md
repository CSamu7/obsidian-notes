Son elementos UI que son independientes y reutilizables que podemos usar en nuestra página. Por ejemplo:

![[Pasted image 20230105133055.png]]

Vemos que la tarjeta que muestra los articulos es basciamente la misma. Tiene un titulo, un precio, estrellas (si hay opiniones escritas), ¿cuando lo recibes? (si hay stock), si tiene envio gratis por Amazon. Se esta reutilizando el mismo formato en cada resultado que nos da la página.

## Caracteristicas.
1. Los componentes se escriben en PascalCase. Esto es para que React pueda diferenciar un elemento HTML a un elemento creado por nosotros mismos.
```jsx
/*Nombre del archivo: Sign.jsx*/
export default function (props) {
  return (
    <div className={styles.sign}>
      <h2 className={styles.signTitle}>{props.title}</h2>
    </div>
  );
}
```
2. Deben que ser funciones puras. No pueden modificar variables u objetos que existian antes de la función. 

## Referencias:
1. [Your First Component (reactjs.org)](https://beta.reactjs.org/learn/your-first-component)
2. [Keeping Components Pure (reactjs.org)](https://beta.reactjs.org/learn/keeping-components-pure)
3. 