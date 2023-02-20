Es información que le pasas al componente. Estos pueden ser atributos HTML o atributos hechos por nosotros.

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

```jsx
<Sign title="Confidentes"></Sign>
```

Estas props se guardan en un objeto:

```js
{title: 'Confidentes'}
```

# Children
Tenemos un atributo que nos da React al momento de escribir entre las etiquetas de inicio y de cierre.
```jsx
<Sign>Confidentes</Sign>
```

De hecho, nuestro codigo queda algo mejor.
```jsx
export default function (props) {
  return (
    <div className={styles.sign}>
      <h2 className={styles.signTitle}>{props.children}</h2>
    </div>
  );
}
```

## Referencias:
1. [(18) La SINTAXIS de JSX y sus ETIQUETAS 🔵 PROPS y CHILDREN 😎 Curso de React desde cero #5 - YouTube](https://www.youtube.com/watch?v=EMBfiV9RJfg&list=PL3aEngjGbYhkg3AR-cytsvQIIGp1JgrY_&index=5)
2. [Passing Props to a Component (reactjs.org)](https://beta.reactjs.org/learn/passing-props-to-a-component)