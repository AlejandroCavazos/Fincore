# FINCORE — Roadmap

## v1.0 (esta entrega)

PWA con 14 pantallas, 32 lecciones, 221 ejercicios, laboratorio contable, calculadoras, simulador de inversión y valuación, tutor local con modo IA opcional, gamificación, repaso espaciado, respaldo JSON y funcionamiento sin conexión.

## v1.1 — Verificación en dispositivos y accesibilidad

- Probar instalación y uso en iPhone (Safari), Android (Chrome), Mac y Windows reales, y en Safari/Firefox (Playwright WebKit y Firefox en CI).
- Auditoría automática de accesibilidad (axe, Lighthouse) y prueba con VoiceOver y TalkBack.
- Pipeline de CI que ejecute `npm test`, `npm run test:e2e` y el build en cada cambio.

## v1.2 — Más contenido

- Ampliar a 60 lecciones y 500 ejercicios, con más profundidad en consolidación, arrendamientos (NIF D-5 / IFRS 16), impuestos diferidos, derivados y LBO.
- Más operaciones en el laboratorio: ciclo completo con cierre, estados financieros generados desde la balanza, nómina con IMSS e ISR retenido.
- Más casos forenses (fraude en nómina, inventarios, ingresos ficticios) y análisis de Benford.

## v1.3 — Tutor

- Validación de procedimientos paso a paso (no solo el resultado final).
- Tutor con IA que llame a las funciones de cálculo de FINCORE como herramientas, para que los números siempre vengan de código verificado.

## v2.0 — Cuentas y grupos (opcional)

- Sincronización opcional entre dispositivos con cuenta, cifrado y consentimiento explícito.
- Modo docente: grupos, asignación de lecciones y reporte de avance.
- Certificados de nivel con examen supervisado.
