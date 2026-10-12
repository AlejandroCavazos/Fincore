# FINCORE — Accounting & Finance Academy v1.0

Academia interactiva para aprender contabilidad (NIF e IFRS), contabilidad de costos, finanzas corporativas, fiscal mexicano, auditoría y finanzas avanzadas. Es una **PWA** (React + TypeScript) que funciona en iPhone, Android, Mac y Windows desde el navegador, se puede instalar en la pantalla de inicio y funciona sin conexión después de la primera visita.

Todo el contenido, las empresas y las transacciones son **ficticios y con fines educativos**. El progreso se guarda **solo en el dispositivo** (IndexedDB); la app no pide datos personales.

## Qué incluye

| Área | Contenido |
|---|---|
| Ruta de aprendizaje | 6 niveles, 73 temas, **32 lecciones** (objetivos, teoría, ejemplos resueltos, puntos clave, nota normativa) |
| Banco de ejercicios | **221 ejercicios** de 8 tipos: opción múltiple, múltiple respuesta, verdadero/falso, numérico con tolerancia, completar fórmula, clasificar cuentas, pólizas de diario, completar cuentas T y estados |
| Motor de ejercicios | Barajado Fisher–Yates de opciones (CSPRNG), orden estable por intento, calificación por ID, retroalimentación específica, crédito parcial |
| Laboratorio contable | 20 operaciones de una empresa ficticia, catálogo de 51 cuentas, validación de pólizas (cuadre **y** cuentas correctas), diario, cuentas T, balanza y ecuación contable |
| Calculadoras | VP, VF, interés compuesto, anualidades y amortización, VPN/TIR/payback/IP, WACC/CAPM, punto de equilibrio, 15 razones financieras; cada una con fórmula, interpretación, tabla y gráfica |
| Inversión y valuación | 2 empresas ficticias: análisis, DCF simplificado, escenarios y sensibilidad, evaluación de proyecto, portafolio de 2 activos; cada cifra etiquetada como dato, supuesto, cálculo o interpretación |
| Financial Fraud Detective | Caso forense generado por semilla: 55 pagos con 11 operaciones anómalas controladas (duplicados, montos inusuales, horarios atípicos, proveedor fantasma, inconsistencias documentales, fraccionamiento); puntaje con verdaderos/falsos positivos y negativos; distingue alerta de fraude demostrado |
| Gamificación | XP idempotente, niveles, rachas, meta diaria, 10 logros, exámenes por nivel, historial, repaso espaciado (SM-2 simplificado), seguimiento por competencia |
| Tutor | Modo local sin IA (etiquetado como tal): conceptos, cálculos verificados con código, ejercicios generados con dificultad adaptativa, explicación de errores, avisos fiscales con jurisdicción y fecha. Modo IA opcional mediante un servidor propio que guarda la clave |
| Respaldo | Exportar e importar progreso en JSON con validación estricta |

## Requisitos

- Node.js 20 o superior (probado con Node 22.22 y npm 10).

## Instalar y ejecutar

```bash
npm install
npm run dev          # servidor de desarrollo en http://localhost:5173
npm run build        # compila a dist/ (incluye sw.js y manifest)
npm run preview      # sirve dist/ en http://localhost:4173
```

## Pruebas

```bash
npm test             # Vitest + React Testing Library (93 pruebas)
npm run test:e2e     # Playwright: iPhone 14 (viewport), Pixel 7 y escritorio (21 pruebas)
npm run lint         # oxlint
```

Playwright usa Chromium. Si tu entorno ya tiene un Chromium instalado, indícalo con `PW_CHROMIUM=/ruta/a/chromium npm run test:e2e`; si no, ejecuta `npx playwright install chromium` una vez. El reporte completo está en [docs/TEST_REPORT.md](docs/TEST_REPORT.md).

## Desplegar

`dist/` es un sitio estático con rutas por hash (`#/...`) y rutas relativas (`base: './'`), así que funciona en cualquier hosting estático y en subcarpetas sin configuración de reescrituras.

- **Netlify / Vercel / Cloudflare Pages:** comando `npm run build`, carpeta de publicación `dist`.
- **GitHub Pages:** publica el contenido de `dist/` en la rama o carpeta de Pages.
- **Servidor propio (nginx, Apache, S3):** copia `dist/` tal cual.

Requisitos para que la PWA se pueda instalar y funcione sin conexión: servir por **HTTPS** (o `localhost`) y no cachear `sw.js` agresivamente (`Cache-Control: no-cache` para `sw.js`).

### Instalar en el teléfono

- **iPhone (Safari):** Compartir → «Agregar a pantalla de inicio».
- **Android (Chrome):** menú ⋮ → «Instalar app», o el botón «Instalar» en Configuración dentro de la app.
- **Mac/Windows (Chrome o Edge):** icono de instalar en la barra de direcciones.

## Tutor con IA (opcional)

Sin configuración, el tutor funciona en **modo local** y lo indica en pantalla. Para activar el modo IA:

1. Despliega el proxy de `server/` en un servidor Node (la clave **nunca** llega al navegador):
   ```bash
   cd server
   npm install
   ANTHROPIC_API_KEY=sk-... ALLOWED_ORIGIN=https://tu-dominio.app PORT=8787 npm start
   ```
   Variables: `ANTHROPIC_API_KEY` (obligatoria), `ALLOWED_ORIGIN` (origen permitido por CORS), `PORT`, `TUTOR_MODEL` (por defecto `claude-opus-5-5`). El servidor valida el cuerpo, limita tamaño y longitud de mensajes, aplica 20 solicitudes/minuto por IP y solo devuelve texto.
2. Compila la app con la URL del proxy:
   ```bash
   VITE_TUTOR_API_URL=https://tu-servidor.example/tutor npm run build
   ```
3. En la pantalla Tutor aparece el selector **Local / IA (servidor)**. Si el servidor falla, la app responde en modo local y lo dice.

No pongas la clave en variables `VITE_*`: todo lo que empieza con `VITE_` termina dentro del JavaScript público.

## Estructura

```
src/
  content/        currículo, lecciones y ejercicios (level1..6), catálogo de cuentas, operaciones del laboratorio, empresas
  lib/            lógica pura y probada: shuffle, engine, accounting, finance, valuation, progress, fraud, tutor, db, backup
  state/          store (React context + IndexedDB) y router por hash
  components/     UI, ExerciseRunner/ExerciseView, JournalEditor, calculadoras
  pages/          las 15 pantallas
  test/           pruebas unitarias y de componentes
e2e/              pruebas Playwright
server/           proxy opcional del tutor con IA
sw-plugin.ts      genera el service worker con la lista de archivos a precargar
docs/             arquitectura, reporte de pruebas, documentación académica, roadmap
```

## Documentación

- [Arquitectura y flujo de datos](docs/ARCHITECTURE.md)
- [Reporte de pruebas](docs/TEST_REPORT.md)
- [Documentación académica del currículo](docs/CURRICULUM.md)
- [Roadmap](docs/ROADMAP.md)

## Aviso

FINCORE es material educativo. La información fiscal se refiere a México (federal), fue revisada para 2026 y debe verificarse contra el DOF antes de aplicarse; no es asesoría fiscal, contable ni de inversión.
