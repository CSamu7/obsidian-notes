![[Pasted image 20230121204839.png]]
Es un sistema de control de versiones lanzado en 2005. Toma inspiración de la herramienta BitKeeper.

Sus caracteristicas tuvieron que ser:
1. Velocidad
2. Diseño sencillo
3. Desarrollo no lineal
4. Distribuido
5. Manejo de grandes proyectos

# Fundamentos
## Manejo de información
Maneja los datos como un conjunto de copias instantaneas a diferencia de otros CVS. 
![[Pasted image 20230131221304.png]]
*Otros CVS*

Cada vez que se confirma un cambio o se guarda el estado de un proyecto en Git, el toma una "foto" del aspecto de todos los archivos y guarda una referencia a esa copia instantanea
![[Pasted image 20230131221214.png]]
*Manejo de Git*
## Local
La mayoria de operaciones que tiene Git son locales ya que no necesita conectarse a un servidor para revisar el historial del proyecto, simplemente la lee de tu base de datos local.

Si quieres ver los cambios entre el archivo actual y la de hace un mes, Git puede buscarlo y hacer un calculo de diferencias localmente.

## Integridad
Todo es verificado mediante un [[cheksum]] antes de ser almacenado. Esto significa que es imposible cambiar los contenidos de cualquier archivo o directorio sin que Git lo sepa.
![[Pasted image 20230131222328.png]]El mecanismo que usa Git para generar una suma de comprobación se conoce como [[SHA-1]]. Git usa mucho estos valores, por ejemplo, el no guarda los archivos por su nombre, sino por el valor hash de sus contenidos.

## Generalmente solo se añade información
Es muy dificil perder información en Git, y solo llegaría a pasar cuando los cambios no se han confirmado. Pero despues de confirmarla, es muy dificil de perderla.

## Los 3 estados
### Modified
Se ha modificado el archivo, pero no se ha confirmado en la base de datos.
### Staged
Significa que has marcado que el archivo vaya a guardarse en la base de datos.
### Committed
Significa que los datos estan almacenados de forma segura en tu base de datos local

## Secciones de Git
### Working directory
Es una copia de una version del proyecto
### Staging Area
Es un archivo que almacena información acerca de lo que va ir en tu proxima confirmación. 
### Repository
Es donde se almacenan los metadatos y la base de datos de objetos para tu proyecto. Es la parte mas importante de Git ya que permite clonar un repositorio a otra computadora.

El flujo de trabajo es algo así:
1. Modificas unos archivos en tu directorio de trabajo
2. Preparas los archivos, añadiendolos a la area de preparacion
3. Se confirman los cambios.
