# `git init`

## Sistema de control de versiones (VCS)

## ¿Qué es Git?

## [¿Cómo usar la terminal?](#Terminal)

## Mi primer repositorio

---
---

## Sistema de control de versiones (VCS)

---

## ¿Qué es Git?

---

### Git git git git

Es un programa,software, etc

---

## ¿Cómo usar la terminal?

---

### Terminal

linea de comandos (CLI), consola, terminal o _shell_ es una interfaz para comuncarnos con la computadora ejecutando programas

![CLI, GUI, NUI, evolución de interfaces de usuario](./CLI-GUI-NUI_evolución_de_interfaces_de_usuario.png)

1. CLI: intefaz de linea de comando, o Command Line Interface
1. GUI: integaz grafica de usuario, o Graphic User Interface
1. NUI: intefaz natural de usuario, Natural User Interface

---

### Distintas terminales

ya viene instalada en el sistema operatido, pero cada uno tiene la suya:

- Windows
  - CMD
- GNU/Linux y macOS (unix-like)
  - bash

> #### Primer problema ⚠️
>
> git funciona en **bash** o terminales para sistemas operativos unix-like

---

### Usuarios de windows

Hay que instalar **bash** en el OS ([Operating system](https://es.wikipedia.org/wiki/Sistema_operativo)) o sistma operativo

- [Git for Windows](https://gitforwindows.org/)

  1. boton de `Download`
  2. la cosa se pone rara, pero hay que hacer scroll a la parte de `Assets`
  3. descargar el intalador `Git-2.31.1-32-bit.exe` o `PortableGit-2.31.1-32-bit.7z.exe`

- [Cmder](https://cmder.net/) Una mejor copcion y mi recomendada ✨
  1. hacer scroll
  2. boton `Download Full` que dice `(with Git for Windows)`

---

### Primero pasos

vamos a empezar a ejecutar programas para interactuar con la terminal:

- `pwd`: (print working directory) muestra en que directorio o carpeta estamos
- `ls`: (list) lista o miestra el contenido de la carpta actual
- `cd`: (change directory) nos permite movernos o cambiar a otra carpeta

> #### ¿que es el [prompt](https://es.wikipedia.org/wiki/Prompt)? 🤔
>
> carácter o conjunto de caracteres que se muestran en una línea de comandos para indicar que está a la espera de órdenes.
>
> suele dar info de donde estamos

---

### Parametros, argumentos, opciones o flags

- `ls -l`: `-l` es una opcion o flag que se le agrega a `ls` para decirle que muestre la version larga (long)
- `ls -a`: `-a` muestra todo (all) los que hay en la carpeta, incluidos achivos ocultos (o que empiezan con `.`)
- `ls <carpeta o path>`: le pasamos el nombre de una carpeta como parametro y nos muestra el contenido esa carpeta

  - `ls Academy`: muestra el contenido del directorio `Academy`

- `cd <carpeta o path>`: nos envia a la carpeta
  - `cd Academy`:

---

### [Path o Ruta](<https://es.wikipedia.org/wiki/Ruta_(inform%C3%A1tica)>)

es la ruta o ubicacion de un archivo o carpeta, puede ser **absoluta** o **relativo**

#### Path absoluto

es la ruta _completa_ a la carpeta o archivo en cuastion, **es unica!**

- en windows:
  - `C:\Users\tomasdisk\Documents\repos\`
  - `C:\Users\tomasdisk\Documents\repos\archivo.txt`
- en linux o mac
  - `/home/tomasdisk/Documents/repos/` (linux)
  - `/Users/tomasdisk/Documents/repos/archivo.txt` (mac)

---

### [Path o Ruta](<https://es.wikipedia.org/wiki/Ruta_(inform%C3%A1tica)>)

#### Path relativo

es la direccion a un archivo o carpeta desde otra carpeta

- en windows:
  - `Documents\repos\`
  - `.\Documents\repos\archivo.txt`
- en linux o mac
  - `Documents/repos/`
  - `./Documents/repos/archivo.txt`
  - `../Downloads/`

> #### Info 💡
>
> - carpeta `.`: es la carpeta actual, donde estamos ahora, podemos ver cual es con `pwd`
> - carpeta `..`: es la carpeta que contiene a la actual, si hacemos `cd ..` nos envia a la carpeta previa

---

### Más comandos

- `mkdir`: (make directory) crea un nuevo directorio

  - `mkdir nueva_carpeta`: crea un directorio o carpeta llamado `nueva_carpeta`

- `cp <origen> <destino>`: (copy) crea una copia de un archivo
  - `cp archivo_original archivo_copia`: copia el archivo llamado `archivo_original` creando uno nuevo llamado `archivo_copia`

---

### Más comandos (o programas) 🤯

- `mv <origen> <destino>`: (move) mueve un archivo, tambien se usa para renombrar un archivo

  - `mv Downloads\archivo.txt Documents\repos\info.txt`: mueve el archivo `archivo.txt` ubuncado en `Downloads` a la carpeta `Documents\repos\` cambiandole el nombre a `info.txt`

- `rm <archivo>`: (remove) elimina un archivo o carpeta si se usa el flag `-r` de recursión
  - `rm Documents\repos\info.txt`: elimina el archivo `info.txt` en el directorio `Documents\repos\`
  - `rm -r Documents\repos`: elimina la carpeta `Documents\repos\` y todos los archivos y carpetas que contenga

---

## Mi primer repositorio

#### Recordemos

Un repocitorio es una carpeta (con archivos y subcarpetas dentro) controlada por git para getionar los cambios y el historial de su contenido. Hay dos formas de crear un repocitorio.

Vamos a

1. crear una carpeta

```
mkdir mi-repocitorio
```

2. nos metemos adentro

```
cd mi-repocitorio
```

3. vamos convertirla en un repocitorio usando git

```
git init
```

🎉 🎉 🎋

---

### Un nuevo mejor amigo `git status`

Este comando lo vamos a usar todo el tiempo, nos va a mostrar el estado actual del repocitorio

```
git status
```

nos va a devolver algo como esto

```
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

dice que estoy en la rama *master*, todavia no hay commits y no hay nada para commitear.

> #### Info:
>
> siempre lean lo que devuelven los comandos, suelen venir con consejos de como continuar 😉

---

### Nuevos cambios

Vamso a crear algunos archivos (`README.md` y `script.js`) en el repo para luego agregarlos a la historia de git.

Ahora si hago `ls` en al carpeta del repo, me va a mostrar los archivos recien creados

```
README.md  script.js
```

pero `git status` no va a mostar como git ve al repo

```
$ git status
```
> 💥 el `$` no va en la consola

---
### git status

`$ git status` no va a mostar como git ve al repo
> 💥 el `$` no va en la consola


```
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
	script.js

nothing added to commit but untracked files present (use "git add" to track)
```

dice que estoy en la rama *master*, todavia no hay commits, 

**hay 2 archivos sin trackear** y no hay nada agregado para commitear.

Usar `git add` para tracker 🤔

---

### git add

_recordar working_directory_

**hay 2 archivos sin rastrear!**

`git add <file>...` va a preparar nuestros archivos para ser incluido en el proximo commit

voy a _stagear_ el archivo `README.md`
```
$ git add README.md
```

ahora los cambios que tenemos en el archivo estan preparados para entrar en el proximo paquete.

---
### Como vamos?

```
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	script.js
```
dice que estoy en la rama *master*, todavia no hay commits, 

**hay 1 _cambio_ para commitear** y 1 archivo sin trackear.

---
### Nuevos cambios

Ahora edito/cambio el archivo `README.md` y vuelvo a ejecutar `git status`

```
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	script.js
```
En `README.md` hay _cambios_ preparados (staged) para el proximo commit y cambios que no estan staged (preparados).

---

Para incluir los nuevo cambios usamos `git add README.md` otra vez

```
$ git add README.md
$ git status 
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	script.js
```

> 💥 el `$` al pricipio de los comando no va en la consola
> 
> esta para que se entienda que se ejecutan de a uno a la vez
---

### Mi primer commit

Llego el momento de crear el primer commit con los cambios ya preparados!

```
git commit -m "Primer commit de mi primer repo :D"
```

Se creo un commit con el mensaje `Primer commit de mi primer repo :D`


---

### git remote add

```
git remote add <repo_url>
```

```
git remote add origin git@github.com:tomasdisk/test-1.git
```

```
git branch -M main
```

---

### git push

```
git push -u origin main
```

> solo va a funcionar si tenemos permisos de escritura para el repo

---

### git clone

La segunda forma de crear un repocitorio 😸

```
git clone <repo_url>
```

### Ultimo comando

```
git log
```

> salir apretando `q`
---

### Ejercicios

#### 1. Primer repo
* Crear un repo
* agregar y editar varios archivos
* preparatlos (_stagearlos_)
* crear el primer commit

#### 2. Github
* Crearse una cuenta en github
* crear un repo en github
* publicar el repo del ejercicio 1

#### 3. Clonar
* clonar su propio repo (o el de alguien mas)
* hacer cambios
* publicar los nuevos commits

---

### Resumen

Todos los comando usados en la clase ✨

> 💥 el `$` al pricipio de los comando no va en la consola
> 
> esta para que se entienda que se ejecutan de a uno a la vez

### crear el repo
```
$ mkdir mi-repo
$ cd mi-repo
$ git init
$ git status
```
#### crear los archivos `README.md` y `script.js` usando el comando `echo`
```
$ echo "# Hola" > README.md
$ echo "const saludo = 'Hola mundo'; console.log(saludo);" > script.js
$ ls
$ git status
```
#### preperar lso cambios para el proximo commit
```
$ git add README.md
$ git status
```
#### editar `README.md` y volver a preperar los cambios
```
$ cat README.md
$ echo "# Hola mi repo" > README.md
$ git status
$ git add README.md
$ git status
```
#### crear primer commit
```
$ git commit -m "Primer commit de mi primer repo: D"
$ git status
```
#### agregar _origin_ como repocitorio remoto y cambiar la rama __default__ de _master_ a _main_
```
$ git remote add origin https://github.com/tomasdisk/test-1.git
$ git branch -M main
$ git status
```
#### publicar los commits creados
```
$ git push -u origin main
$ git status
```