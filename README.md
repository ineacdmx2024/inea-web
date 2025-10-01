# 📖 Proyecto INEA – Plataforma Web  

## 📌 Descripción  
Este proyecto es una **plataforma web institucional** desarrollada para el INEA (Instituto Nacional para la Educación de los Adultos).  
Su objetivo es ofrecer información, materiales educativos y servicios digitales a los usuarios de forma accesible y adaptable a las necesidades de cada estado.  

---

## ⚙️ Tecnologías utilizadas  
- [Next.js 13](https://nextjs.org/) (con App Router)  
- React 18  
- TailwindCSS  
- JavaScript / JSX  
- API Routes (Next.js)  

---

## 🖥️ Requisitos previos  
- Node.js **v18 o superior**  
- npm 
- Editor recomendado: **Visual Studio Code**  

---

## 🚀 Instalación  
```bash
# Clonar el repositorio
git clone https://github.com/inea/proyecto-front.git

# Entrar a la carpeta
cd inea-web

# Instalar dependencias
npm install
```

---

## ▶️ Uso en desarrollo  
```bash
# Levantar el servidor de desarrollo
npm run dev
```
La aplicación estará disponible en:  
👉 [http://localhost:3000](http://localhost:3000)  

---

## 📦 Generar build de producción  
```bash
npm run build
npm start
```

---

## 📂 Estructura del proyecto  
```bash
proyecto/
 ┣ public/               # Recursos estáticos (logos, banners, imágenes, tipografías)
 ┣ src/
 ┃ ┣ app/                # Rutas principales de Next.js
 ┃ ┃ ┣ api/              # Endpoints internos de la API
 ┃ ┃ ┣ blog/             # Noticias y comunicados
 ┃ ┃ ┣ comunicado-contingencia/  # Página especial de contingencia
 ┃ ┃ ┣ control-escolar/       
 ┃ ┃ ┣ enlaces-carrusel/       
 ┃ ┃ ┣ enlaces-de-interes/       
 ┃ ┃ ┣ glosario/       
 ┃ ┃ ┣ home-enlaces-de-interes/       
 ┃ ┃ ┣ INTRANET/       
 ┃ ┃ ┣ mapa-sitio/       
 ┃ ┃ ┣ materiales/       
 ┃ ┃ ┣ oferta-educativa/       
 ┃ ┃ ┣ planeacion/       
 ┃ ┃ ┣ servicio-social/       
 ┃ ┃ ┣ servicios/       
 ┃ ┃ ┣ ubicacion/       
 ┃ ┃ ┣ layout.jsx        # Layout principal
 ┃ ┃ ┣ not-found.jsx     # Página de error 404
 ┃ ┃ ┗ page.jsx          # Página de inicio
 ┃ ┣ components/         # 

```

---

## 🛠️ Configuración  
- **Colores y estilos** definidos en `tailwind.config.js`.  
- **Imágenes institucionales y logos** en `public/`.  
- **Fuentes tipográficas** en `public/`.  
- **Variables de entorno** (si aplica) deben configurarse en un archivo `.env.local`.  

Ejemplo:  
```env
API_URL=https://api.inea.gob.mx
```

---

## 🔗 Conexión con API  
Las llamadas a la API se hacen mediante rutas en `src/app/api/`.  
Ejemplo (`src/app/api/upload/route.js`): 
```

---

## 🎨 Personalización  
Para que otros estados del INEA puedan **adaptar la plataforma**, deben modificar:  
- **Logos e imágenes** → en `public/`.  
- **Colores institucionales** → en `tailwind.config.js` o las mismas clases que tailwind te permite usar.  
- **Textos principales** → directamente en los archivos `.jsx` de `src/app/`.  

---

## 📚 Páginas principales  
- `/` → Página de inicio.  
- `/blog` → Noticias institucionales.  
- `/comunicado-contingencia` → Página especial para comunicados.   

---

## 🤝 Contribución  
1. Crear una nueva rama:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
2. Hacer los cambios y confirmar:  
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
3. Subir la rama y crear un Pull Request.  

---

## 👨‍💻 Autores  
Equipo de Desarrollo – **INEA CDMX**  
