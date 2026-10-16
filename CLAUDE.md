# FINCORE: quick map for Claude

PWA that teaches Mexican accounting, tax, audit and finance. The owner, Alex, writes in Spanish. Use this map to go straight to the right file. Do not re-read the large lesson files unless the task is about that lesson.

## Stack and commands
- Vite 8 + React 19 + TypeScript 6 + Tailwind v4. Local storage in IndexedDB (`src/lib/db.ts`). Hash router (`src/state/router.ts`).
- `npx tsc -b` checks types. `npm test` runs vitest (about 209 tests). `npm run build:e2e && PW_CHROMIUM=/opt/pw-browsers/chromium npx playwright test` runs the 69 e2e tests (about 35 min).
- Deploy: push to `main`, then run `gh workflow run pages.yml -R AlejandroCavazos/Fincore --ref main`. The site is https://alejandrocavazos.github.io/Fincore/

## Where things live
- `src/types.ts`: Lesson, TheorySection, FormulaGuide, Exercise (8 kinds) and all other models. Text is bilingual: `L = {es, en}`.
- `src/content/index.ts`: builds `LESSONS` and `EXERCISES`. It loads every file in `lessons/v2/*.ts` automatically.
- `src/content/areas.ts`: the 12 course areas. Each materia (subject) maps to a lesson id `<PREFIX>-NN`. Prefixes: CON, COS, FIS, AUD, FIN, PER, INV, CUA, ECO, DER, TEC, EMP.
- Lesson files are large data files of 30–160 KB each:
  - `lessons/n1/part{A,B,C}.ts`: L1-01..15, Nivel 1 Contabilidad.
  - `lessons/level{2..6}.ts`: the original v1 lessons, now used as "lecciones integradoras".
  - `lessons/extra/{etica,negocio}.ts`: L2-07 and L5-06.
  - `lessons/v2/<PREFIX>-<n>.ts`: the 205 temario v2.0 lessons, 6 per file, exercises `<id>-E1..E6`.
  - To find a lesson, run `grep -l "id: 'FIN-09'" src/content/lessons -r`. Do not open files to search.
- Pages: `src/pages/` (Courses → AreaPage → LessonPage with views Overview/Subtopic/Reto). Components: `src/components/` (ExerciseRunner, FormulaCard, JournalEditor).
- Logic: `src/lib/` (engine grades exercises, progress/selectors handle XP and unlocks, finance/valuation hold the calculators, auth/plans use Supabase).
- Lab (paid, `useLabAccess` in `src/pages/Lab.tsx`): `src/pages/lab/` (LabPractice, LabExam, LabProjects, LabTemplates, LabSheet), `src/components/lab/` (CfdiView, Books), logic in `src/lib/cfdi.ts` (random practice CFDIs + expected pólizas), `statements.ts` (estados, razones, IVA), `sheet.ts` (Excel-like formulas). State in `AppState.labx`.
- Lives (vidas): all numbers in `src/config/lives.ts`; all logic in `src/lib/lives/service.ts` (local for now, server validation pending); events in `src/lib/lives/analytics.ts` (local only); React glue `src/state/lives.tsx` (useLives); UI in `src/components/lives/` (LivesIndicator, OutOfLives, MyLives), recovery page `src/pages/RecoverLife.tsx` (#/lives/recover). Spending hooks: ExerciseRunner, LabPractice, LabExam, Exams (Pro simulacro + 3 official tries/7 days). Tests: `src/test/lives.test.ts`.
- Account sync: `src/state/cloud.tsx` (CloudSync: pull+merge on sign-in/focus, push 4 s after changes), `src/lib/cloud.ts` (Supabase table `user_progress`, SQL in `supabase/migrations/003_user_progress.sql`), `src/lib/merge.ts` (mergeStates/mergeLives, tests in `src/test/merge.test.ts`).
- Prices: all in `src/config/pricing.ts` (Plus $99, Pro $199 per month, MXN; Gratis free). UI: `src/pages/Plans.tsx`.
- Theory cards (L1-* in English only now, since Spanish L1 uses interactive lessons; `cardsEnabled` in `src/lib/cards.ts`): `buildCards` turns each theory section into short swipeable cards automatically (first sentence + "Ver más", lists, formulas, quick mcq/truefalse questions from the lesson, key points). UI `src/components/cards/TheoryCards.tsx`, used by Subtopic in LessonPage ("Ver texto completo" toggle, saved in localStorage). Tests `src/test/cards.test.ts`.
- Chat lessons (sample: L1-16 with "Don Memo"): scripts in `src/content/chats/<id>.ts` (one script per theory section, Spanish only), registered in `src/content/chats/index.ts`; UI `src/components/cards/ChatLesson.tsx`. LessonPage shows chat first if a script exists, then cards, with the "Ver texto completo" toggle.
- Interactive lessons (all of Contabilidad: L1-01..15, CON-04..12, 14, 15, L2-01..07; all of Costos: COS-01..14, L3-01..04; all of Auditoría: AUD-01..15, L5-03..05; sim outputs take optional unit; calc has optional unit; L1-16 keeps the chat; e2e walks every interactive subtopic, generated from the registry): `src/content/interactive/<id>.ts` (blocks text/tip/ask/sim/spot/sort/order/match/balance/tacct/entry/rush/calc/multi; games in `src/components/cards/Games.tsx` and `Games2.tsx`; one array per theory section, null = default view), registry `index.ts`; UI `src/components/cards/InteractiveLesson.tsx`. LessonPage priority: interactive > chat > cards > text.
- Tests: `src/test/content.test.ts` checks the whole content bank (unique ids, solutions grade correct, formula guides complete).

## Rules
- Do not change the number or order of a lesson's theory sections. Progress is stored by section index.
- Every commit ends with the session's Co-Authored-By trailer.
- Facts a CP or lawyer must verify are listed in `/mnt/project-files/fincore/temario/Datos_a_verificar_temario_v2.md`.
