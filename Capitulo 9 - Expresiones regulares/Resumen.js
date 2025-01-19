/*Las expresiones regulares son objetos que representan patrones
en cadenas. Utilizan su propio lenguaje para expresar estos patrones. */

//Las expresiones regulares tienen un modo test para comprobar si
// una cadena dada coincide con ella

/*También tiene un método exec que, cuando se encuentra una coincidencia,
 devuelve un array que contiene todos los grupos coincidentes. */

/* Dicho array tiene una propiedad index que indica dónde empezó la 
coincidencia.
 */

/*Las cadenas tienen un método match para compararlas con una expresión 
regular y un método search para buscar una, devolviendo solo la posición 
de inicio de la coincidencia. */

/*
Su método replace puede reemplazar coincidencias
 de un patrón con una cadena o función de reemplazo.
*/

/* Las expresiones regulares pueden tener opciones, que se escriben 
después de la barra de cierre. La opción i hace que la coincidencia 
no distinga entre mayúsculas y minúsculas. La opción g hace que la 
expresión sea global, lo que, entre otras cosas, hace que el método 
replace reemplace todas las instancias en lugar de solo la primera. 
La opción y la hace persistente, lo que significa que no buscará por 
delante ni omitirá parte de la cadena al buscar una coincidencia. 
La opción u activa el modo Unicode, que habilita la sintaxis \p y 
soluciona varios problemas en torno al manejo de caracteres que 
ocupan dos unidades de código. */
