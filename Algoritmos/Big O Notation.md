Metrica que nos ayuda a describir el rendimiento complejidad de un algoritmo. 

Esto generalmente solo usa en cuestion de cuanto empieza a sufrir un algoritmo cuando se  empieza a aumentar sus valores de entrada. Hay algoritmos que funcionan bien con 10 valores de entrada, pero que a los 100 valores empiezan a empeorar.

También hay que destacar que no se mide el tiempo, ya que aquí depende de la maquina donde lo estemos usando.

# Tipos
## O(1)
No importa las entradas que tenga, su tiempo de ejecución siempre va a ser el mismo.
## O(n)
Este tipo de algoritmo es lineal, es decir, va a aumentar su tiempo de ejecución si aumentan las entradas.
## O(log n)
Tiende a tardar un poquito mas con entradas pequeñas pero se estabiliza cuando hay mas entradas. Es lo que deseas que sea un algoritmo
## O(n2)
Mientras mas entradas tenga, su tiempo de ejecución aumentara de manera drastica. Es lo que no deseas que sea un algoritmo
## O(n!)
El crecimiento es factorial, mientras mas entradas tenga peor va a ser su tiempo de ejecución. Debes que evitar esta notación en tu codigo.

![[Pasted image 20230103142345.png]]

# Calculo de un algoritmo
Para poder determinar la notación del algoritmo que estemos usando, tenemos las siguientes 

# Referencias
1. [Introducción a Big O Notation. ¿Sabes cuál es la complejidad del… | by Ivan Díaz | Nowports Tech | Medium](https://medium.com/nowports-tech/introducci%C3%B3n-a-big-o-notation-95ecca8bd866)
2. [Notación big O | Programador web Pablo Cianes](https://pablocianes.com/notacion-big-o/)