# PLANEA

Desarrollo de una aplicación web diseñada para promover eventos y actividades culturales y educativas dirigidas a niños, familias y jóvenes. La aplicación permitirá a los usuarios explorar, inscribirse y recibir información sobre eventos en su área.

## Objetivos del Proyecto

- **Promoción de la Cultura y Educación**: Fomentar la participación en eventos culturales y educativos dentro de la comunidad.
- **Gestión Eficiente de Eventos**: Proveer una herramienta integral para la administración y difusión de eventos.
- **Mejora de la Experiencia de Usuario (UX)**: Crear una experiencia atractiva y fácil de usar para el acceso a la información y la inscripción a los eventos.
- **Competitividad en el Mercado**: Superar las deficiencias de las plataformas existentes en términos de diseño, accesibilidad y funcionalidad.

## Screenshots

![App Screenshot]()

## Arquitectura y Tecnologías

### Front-End:

- **React.js**: Para crear una interfaz de usuario dinámica y responsiva.
- **React Router**: Facilita la navegación interna dentro de la aplicación.

### Back-End:

- **Spring Boot**: Framework utilizado para desarrollar la API REST que gestiona las operaciones CRUD de eventos.
- **Spring Security**: Proporciona autenticación y autorización para la gestión segura de usuarios.
- **PostgreSQL**: Base de datos relacional para almacenar datos de eventos y usuarios.

## Funcionalidades Principales

### 1. Gestión Completa de Eventos (CRUD)

- **Crear Eventos**: Los administradores pueden crear eventos nuevos con información detallada.
- **Leer/Ver Eventos**: Los usuarios pueden explorar y ver eventos, con detalles completos de cada uno.
- **Actualizar Eventos**: Los administradores pueden editar la información de eventos ya existentes.
- **Eliminar Eventos**: Los administradores pueden eliminar eventos cuando sea necesario.

### 2. Autenticación y Roles de Usuario

- **Registro y Autenticación**: Los usuarios deben registrarse para acceder a la plataforma y a ciertas funciones.
- **Roles**:
  - **Usuario Final**: Puede ver e inscribirse en eventos.
  - **Administrador**: Gestiona los eventos y la inscripción.
  - **Super Admin**: Control total del sistema, con gestión avanzada de usuarios y permisos.

### 3. Inscripción a Eventos

- **Inscripción de Usuarios**: Los usuarios pueden inscribirse a los eventos disponibles.
- **Confirmaciones Automáticas**: Notificaciones por correo electrónico para confirmar y recordar inscripciones.

### 4. Filtros de Búsqueda Avanzados

- **Filtrar por Categoría**: Búsqueda de eventos según tipo (cultural, educativo, familiar, etc.).
- **Filtrar por Fecha**: Los usuarios pueden buscar eventos según la fecha.

### 5. Interfaz de Usuario Amigable e Intuitiva

- **Navegación Fluida**: Uso de React Router para navegación rápida y sin problemas.
- **Interfaz Responsiva**: Compatible con dispositivos móviles y de escritorio.

### 6. Gestión de Usuarios y Seguridad

- **Autenticación Segura**: Spring Security para asegurar las sesiones de los usuarios.
- **Roles y Permisos**: Gestión de roles, donde el Super Admin puede asignar permisos especiales.

### 7. Manejo de Errores y Validaciones

- **Validaciones en Formularios**: Validaciones tanto en front-end como en back-end.
- **Manejo de Errores**: Mensajes de error claros y amigables en caso de fallos.

### 8. Escalabilidad y Almacenamiento de Datos

- **PostgreSQL**: Base de datos escalable para almacenar eventos, usuarios y sus interacciones.
- **Arquitectura Escalable**: Capacidad para manejar un aumento en el número de usuarios y eventos.

### 9. Notificaciones y Comunicaciones

- **Recordatorios de Eventos**: Envío de notificaciones para recordar la participación en eventos.
- **Notificaciones Automáticas**: Los usuarios serán informados de cambios o cancelaciones en los eventos.

### 10. Panel de Control para Administradores

- **Dashboard**: Estadísticas de participación, eventos populares, y más.
- **Gestión de Participantes**: Vista de usuarios inscritos y control de la capacidad de eventos.

## Roadmap del Proyecto

- [ ] **Testing en Front-End y Back-End**: Implementación de pruebas para garantizar la calidad del software.
- [ ] **Filtro por Categoría y Fecha**: Implementación de opciones de filtrado para facilitar la búsqueda de eventos.
- [ ] **Funcionalidad de Actualización en Front-End**: Agregar la opción de actualizar eventos desde el front-end.
- [ ] **Manejo de Errores y Validaciones en Back-End**: Validaciones robustas y manejo de errores en la API.
- [ ] **Super Admin en Back-End**: Implementación del rol de Super Admin con permisos avanzados.
- [ ] **Inscripción de Usuarios**: Permitir a los usuarios registrarse en eventos de forma sencilla.
- [ ] **Confirmaciones Automáticas**: Enviar correos de confirmación y recordatorios automáticos a los inscritos en eventos.
- [ ] **Interfaz Responsiva**: Asegurar que la interfaz sea completamente compatible con dispositivos móviles y desktop.
- [ ] **Panel de Control para Administradores**: Implementar un dashboard con estadísticas de participación, eventos populares y gestión de inscritos.
- [ ] **Notificaciones Automáticas**: Informar a los usuarios sobre cambios o cancelaciones de eventos a través de la plataforma.

## Autor

- [Isa Afonso](https://github.com/IsaLagu)
