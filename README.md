# 🏁 GPX Rally Project

**GPX Rally Project** es una aplicación web desarrollada con **Next.js + TypeScript** siguiendo la metodología **Atomic Design**. Esta herramienta está diseñada para gestionar eventos competitivos con roles diferenciados, permitiendo el registro de puntos de control, penalizaciones, clasificación por categoría y visualización detallada de resultados.

---

## 🚀 *Demo en Vivo*

🌐 *Aplicación Desplegada*: [https://gpx-front-8rip.vercel.app/](https://gpx-front-8rip.vercel.app/)

---

## 📦 Tecnologías y herramientas principales

* **Framework:** [Next.js](https://nextjs.org/)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS
* **Diseño de componentes:** Atomic Design (Atoms, Molecules, Organisms)
* **Íconos:** Lucide React
* **Backend:** En construcción (pensado para ser integrado fácilmente)
* **Estado global:** Context API

---

## 🧱 Estructura del Proyecto

El proyecto sigue una arquitectura basada en Atomic Design:

```
/components
  /atoms        -> Botones, tipografías, iconos
  /molecules    -> Tarjetas, filas de datos, secciones con título + contenido
  /organisms    -> Secciones completas: Sidebar, Layout, Secciones de perfil
/pages          -> Rutas principales (index, login, eventos, resultados...)
/context        -> EventContext para compartir datos de eventos entre vistas
/types          -> Tipado de entidades como Evento, Movimiento, Usuario
/utils          -> Funciones auxiliares como validación de usuarios
/public         -> Imágenes usadas en las vistas
```

---

## 🚀 Instalación del Proyecto

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/controlpoint-tracker.git
   cd controlpoint-tracker
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Levanta el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Variables de entorno:**
   Si usarás Supabase u otro backend, deberás agregar variables en un archivo `.env.local` como:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

---

## 🔐 Sistema de Login

El login está diseñado para permitir ingreso solo a usuarios autorizados, como jueces o encargados del control.

* Los usuarios se cargan desde un archivo de datos local simulado (`users.ts`).
* Si el usuario es válido, se redirige a la vista `/controlPointRegister`.
* Si no lo es, se muestra un mensaje de error sin cambiar de vista.

---

## 🧠 Context API para Eventos

Se utiliza `EventContext` para compartir la información de un evento seleccionado desde la vista `UpcomingEvents` hacia `EventDetails`, anticipando una futura integración con el backend.

```tsx
// Ejemplo de uso
const { selectedEvent } = useEvent();
```

Esto facilita el manejo del estado y evita tener que pasar props entre vistas.

---

## 🧩 Componentes Clave

### ✨ Atoms

* `Button`: Componente reutilizable con variantes de color, tamaño e iconos.

### 🧠 Molecules

* `UserCard`: Tarjeta de perfil con botones personalizables.
* `CompetenceRow`: Fila de resultados o clasificaciones.
* `Requirements`: Bloque de requisitos desplegable.
* `PriceRow`: Fila de costos con soporte para despliegue de múltiples entradas.

### 🧳 Organisms

* `Layout`: Estructura base para la aplicación.
* `Sidebar`: Navegación izquierda responsiva.
* `ControlPointRegister`: Vista para registrar paso de participantes.
* `UpcomingEvents`: Vista con tarjetas de eventos próximos.
* `EventDetails`: Descripción de un evento seleccionado.
* `ResultsTable`: Tabla con resultados por categoría.

---

## 🖥️ Vistas Principales

* `/` Inicio
* `/login` Ingreso de jueces autorizados
* `/controlPointRegister` Registro de punto de control
* `/penaltyRegister` Registro de penalizaciones
* `/results` Vista general de resultados
* `/results/[category]` Clasificación por categoría
* `/upcoming-events` Eventos próximos y detalles

---

## 📱 Responsividad

* Sidebar oculta en resoluciones pequeñas y desplegable mediante botón.
* Componentes adaptativos con `flex`, `grid`, `gap`, `min-h`, `overflow`, etc.
* Textos, botones y tablas adaptados a móvil, tablet y escritorio.

---

## 🧪 Datos Simulados

Para pruebas sin backend, se han incluido:

* Usuarios precargados (archivo `users.ts`)
* Eventos de prueba por categoría
* Resultados simulados

Esto permite navegar completamente por la app sin necesidad de una API activa.

---

## 🛠️ En desarrollo futuro...

* Integración con backend Supabase
* Persistencia de sesiones y roles
* Carga y edición de eventos desde interfaz
* Gráficos en tiempo real de resultados y movimientos
* Panel administrativo para control general

---

## 🤝 Contribuciones

Toda mejora es bienvenida. Puedes crear un `Pull Request` o abrir un `Issue` para discutir nuevas funcionalidades o reportar errores.

---

## 🧑 Autor

Proyecto desarrollado por **Joan Manuel Muñoz Monroy** como parte de una arquitectura frontend moderna, orientada a la escalabilidad y buena experiencia de usuario.

---

## 📄 Licencia

