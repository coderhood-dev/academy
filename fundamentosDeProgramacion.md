# Fundamentos de programación con Javascript
## Historia

La historia del lenguaje JavaScript empieza durante la década de los años 90, se vivió un verdadero _boom_ tecnológico, el Internet cobró un protagonismo mayor a nivel mundial y la humanidad inició formalmente su relación con las computadoras. Comenzaron a desarrollarse las primeras aplicaciones web y las páginas web empezaron a incorporar elementos adicionales a su arquitectura, como por ejemplo, formularios complejos

- conceptos de lenguajes de programacion
- propiedades de javascript como lenguaje de programacion
  
---
## Que es un algoritmo?
Es una sucesion de pasos para llegar a un objetivo.
Cocinar es un algoritmo, como se hace una torta?

---
## Que es un programa?
Un programa informatico o programa de computadora es una secuencia de instrucciones (algoritmos), escritas para realizar una tarea especifica en una computadora.

---
## Que es un lenguaje de programacion?
- Es el lenguaje que nos permite comunicarnos con una computadora, utilizando datos, logica y algoritmos para crear software.
---
- Caracteristicas populares de los lenguajes
	- Implementacion (Compilados o interpretados)
	- Tipado dinamico y tipado estatico
	- Tipado debil y tipado fuerte
---
## Variables
Una variable esta compuesta por un espacio en memoria y un identificador el cual se usa para acceder a ese espacio en memoria
`javascript`
```javascript
var edad = 21;
var nombre = "Jose";
```

---
## Tipado
Un tipo es un atributo que define ciertas restricciones a los datos,
es decir la clase de dato que va a contener la variable.
Algunos de tipos  en `JavaScript` son:

- ```boolean``` :  valores logicos `true` or `false` 
- ```string``` : cadenas de texto `'Matias'`
- ```number``` : valores numericos `4` 
- ```array``` : colecciones de datos `[3, 5, 1, 2.4, 7]`

---

## Algunos ejemplos
`javascript`
```javascript
var foo = "Martin"; //string
var baz = 3; //number
var too = false; //boolean
var dias = ["L", "M", "M", "J", "V", "S", "D"]; //array
```

---

##### Algunas operaciones con numeros

`javascript`
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

---

## Logica (condicionales)
*'En cualquier lenguaje de programación, el código necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas. Por ejemplo, en un juego, si el el numero de vidas del jugador es 0, entonces se termina el juego.'*

---
El algoritmo anterior, entonces corresponderia a:
```javascript
var tieneVidaRestante = false;

if (tieneVidaRestante == true) {
  // el jugador esta con vida, continuar el juego
} else {
  // el jugador no tiene vida restante, game over
}
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

---