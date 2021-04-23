# Fundamentos de programación con Javascript
## Historia

A principios de los años 90, la mayoría de usuarios que se conectaban a Internet lo hacían con módems a una velocidad máxima de 28.8 kbps. En esa época, empezaban a desarrollarse las primeras aplicaciones web y por tanto, las páginas web comenzaban a incluir formularios complejos.

Con unas aplicaciones web cada vez más complejas y una velocidad de navegación tan lenta, surgió la necesidad de un lenguaje de programación que se ejecutara en el navegador del usuario. De esta forma, si el usuario no rellenaba correctamente un formulario, no se le hacía esperar mucho tiempo hasta que el servidor volviera a mostrar el formulario indicando los errores existentes.

**Brendan Eich**, un programador que trabajaba en Netscape, pensó que podría solucionar este problema adaptando otras tecnologías existentes (como _ScriptEase_) al navegador Netscape Navigator 2.0, que iba a lanzarse en 1995. Inicialmente, Eich denominó a su lenguaje _LiveScript_.

Posteriormente, Netscape firmó una alianza con Sun Microsystems para el desarrollo del nuevo lenguaje de programación. Además, justo antes del lanzamiento Netscape decidió cambiar el nombre por el de JavaScript. La razón del cambio de nombre fue exclusivamente por marketing, ya que Java era la palabra de moda en el mundo informático y de Internet de la época.

La primera versión de JavaScript fue un completo éxito y Netscape Navigator 3.0 ya incorporaba la siguiente versión del lenguaje, la versión 1.1. Al mismo tiempo, Microsoft lanzó JScript con su navegador Internet Explorer 3. JScript era una copia de JavaScript al que le cambiaron el nombre para evitar problemas legales.

Para evitar una guerra de tecnologías, Netscape decidió que lo mejor sería estandarizar el lenguaje JavaScript. De esta forma, en 1997 se envió la especificación JavaScript 1.1 al organismo ECMA _European Computer Manufacturers Association_).

ECMA creó el comité TC39 con el objetivo de _"estandarizar de un lenguaje de script multiplataforma e independiente de cualquier empresa"_. El primer estándar que creó el comité TC39 se denominó **ECMA-262**, en el que se definió por primera vez el lenguaje ECMAScript.

Por este motivo, algunos programadores prefieren la denominación _ECMAScript_ para referirse al lenguaje JavaScript. De hecho, JavaScript no es más que la implementación que realizó la empresa Netscape del estándar ECMAScript.

La organización internacional para la estandarización (ISO) adoptó el estándar ECMA-262 a través de su comisión IEC, dando lugar al estándar ISO/IEC-16262.

---
## Que es un algoritmo?
Es una sucesion de pasos para llegar a un objetivo.
Dentro de los algoritmos podemos encontrar condiciones, procesar informacion y ejecutar acciones
---
### Algoritmo para encender una lampara
![[lamp-algoritm.png|300]]

---
## Que es un programa?
Un programa informatico o programa de computadora es una secuencia de instrucciones (algoritmos), escritas para realizar una tarea especifica en una computadora.

---
## Que es un lenguaje de programacion?
 Como la computadora solo entiende lenguaje binario ( 0 y 1 ), creamos lenguajes que nos permiten comunicarnos con ella utilizando lenguaje humano (mayormente ingles).
 
---

| Lenguaje maquina        | Lenguaje de programacion|
| ----------------------  | ----------------------- |
| ```1001 1011 0011 0101``` | ```console.log('Hola!');```|

---
Intentemos crear un pequeño programa utilizando el lenguaje de programacion `JavaScript`, pero para eso primero debemos tener en claro 2 conceptos
- Datos
- Logica y control de decisiones

---
## Datos
En los algoritmos mayormente nos encontramos con la necesidad de guardar informacion (Un nombre, un numero, un estado). 
Veamos un ejemplo en la cocina.

---
#### Algoritmo para hacer galletitas
![[cookies-algoritm.png]]

---
## Logica y control de decisiones
*- 'En cualquier lenguaje de programación, el código necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas. Por ejemplo, en un juego, si el el numero de vidas del jugador es 0, entonces se termina el juego.'*

---
El algoritmo anterior, entonces corresponderia al siguiente pseudo codigo:
```javascript
vidaRestante = 0;

si (vidaRestante == 0) {
	// el jugador no tiene vida restante, game over
  	informar('Juego terminado')
} sino {
  	// el jugador esta con vida, continuar el juego
  
}
```
(Notese que usamos '=' para asignar valores y '==' para comparar)

---
### Pero que tal si queremos agregar mas condiciones?
```javascript
vidaRestante = 0;
quieroSeguirJugando = true; // verdadero en ingles

si ((vidaRestante == 0) Y (quieroSeguirJugando == true)) {
  // el jugador no tiene vida y quiere seguir jugando
  // reiniciar el juego
}
```
Aca utlizamos el operador 'Y' para componer dos condiciones, veamos los operadores logicos mas en detalle

---
### Operadores logicos
**Operador AND**
En el ejemplo anterior mezclamos dos condiciones bajo el operador 'Y' (AND), esta composicion de condiciones requiere que ambas condiciones SI O SI sean verdaderas para que la composicion sea verdadera
```javascript
condicionA = true; // verdadera
condicionB = false; // falsa

si (condicionA Y condicionB) {
	// ambas condiciones son verdaderas
} sino {
	// una de las condiciones es falsa
}
```

---
**Operador OR**
El operador AND requiere que ambas condiciones sean verdaderas, pero el operador 'O' (OR) solo requiere que una de las condiciones sea verdadera para que la composicion de ambas sea verdadera
```javascript
condicionA = true;
condicionB = false;

si (condicionA O condicionB) {
	// alguna de las condiciones es verdadera
} sino {
	// ambas condiciones son falsas
}
```

---
### Del pseudocodigo, a JavaScript
Traduzcamos las instrucciones que conocemos hasta ahora

| Español       	| JavaScript			|
| ---  				| --- 					|
| Es igual		 	| `==`					|
| Y 				| `&&`						|
| O 				| <code>&#124;&#124;</code>		|
| si 				| `if` 				    |
| sino 				| `else`				|
| informar('Hola') 	| `console.log('Hola');`  |

---
### Nuestro primer 'Hola mundo' en JavaScript
Ahora si, sabiendo un poco de datos y algo de logica, podemos escribir nuestro primer 'Hola mundo!'
```javascript
if (true) {
	console.log('Hola mundo!');
} else {
	console.log('Adios mundo!');
}
```
Pero y los datos? Como utilizamos variables en JavaScript?

---
## Variables
Una variable esta compuesta por un espacio en memoria y un identificador el cual se usa para acceder a ese espacio en memoria
`codigo en JavaScript`
```javascript
var huevos = 3;
```
- '**var**' es la palabra clave del lenguaje para declarar una variable en la memoria
- '**huevos**' es el identificador -
- **3** corresponde al dato.  (La informacion que nos interesa)

Que tipos de datos existen?

---
## Tipado
Un tipo es un atributo que define ciertas restricciones a los datos,
es decir la clase de dato que va a contener la variable.

| Tipo      		| JavaScript	| Ejemplos 		|
| ---  				| --- 			| --- 			|
| numero 			| `number`		| `4`, `5.3`, `7` |
| texto 			| `string` 		| `"Jose"` 		  |
| verdadero o falso	| `boolean` 	| `true`, `false` |

---

## Algunos ejemplos
```javascript
var foo = "Martin"; //string
var baz = 3; //number
var too = false; //boolean
```

---

##### Algunas operaciones con numeros

```javascript
var a = 3;
var b = 6;
var r1 = a + b; // 9
var r2 = a * b; // 18
var r3 = b - a; // 3
var r4 = b / a; // 2
```
Cuantas variables se declararon en este programa?

---

## Concatenacion de textos
`javascript`
```javascript
var nombre = "Martin";
var apellido = "Gomez";
var nombreCompleto = nombre + " " + apellido // Martin Gomez
```

---
## Tipado dinamico y tipado estatico

En el lenguaje de tipado estatico las variables **no** pueden cambiar de tipo de dato.

Ejemplo en `Java` (Tipado estatico)
```java
	String miNombre = "Juan";
	miNombre = 14; //Error de compilacion
```
---

Ejemplo en `JavaScript` (Tipado dinamico)
```javascript
	var miNombre = "Juan";
	miNombre = 14;
```
En el ultimo ejemplo el programa no presenta errores ya que javascript permite el dinamismo de tipos
Es esto importante?

---
### Curiosidades del tipado y JavaScript
Supongamos que instanciamos las siguientes variables
```javascript
var huevos = "3";
var harina = 3;
```
la variable **huevos** es de tipo texto o numerico?

---
Lo cierto es que la variable **huevos** es de tipo texto al usar  comillas (" ") al instanciarla
```javascript
var huevos = "3"; // string
var harina = 3;   // number
if (huevos == harina) {
	console.log("Son iguales!");
}
// el programa imprime "Son iguales" en pantalla
```
Como evitamos que se imprima en pantalla "Son iguales" ?

---
#### Comparacion por valor y comparacion por tipo
- el comparador == compara valores 
```javascript
var huevos = "3";
var harina = 3;
var comparacionPorValor = ( huevos == harina ) // verdadero
```
- el comparador === compara valor y tipos
```javascript
var huevos = "3";
var harina = 3;
var comparacionPorValor = ( huevos === harina ) // falso
```

---