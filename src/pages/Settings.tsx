import { useEffect, useRef, useState } from 'react'
import { Download, Smartphone, Trash2, Upload } from 'lucide-react'
import { Button, Card, Notice, PageHeader, SectionTitle, Segmented } from '../components/ui'
import { exportState, importState } from '../lib/backup'
import { clearState } from '../lib/db'
import { defaultState, type ThemePref } from '../lib/progress'
import { canPromptInstall, isIos, isStandalone, onInstallAvailabilityChange, promptInstall } from '../pwa'
import { useI18n, useStore } from '../state/store'
import { useAuth } from '../state/auth'
import type { Lang } from '../types'

export default function SettingsPage() {
  const { state, update, replace, persistence, toast } = useStore()
  const { tx } = useI18n()
  const auth = useAuth()
  const fileRef = useRef<HTMLInputElement>(null)
  const [importErrors, setImportErrors] = useState<string[] | null>(null)
  const [installable, setInstallable] = useState(canPromptInstall())
  const [confirmReset, setConfirmReset] = useState(false)
  useEffect(() => {
    const off = onInstallAvailabilityChange(() => setInstallable(canPromptInstall()))
    return () => {
      off()
    }
  }, [])

  const set = (patch: Partial<typeof state.settings>) => update((s) => ({ ...s, settings: { ...s.settings, ...patch } }))

  const doExport = () => {
    const blob = new Blob([exportState(state)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fincore-progreso-${new Date().toISOString().slice(0, 10)}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    toast({ es: 'Respaldo exportado.', en: 'Backup exported.' }, 'success')
  }

  const doImport = async (file: File) => {
    setImportErrors(null)
    const text = await file.text()
    const r = importState(text)
    if (!r.ok) {
      setImportErrors(r.errors.slice(0, 8))
      return
    }
    replace({ ...r.state, settings: { ...r.state.settings, onboarded: true } })
    toast({ es: 'Progreso importado correctamente.', en: 'Progress imported successfully.' }, 'success')
  }

  return (
    <div>
      <PageHeader title={tx('Configuración', 'Settings')} />


      <SectionTitle>{tx('Idioma', 'Language')}</SectionTitle>
      <Segmented<Lang>
        label={tx('Idioma', 'Language')}
        value={state.settings.lang}
        onChange={(lang) => set({ lang })}
        options={[
          { value: 'es', label: 'Español' },
          { value: 'en', label: 'English' },
        ]}
      />

      <SectionTitle>{tx('Tema', 'Theme')}</SectionTitle>
      <Segmented<ThemePref>
        label={tx('Tema', 'Theme')}
        value={state.settings.theme}
        onChange={(theme) => set({ theme })}
        options={[
          { value: 'light', label: tx('☀ Claro', '☀ Light') },
          { value: 'dark', label: tx('☾ Oscuro', '☾ Dark') },
          { value: 'system', label: tx('Sistema', 'System') },
        ]}
      />

      <SectionTitle>{tx('Aprendizaje', 'Learning')}</SectionTitle>
      <Card className="space-y-4">
        <label className="flex items-center justify-between gap-3">
          <span>
            <span className="block font-medium text-navy-900 dark:text-white">{tx('Modo libre', 'Free mode')}</span>
            <span className="block text-sm text-navy-500 dark:text-navy-300">{tx('Desbloquea todas las lecciones sin seguir el orden.', 'Unlock every lesson regardless of order.')}</span>
          </span>
          <input type="checkbox" className="h-6 w-6 accent-electric-500" checked={state.settings.freeMode} onChange={(e) => set({ freeMode: e.target.checked })} />
        </label>
        <div>
          <label htmlFor="goal" className="block font-medium text-navy-900 dark:text-white">
            {tx('Meta diaria de XP', 'Daily XP goal')}
          </label>
          <select
            id="goal"
            value={state.settings.dailyGoalXp}
            onChange={(e) => set({ dailyGoalXp: Number(e.target.value) })}
            className="mt-1 w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 dark:border-navy-700 dark:bg-navy-950 dark:text-white"
          >
            {[20, 50, 100, 200].map((v) => (
              <option key={v} value={v}>
                {v} XP
              </option>
            ))}
          </select>
        </div>
      </Card>

      <SectionTitle>{tx('Respaldo de progreso (JSON)', 'Progress backup (JSON)')}</SectionTitle>
      <Card className="space-y-3">
        <p className="text-sm text-navy-500 dark:text-navy-300">
          {persistence === 'indexeddb'
            ? tx('Tu progreso se guarda automáticamente en IndexedDB de este navegador.', 'Your progress is saved automatically in this browser’s IndexedDB.')
            : tx('Este navegador no permite almacenamiento persistente: exporta tu progreso para no perderlo.', 'This browser does not allow persistent storage: export your progress to keep it.')}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={doExport}>
            <Download className="h-4 w-4" /> {tx('Exportar', 'Export')}
          </Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}>
            <Upload className="h-4 w-4" /> {tx('Importar', 'Import')}
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            data-testid="import-input"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void doImport(f)
              e.target.value = ''
            }}
          />
        </div>
        {importErrors && (
          <Notice tone="error" title={tx('El archivo no es válido. No se modificó tu progreso.', 'Invalid file. Your progress was not changed.')}>
            <ul className="list-disc pl-5 font-mono text-xs">
              {importErrors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Notice>
        )}
      </Card>

      <SectionTitle>{tx('Instalar la app', 'Install the app')}</SectionTitle>
      <Card className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
        {isStandalone() ? (
          <p>{tx('FINCORE ya está instalada en este dispositivo.', 'FINCORE is already installed on this device.')}</p>
        ) : installable ? (
          <Button onClick={() => void promptInstall()}>
            <Smartphone className="h-4 w-4" /> {tx('Instalar FINCORE', 'Install FINCORE')}
          </Button>
        ) : isIos() ? (
          <p>{tx('En iPhone: abre FINCORE en Safari, toca Compartir y elige «Agregar a pantalla de inicio».', 'On iPhone: open FINCORE in Safari, tap Share and choose "Add to Home Screen".')}</p>
        ) : (
          <p>
            {tx(
              'Usa el menú del navegador → «Instalar aplicación» o «Agregar a pantalla de inicio». La instalación requiere que la app se sirva por HTTPS.',
              'Use the browser menu → "Install app" or "Add to Home Screen". Installation requires the app to be served over HTTPS.',
            )}
          </p>
        )}
      </Card>

      <SectionTitle>{tx('Privacidad y datos', 'Privacy & data')}</SectionTitle>
      <Card className="space-y-3 text-sm text-navy-600 dark:text-navy-300">
        <p>
          {auth.enabled
            ? tx(
                'Para tu cuenta FINCORE solo guarda tu correo. Tu progreso de aprendizaje se guarda en este dispositivo.',
                'For your account FINCORE only stores your email. Your learning progress is stored on this device.',
              )
            : tx(
                'FINCORE no solicita nombre, correo ni datos personales. Solo guarda tu progreso de aprendizaje en este dispositivo.',
                'FINCORE does not ask for your name, email or personal data. It only stores your learning progress on this device.',
              )}
        </p>
        {!confirmReset ? (
          <Button variant="secondary" onClick={() => setConfirmReset(true)}>
            <Trash2 className="h-4 w-4" /> {tx('Borrar todo mi progreso', 'Delete all my progress')}
          </Button>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-red-600">{tx('¿Seguro? Esta acción no se puede deshacer.', 'Are you sure? This cannot be undone.')}</span>
            <Button
              variant="danger"
              onClick={async () => {
                await clearState()
                replace({ ...defaultState(), settings: { ...defaultState().settings, lang: state.settings.lang, onboarded: true } })
                setConfirmReset(false)
                toast({ es: 'Progreso borrado.', en: 'Progress deleted.' })
              }}
            >
              {tx('Sí, borrar', 'Yes, delete')}
            </Button>
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>
              {tx('Cancelar', 'Cancel')}
            </Button>
          </div>
        )}
      </Card>
      <p className="mt-6 text-center text-xs text-navy-400">
        FINCORE v1.0 · {tx('Contenido con fines educativos. No constituye asesoría fiscal, contable ni de inversión.', 'Educational content. Not tax, accounting or investment advice.')}
      </p>
    </div>
  )
}
