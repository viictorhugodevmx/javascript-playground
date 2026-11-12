# JavaScript Playground

[English](./README.md) | [Español](./README.es.md)

## React Lab 2.0 — APP 01

JavaScript Playground es una plataforma interactiva de aprendizaje diseñada para fortalecer los fundamentos de JavaScript mediante ejercicios prácticos, experimentos, retos, depuración y evaluaciones.

Es la primera aplicación de React Lab 2.0, un programa de aprendizaje progresivo enfocado en JavaScript, TypeScript, React y Next.js.

## Estado del proyecto

**Fase actual:** Paso 0 — Ambientación del proyecto.

El entorno de desarrollo, las herramientas de calidad, las pruebas automatizadas y la compilación de producción han sido configurados y verificados.

Las funcionalidades y la interfaz de usuario de la aplicación se implementarán durante los siguientes pasos de desarrollo.

## Objetivos de aprendizaje

- Fortalecer los fundamentos de JavaScript moderno.
- Comprender funciones, scope, closures, arreglos y objetos.
- Explorar prototipos, clases y módulos ES.
- Practicar recursividad y complejidad algorítmica.
- Desarrollar habilidades de depuración y resolución de problemas.
- Aplicar principios de código limpio y diseño de software.
- Construir interfaces web accesibles y responsivas.
- Practicar pruebas automatizadas y flujos profesionales con Git.

## Funcionalidades planeadas

- Dashboard: resumen del aprendizaje y navegación.
- Fundamentos: conceptos de JavaScript y ejemplos prácticos.
- Laboratorio: experimentos interactivos y controlados de JavaScript.
- Retos: ejercicios para practicar la resolución de problemas.
- Debugging: identificación y corrección de errores comunes de JavaScript.
- Evaluaciones: comprobación de conocimientos y comprensión.
- Progreso: seguimiento del aprendizaje mediante Local Storage.

## Stack tecnológico

| Tecnología      | Propósito                                          |
| --------------- | -------------------------------------------------- |
| JavaScript ES6+ | Lógica de la aplicación                            |
| Vite            | Servidor de desarrollo y compilación de producción |
| HTML5           | Estructura semántica del documento                 |
| CSS3            | Estilos y diseño responsivo                        |
| Local Storage   | Persistencia planeada del lado del cliente         |
| Vitest          | Pruebas unitarias automatizadas                    |
| ESLint          | Análisis estático de código                        |
| Prettier        | Formato consistente de código                      |
| Git y GitHub    | Control de versiones y colaboración                |

Esta aplicación utiliza intencionalmente JavaScript vanilla, sin React, TypeScript ni backend.

## Requisitos

- Node.js 22.19.0
- npm 10.9.3
- Git
- NVM (recomendado para administrar versiones de Node.js)

La versión requerida de Node.js está definida en el archivo `.nvmrc`.

## Primeros pasos

Clonar el repositorio:

```bash
git clone https://github.com/viictorhugodevmx/javascript-playground.git
cd javascript-playground
```

Seleccionar la versión de Node.js del proyecto:

```bash
nvm install
nvm use
```

Instalar las dependencias fijadas en el archivo de bloqueo:

```bash
npm ci
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la URL local mostrada por Vite.

## Scripts disponibles

| Comando                | Descripción                                        |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Iniciar el servidor de desarrollo                  |
| `npm run build`        | Generar la compilación de producción               |
| `npm run preview`      | Visualizar localmente la compilación de producción |
| `npm run lint`         | Ejecutar ESLint                                    |
| `npm run format`       | Formatear los archivos compatibles del proyecto    |
| `npm run format:check` | Comprobar el formato del código                    |
| `npm run test`         | Ejecutar las pruebas automatizadas                 |
| `npm run test:watch`   | Ejecutar las pruebas en modo observación           |

## Estructura del proyecto

La siguiente estructura incluye directorios preparados para el desarrollo futuro.

```text
javascript-playground/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── features/
│   │   ├── dashboard/
│   │   ├── fundamentals/
│   │   ├── laboratory/
│   │   ├── challenges/
│   │   ├── debugging/
│   │   ├── assessments/
│   │   └── progress/
│   ├── styles/
│   ├── utils/
│   │   ├── calculatePercentage.js
│   │   └── calculatePercentage.test.js
│   ├── main.js
│   └── style.css
├── .nvmrc
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── README.es.md
```

Los directorios vacíos pueden no aparecer en Git hasta que contengan archivos rastreados.

## Quality Gate

Ejecutar los siguientes comandos antes de completar un paso de desarrollo:

```bash
npm run format:check
npm run lint
npm run test
npm run build
```

El Quality Gate inicial se completó correctamente:

- Prettier: aprobado.
- ESLint: aprobado.
- Vitest: 4 de 4 pruebas aprobadas.
- Compilación de producción: aprobada.
- Comprobaciones en navegador de desarrollo y producción: aprobadas.

## Seguridad

La auditoría de dependencias de producción reportó cero vulnerabilidades conocidas durante la ambientación inicial del proyecto.

La auditoría completa reportó cuatro alertas moderadas asociadas con minimatch 10.2.6, una dependencia transitiva de desarrollo utilizada por ESLint 10.14.0.

Aviso de seguridad: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).

La corrección automática forzada propuso bajar ESLint a la versión 9.39.5. Se ha conservado la configuración actual para evitar introducir cambios incompatibles.

Este es un riesgo de una dependencia de desarrollo aceptado temporalmente, no una vulnerabilidad resuelta. Se revisará cuando exista una corrección compatible.

## Metodología de desarrollo

Este proyecto sigue la metodología APP v0.2.0:

- El Paso 0 prepara y valida el entorno de desarrollo.
- El desarrollo avanza mediante pasos y puntos de validación secuenciales.
- Cada punto se revisa antes de continuar.
- Cada paso completado incluye un commit de Git y push inmediato a GitHub.
- Las comprobaciones de calidad se integran durante todo el desarrollo.
- La documentación evoluciona junto con la aplicación.

## Autor

Víctor Hugo Segundo Aguilar

Frontend Engineer | JavaScript | TypeScript | React | Angular

- [GitHub](https://github.com/viictorhugodevmx)
- [Portafolio y contacto](https://linktr.ee/viictorhugomxm)

---

Parte de React Lab 2.0 — De Cero a Experto.
