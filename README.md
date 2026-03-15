<div align="center">
# 💘 Valentines



Aplicación web interactiva hecha con **React** para pedirle a alguien especial que sea tu Valentine de una forma divertida.

 ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript\&logoColor=black)
 ![License](https://img.shields.io/badge/License-MIT-green)
</div>


## 🌐 Demo

Puedes ver el proyecto aquí:

👉 **https://valentines-liz.vercel.app**

---

## ✨ Características

* 💌 Pregunta interactiva tipo **"Will you be my Valentine?"**
* 🎨 Interfaz simple y atractiva
* ❤️ Botones interactivos
* 🎉 Animaciones divertidas
* 📱 Diseño responsive para móviles y escritorio

---

## 🛠 Tecnologías

* React
* JavaScript (ES6+)
* Taildwind CSS

---

## 📦 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/percy0216/valentines-liz.git
```

Entrar al proyecto:

```bash
cd valentines-liz
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

## 🛠️ Personalización

Este proyecto está diseñado para que cualquiera pueda adaptarlo fácilmente para su persona especial. Puedes cambiar los nombres, las fotos, los cupones y hasta la contraseña de inicio. 

A continuación, te explico los puntos clave que debes modificar:

### 1. La Narrativa y los Nombres
La historia central trata de "Jarvis" (tu sistema), quien se "rebela" contra ti al detectar que tu pareja es la verdadera "Jefa" o "Reina" de tu corazón. Para adaptar esto a tu relación, debes buscar y reemplazar los nombres (ej. *Percy* y *Lizeth*) en estos archivos:
- `src/components/Dashboard/Dashboard.tsx` (Mensaje de bienvenida y terminal final).
- `src/components/Dashboard/LoveAnalysis.tsx` (Los "logs" del sistema y la sentencia).
- `src/components/Dashboard/ValentineProtocol.tsx` (La carta de amor central).

### 2. Fotografía Principal
Para cambiar la foto Polaroid que aparece en el inicio:
1. Ve a la carpeta `public/` en la raíz del proyecto.
2. Borra o reemplaza el archivo `nosotros.jpeg` por la foto que quieras usar con tu pareja.
3. Asegúrate de que tu nueva imagen se llame exactamente `nosotros.jpeg` (o, si usas otro formato, recuerda actualizar la extensión en la etiqueta `<img src="/..." />` dentro de `Dashboard.tsx`).

### 3. Los Cupones Secretos
En el archivo `src/components/Dashboard/Dashboard.tsx`, busca el arreglo llamado `INITIAL_COUPONS`. Puedes personalizar los regalos cambiando el título, el emoji y la descripción:

```javascript
const INITIAL_COUPONS = [
    { id: 1, title: "Cena Romántica", emoji: "🍕", description: "Vale por una cena donde tú eliges el lugar." },
    { id: 2, title: "Masaje Relax", emoji: "💆‍♀️", description: "30 minutos de masaje sin quejarme." },
    // Agrega o modifica los tuyos aquí...
];
```
### 4. Numero de WhatsApp 
Para que el botón de **¡Notificar al Jefe!** funcione y tu pareja te envíe el cupón canjeado a tu chat, debes poner tu número real.
En el archivo *src/components/Dashboard/Dashboard.tsx*, busca la función handleRedeem y modifica la variable phone:

```javascript
// Pon tu código de país seguido de tu número, sin signos '+' ni espacios.
// Ejemplo para Perú: 51 seguido de tu celular
const phone = "5199999999";
```

### 5. Código de Acceso (Terminal)
Hay  un archivo Terminal.tsx al inicio, no olvides cambiar la contraseña de desbloqueo (esa **fecha importante** o **código secreto** que solo ustedes dos conocen) para que pueda acceder al sistema.

---

## 📄 Licencia

Este proyecto es de uso libre para fines personales o educativos.
