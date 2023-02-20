Registra todos los cambios que hayas realizado en un archivo o a un conjunto de archivos en cierta fecha. De este modo puedes recuperar versiones antiguas del archvio mas adelante.
# Tipos
## Local
Se copian los archivos a otro directorio con un nombre en especifico (fecha). Lo malo de este metodo es que es propenso a errores como guardar accidentalmente en otro directorio o sobreescribir archivos que no querias.

Una solucion a esto fue integrar una sencilla base de datos donde registraba todos los cambios a los archivos.

## Centralizado
![[Pasted image 20230121204522.png]]
Su proposito fue que varias personas pudieran colaborar en un mismo "archivo". 

Tienen un solo servidor que contiene todos los archivos versionados. 

Sus ventajas son de que podemos ver que cambios esta haciendo casas usuario y que es mas facil de administrar a comparacion de tener una base de datos para cada cliente.

Su desventaja principal es que si el servidor se cae, nadie podrá hacer cambios hasta que se levante. Si el servidor se corrompe, se podría perder información del proyecto si no hay copias de seguridad.

## Distribuido
![[Pasted image 20230121204531.png]]
Aqui los clientes en vez de descargar una copia de los archivos, aqui replican todo el repositorio permitiendo que si el servidor se llegara a corromper, cualquier cliente podría tener una copia de este mismo.



