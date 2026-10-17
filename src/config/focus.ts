/**
 * Focus mode (Alex, 2026-10-16): while the courses are being polished, the app
 * shows only Cursos and their temas (plus account, settings and legal notices).
 * Everything else stays in the code and in the saved data; it is just hidden.
 * Turned on in .env.production (VITE_FOCUS_COURSES=true). Set it to false, or
 * remove the line, to bring back Inicio, Práctica, Laboratorio, Calculadoras,
 * Tutor, Progreso, Planes and the lives (vidas).
 */
export const FOCUS_COURSES = import.meta.env.VITE_FOCUS_COURSES === 'true'

/** First route segments that stay reachable in focus mode. */
export const FOCUS_ROUTES = ['courses', 'area', 'path', 'lesson', 'account', 'settings', 'legal']
