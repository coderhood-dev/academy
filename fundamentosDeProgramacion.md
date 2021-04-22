## Fundamentos de programación con Javascript
- historia
- conceptos de lenguajes de programacion
- propiedades de javascript como lenguaje de programacion
  
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

si (vidaRestante > 1) {
  // el jugador esta con vida, continuar el juego
} sino {
  // el jugador no tiene vida restante, game over
  informar('Juego terminado')
}
```

---
### Pero que tal si queremos agregar mas condiciones?
```javascript
vidaRestante = 0;
quieroSeguirJugando = true;

si ((vidaRestante > 1) Y (quieroSeguirJugando == true)) {
  // el jugador esta con vida y quiere seguir jugando
  // continuar el juego
} sino {
  // el jugador no tiene vida restante o no quiere
  // seguir jugando, game over
  informar('Juego terminado')
}
```
Aca utlizamos el operador 'y' para unir dos condiciones, veamos estos operadores mas en detalle

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
El operador AND requiere que ambas condiciones sean verdaderas, pero el operador 'o' (OR) solo requiere que una de las condiciones sea verdadera para que la composicion de ambas sea verdadera
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
| Y 				| &						|
| O 				| &#124 				|
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
`javascript`
```javascript
var huevos = 3;
```
'**var**' es la palabra clave del lenguaje para declarar una variable en la memoria, '**huevos**' es el identificador, y **3** el dato. 
Que clases de datos existen?

---
## Tipado
Un tipo es un atributo que define ciertas restricciones a los datos,
es decir la clase de dato que va a contener la variable.
Algunos de tipos  en `JavaScript` son:

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
Cuantas variables se instaciaron en este programa?

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