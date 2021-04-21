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