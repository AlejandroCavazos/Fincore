# FINCORE v1.0 — Reporte de pruebas

**Fecha de ejecución:** 2026-10-12 · **Entorno:** Linux, Node 22.22.0, Chromium (Playwright 1.64) · **Build:** `npm run build` sin errores de TypeScript.

## Resumen

| Suite | Herramienta | Resultado |
|---|---|---|
| Unitarias y de componentes | Vitest 5 + React Testing Library + fake-indexeddb | **93 / 93 pasan** (10 archivos) |
| Extremo a extremo | Playwright, 9 escenarios × 3 perfiles (viewport iPhone 14, Pixel 7, escritorio 1366×860) | **27 / 27 pasan** |
| Tipos | `tsc -b` (strict, noUnusedLocals) | 0 errores |
| Lint | oxlint | 0 errores (solo advertencias de estilo de React) |

Cómo reproducir: `npm test` y `PW_CHROMIUM=/ruta/chromium npm run test:e2e` (o `npx playwright install chromium` y `npm run test:e2e`).

## Comprobaciones requeridas (§15)

| # | Comprobación | Estado | Evidencia |
|---|---|---|---|
| 1 | Ecuación contable | **PASS** | `accounting.test.ts`: `solveEquation` en los 3 sentidos; tras contabilizar las 20 operaciones del laboratorio A = P + C + utilidad y la balanza cuadra |
| 2 | Cuadre de asientos | **PASS** | `accounting.test.ts`: póliza descuadrada rechazada; las 20 soluciones del laboratorio y las 13 pólizas del banco cuadran (`content.test.ts`) |
| 3 | Clasificación de cuentas | **PASS** | Catálogo: códigos únicos, tipo y naturaleza coherentes con el esquema; ejercicios de clasificación con crédito parcial (`engine.test.ts`) |
| 4 | VPN | **PASS** | −1000, 300, 400, 500 al 10 % = −21.04; t=0 sin descontar; errores por tasa inválida y flujos insuficientes. E2E: la calculadora muestra −$21.04 |
| 5 | TIR | **PASS** | 8.896 %; VPN(TIR) ≈ 0; sin TIR (`NO_SIGN_CHANGE`, `IRR_NOT_FOUND`); TIR múltiples 10 % y 20 % en −100, 230, −132 |
| 6 | WACC | **PASS** | E 600k, D 400k, Ke 15 %, Kd 11 %, T 30 % → 12.08 %; pesos inválidos y tasa de impuestos fuera de rango rechazados |
| 7 | Punto de equilibrio | **PASS** | CF 120,000; P 250; CV 150 → 1,200 u y $300,000; precio ≤ costo variable rechazado. E2E en la calculadora, incluido el mensaje de error |
| 8 | Calificación de respuestas | **PASS** | La solución oficial de **los 221 ejercicios** se califica correcta y la respuesta vacía incorrecta; pruebas por tipo (numérico con tolerancia, fórmula, clasificación, campos, pólizas) |
| 9 | Aleatorización de opciones | **PASS** | `shuffle.test.ts`: 10,000 barajados sin pérdidas ni duplicados; 4,000 intentos con la correcta en A, B, C y D (χ² < 16.27); las 24 permutaciones aparecen; calificación por ID en las 4 posiciones; orden estable en el intento y tras serializar; nuevo intento → nuevo orden; multirespuesta conserva su conjunto. RTL: orden estable tras rerender, selección y retroalimentación. E2E: orden igual tras recargar |
| 10 | Persistencia | **PASS** | IndexedDB (fake-indexeddb) ida y vuelta; exportar → importar idéntico. E2E: XP y lección se conservan tras recargar en los 3 perfiles |
| 11 | XP | **PASS** | Idempotente por clave; repetir lección, reenviar respuesta o volver a terminar no suma XP; respuesta bloqueada tras el primer envío; bono de examen una sola vez; umbrales de nivel |
| 12 | Navegación | **PASS** | RTL: onboarding, rutas y 404. E2E: 21 rutas principales sin errores de consola en los 3 perfiles |
| 13 | Diseño móvil | **PASS** (Chromium) | E2E sin desbordamiento horizontal en 21 pantallas con viewport iPhone 14 y Pixel 7; capturas revisadas. Se corrigieron dos defectos encontrados así (margen lateral en móvil y desbordamiento del laboratorio) |
| 14 | Validación de entradas | **PASS** | Parser numérico ($, %, comas, coma decimal, negativos, no números); calculadoras muestran «Escribe un número válido»; importación rechaza JSON inválido, encabezado ajeno, tamaño > 5 MB, valores fuera de rango y `__proto__` |
| 15 | Manejo de errores | **PASS** | Todos los códigos `Result` de finanzas probados en casos límite; tutor sin TIR no la inventa; respaldo con error visible (E2E); IndexedDB no disponible → modo memoria |

## Otras verificaciones

| Verificación | Estado | Evidencia |
|---|---|---|
| Laboratorio: póliza cuadrada con cuenta equivocada marcada incorrecta | **PASS** | Unitaria y E2E (muestra «Cuenta no corresponde» y luego contabiliza la correcta) |
| Fraud Detective: puntaje, falsos positivos y negativos, alerta vs. fraude | **PASS** | `fraud.test.ts`: caso determinista por semilla, 6 tipos de anomalía, al menos una alerta explicada, 100 % con respuesta perfecta, penalización por falsos positivos |
| Tutor local: cálculos verificados y avisos fiscales | **PASS** | `tutor.test.ts`: VPN, TIR múltiple, WACC, 50 ejercicios generados verificados contra `npv()`, nota con jurisdicción, fecha y DOF; enlaces a lecciones existentes. E2E: respuesta en pantalla |
| Contenido mínimo (§14) | **PASS** | 6 rutas, 32 lecciones, 221 ejercicios, sin lecciones vacías, sin preguntas duplicadas (enunciado + caso), MCQ con 4 opciones e IDs únicos |
| PWA: manifest, service worker y uso sin conexión | **PASS** (Chromium) | E2E: manifest con 3 iconos, `sw.js` activo, recarga sin red muestra la app |
| Teclado y foco visible | **PASS** (parcial) | E2E: el primer Tab llega a «Saltar al contenido», opción seleccionable con Enter, foco con contorno visible |
| Contraste de color | **NO PROBADO** con herramienta automática | Paleta elegida para contraste alto y revisada visualmente en capturas; falta auditoría con axe o Lighthouse |
| Lector de pantalla (VoiceOver/TalkBack) | **NO PROBADO** | Hay roles ARIA, etiquetas y regiones `aria-live`, pero no se probó con un lector real |
| Instalación en iPhone (Safari) | **NO PROBADO** | No hay un iPhone ni Safari/WebKit en este entorno. Las pruebas «iPhone» usan el viewport y el user agent del iPhone 14 renderizados con Chromium |
| Instalación en Android, Mac o Windows | **NO PROBADO** | Solo se verificó que el manifest y el service worker cumplen los requisitos de instalación en Chromium |
| Safari / Firefox / Edge reales | **NO PROBADO** | Solo Chromium |
| Tutor con IA (servidor) | **NO PROBADO** contra la API real | No hay clave en este entorno. Se probó que el servidor arranca, rechaza JSON inválido y parámetros inválidos; la app vuelve a modo local si el servidor falla |
| Exactitud fiscal vigente | **NO PROBADO** | El contenido fiscal es educativo, fechado en 2026, con aviso de verificar contra el DOF |

## Defectos encontrados y corregidos durante las pruebas

1. En móvil, la utilidad de áreas seguras anulaba el margen lateral del contenido (texto pegado al borde). Corregido con `max(1rem, env(safe-area-inset-*))`.
2. El laboratorio desbordaba horizontalmente 3,300 px en móvil por la columna de la cuadrícula. Corregido con `minmax(0, 1fr)`.
3. Sin conexión, el service worker no encontraba los módulos JS por la cabecera `Vary`. Corregido con `ignoreVary`.
4. Dos ejercicios de cuentas T tenían el mismo enunciado (con datos distintos). Se hicieron explícitos.
5. Los iconos de logros importaban toda la librería de iconos (881 kB). Ahora se importan por nombre y el bundle se dividió en fragmentos.
