Nos permite posicionar los elementos.

# Conceptos basicos
1. Flujo de renderizado: Los elementos se dibujan de izquierda a derecha y de arriba abajo.
2. Espacio reservado: Es el espacio que tiene un elemento asignado en el navegador
3. Elemento posicionado: Cuando en su propiedad position tiene un valor distinto a **static**.
4. [[stacking context]]

# Propiedades
1. z-index: Nos permite mover el elemento en el [[stacking context]]

# Valores 
1. **static**: Es el valor que tiene por defecto un elemento.
2. **relative**: El elemento mantendra su posicion y medidas en el flujo y mantendra su espacio reservado. Si se mueve, usara su espacio reservado como punto de referencia.
3. **absolute**: El elemento perdera sus medidas y su espacio reservado. Si lo movemos, usara el elemento padre como referencia. Si no tiene, usara el elemento html.
4. **fixed**
5. **sticky**