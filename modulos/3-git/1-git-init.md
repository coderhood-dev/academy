# Clase 1: `git init`

### Tabla de contenido

1. [Sistema de control de versiones (VCS)](<#Sistema-de-control-de-versiones-(VCS)>)

1. [¿Qué es Git?](#¿Qué-es-Git?)

1. [¿Cómo usar la terminal?](#¿Cómo-usar-la-terminal?)

1. [Mi primer repositorio](#Mi-primer-repositorio)

---

## Sistema de control de versiones (VCS)

---

### Version control system (VCS)

Es un programa o herramienta que nos permite getionar los cambios que suceden en un proyecto a lo largo del tiempo, crea una "historia" del proyecto

Los cambios pueden ser:

- agregar un archivo
- eliminar un archivo
- editar un archivo (modificar el codigo fuente de nuestro proyecto)
- agregar una carpeta

Tambien guarda quien es el autor de los cambios, la fecha

---

### ¿Por qué usar un VCS?

supongamos que arrancamos un proyecto y hasta ahora tenemos lso siguientes archivos:

```
Documentos
└── proyecto
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── informe.pdf
    ├── informe.doc
    └── practica.pdf
```

---

Luego se nos ocurre una mejor manera de hacer el ejercicio2, pero como el que tenemos ya anda, no queremos perderlo...

```
Documentos
└── proyecto
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── ejercicio2_nuevo.js
    ├── informe.pdf
    ├── informe.doc
    └── practica.pdf
```

---

Más tarde le pedimos a un amigo que revise el informe y nos lo devuleve con cambios...

```
Documentos
└── proyecto
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── ejercicio2_nuevo.js
    ├── informe.pdf
    ├── informe.doc
    └── informe_de_ema.doc
```

---

con el tiempo y sin darnos cuenta nuestro proyecto quedo asi ☠️

```
Documentos
└── proyecto
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── ejercicio2_nuevo.js
    ├── ejercicio2_final.js
    ├── ejercicio3_NO_FUNCIONA.js
    ├── ejercicio3_de_pablo.js
    ├── informe.pdf
    ├── informe.doc
    ├── informe_de_ema.doc
    ├── informe_final.doc
    ├── informe_final2.doc
    └── informe_final_corrgido.doc
```

---

Y peor todavia, podemos copiar la carpeta y nunca mas encontrar cual era la que teniamos que entregar 🤯

```
Documentos
├── proyecto
│   ├── ejercicio1.js
│   ├── ...
│   └── informe.doc
├── proyecto_corregido
│   ├── ejercicio1_ANDA.js
│   ├── ...
│   └── informe_final.doc
└── proyecto_final
    ├── ejercicio1.js
    ├── ...
    └── informe_final_final_B.doc
```

---

### Solucion

#### Sitemas de control de versiones 💜

1. estan para evitar duplicar informacion lo mas posible
2. gestionar los cambios en el proyecto de forma mas inteligente
3. facilitar el trabajo en equipo en un mismo proyecto y hasta en un mismo archivo

---

## ¿Qué es Git?

> Es un sistema de control de veriones 😛

---

### Git git git git

En git, a un proyecto lo llamamos _repocitorio_ y es una carpeta que contiene todos los archivos y otras carpetas del proyecto.

Git se encarga de rastrear (track) y controlar el historial de todos los archivos dentro del _repocitorio_.

Los archivos pueden estar en tres estados distintos:
  * confirmado (committed)
  * modificado (modified)
  * preparado (staged)

---

### Los tres estados

**Confirmado (committed)**: 
* significa que los archivos están almacenados de manera segura en el repocitorio.

**Modificado (modified)**:
* significa que has modificado el archivo pero todavía no fue confirmado.

**Preparado (staged)**:
*  significa que has marcado un archivo modificado en su _versión actual_ para que entre en la próxima confirmación.

---

### Paquetes de modificaciones

Los _commits_ con son una parte fundamental de git.

La historia del repocitorio esta conformada por una cadena de _commits_, es decir, una cadena de paquetes de modificaciones.

![Cadena de commits](./basic-branching-1.png)

> La rama `master` tiene una historia con 3 _commits_.

---
## ¿Cómo usar la terminal?

---

### Terminal

linea de comandos (CLI), consola, terminal o _shell_ es una interfaz para comuncarnos con la computadora ejecutando programas

![CLI, GUI, NUI, evolución de interfaces de usuario](./CLI-GUI-NUI_evolucion_de_interfaces_de_usuario.png)

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
> - path `.`: es la carpeta actual, donde estamos ahora, podemos ver cual es con `pwd`
> - path `..`: es la carpeta que contiene a la actual, si hacemos `cd ..` nos envia a la carpeta previa
> - path `~`: es la carpeta de nuestro usuario, `cd ~` nos envia a la carpeta esa

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

dice que estoy en la rama _master_, todavia no hay commits y no hay nada para commitear.

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
>
> esta para diferenciar un comando de su respuesta

---

### git status

`git status` no va a mostar como git ve al repo

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

dice que estoy en la rama _master_, todavia no hay commits,

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

dice que estoy en la rama _master_, todavia no hay commits,

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

### Mas formas de usar `git add`

Con `add` podemos preparar para el proximo _commit_ de a carpetas enteras o de a varios archivos a la vez.

```
git add .
git add <carpeta>
git add <archivo_1> <archibo_2>
```

> Con `.` estamos agregando la carpeta donde estemos pocicionados en la consola.

---

### Mi primer commit

Llego el momento de crear el primer commit con los cambios ya preparados!

```
$ git commit -m "Primer commit de mi primer repo :D"
```

Asi creamos un commit con el mensaje `Primer commit de mi primer repo :D`

> ℹ️ Info:
>
> 1. Si no agregamos el flag `-m` para definir el mensaje desde el comando, git nos va a abrir el editor que tengamos configurardo por defecto (vim, nano, code, etc).
>
> 1. Git se va a quedar esperando a que guardemos y cerremos el archivos del mensaje.
>
> 1. Si no agregasmo un mensaje la creacion del commit se va a abrotar!

---
### Ciclo de vide de un rachivo 🌟

![Ciclo de vida](./lifecycle.png)

---

### git remote add

Usando el comando `remote` conectamos nuestro repo con un repocitorio remoto desde donde podemos traer o enviar cambios (_commits_) del proyecto.

```
$ git remote add <nombre> <repo_url>
```

El nombre que se usa por defecto es _origin_.

```
$ git remote add origin git@github.com:tomasdisk/test-1.git
```
Lo siguiente cambia el nombre de la rama principal a `main`, antes de eso se llamaba `master`.
```
$ git branch -M main
```
> 🤔 Por ahora solo es necesario saber que existe una rama principal llamada _master_, pero este nombre puede ser cambaiado.
>
> La proxima clase veremos com usar las _ramas_ de git. 🔀

---

### git push

Para publicar nuestros commits (paquetes de cambios) usamso `git push`, todos los cambiso que no esten dentro de un commit no son publicados.

```
git push <remote> <branch>
```

A nuestro remote le pusimos el nombre `origin` cuando usamos el comando `git add remote` y nuestra rama, que antes se llamaba `master`, le cambiamos el nombre a `main`.

Por lo tanto

```
$ git push -u origin main
```

El flag `-u` solo va a ser necesaio pa primera vez, es para que git entienda que nuestra rama local `main` hace referencia a la _rama_ `main` del _remote_ `origin`.

Con esto, la sengunda vez podemos hacer solo `git push` y git ya sabe a que _rama_ y _remote_ enviar nuestros commits.

> 🔒 Nos va a pedir usuario y contraseña, solo va a funcionar si tenemos permisos de escritura para el repo

---

### git clone

La segunda forma de crear un repocitorio 😸

```
$ git clone <repo_url>
$ git clone https://github.com/coderhood-dev/coderhood.dev.git
```

Este comando nos va a crear una carpeta llamada `coderhood.dev` y dentro va a descargar toda la info del _repocitorio remoto_

---

### Ultimo comando

```
$ git log
```

Se lo usa para obtener informacion de la historia de commits del repo.

```
git log --oneline
git log --stat
```

> se sale del log apretando `q`

---

### Ejercicios

#### 1. Primer repo

- Crear un repo
- agregar y editar varios archivos
- preparatlos (_stagearlos_)
- crear el primer commit

#### 2. Github

- Crearse una cuenta en github
- crear un repo en github
- publicar el repo del ejercicio 1

#### 3. Clonar

- clonar su propio repo (o el de alguien mas)
- hacer cambios
- publicar los nuevos commits

---

### Resumen

Todos los comando usados en la clase ✨

> 💥 el `$` al pricipio de los comando no va en la consola,
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

#### agregar _origin_ como repocitorio remoto y cambiar la rama **default** de _master_ a _main_

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

---

### Bibliografia

### 1. [Pro Git, Capitulo 1: Inicio - Sobre el Control de Versiones](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones)

### 2. [Pro Git, Capitulo 2: Fundamentos de Git](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git)
