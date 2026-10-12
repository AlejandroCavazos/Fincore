import { useState } from 'react'
import { ArrowRight, BookOpen, Calculator, FlaskConical } from 'lucide-react'
import { Logo } from '../components/Logo'
import { Button, cx } from '../components/ui'
import { navigate } from '../state/router'
import { useI18n, useStore } from '../state/store'
import type { Lang } from '../types'

export default function Welcome() {
  const { update, state } = useStore()
  const { tx } = useI18n()
  const [step, setStep] = useState<'welcome' | 'language'>('welcome')

  const setLang = (lang: Lang) => update((s) => ({ ...s, settings: { ...s.settings, lang } }))
  const finish = () => {
    update((s) => ({ ...s, settings: { ...s.settings, onboarded: true } }))
    navigate('/')
  }

  const features = [
    { icon: <BookOpen className="h-5 w-5" />, es: '6 niveles: de la partida doble a la valuación DCF', en: '6 levels: from double entry to DCF valuation' },
    { icon: <FlaskConical className="h-5 w-5" />, es: 'Laboratorio contable con pólizas, cuentas T y balanza', en: 'Accounting lab with journal entries, T-accounts and trial balance' },
    { icon: <Calculator className="h-5 w-5" />, es: 'Calculadoras de VPN, TIR, WACC y punto de equilibrio', en: 'NPV, IRR, WACC and break-even calculators' },
  ]

  return (
    <div className="pt-safe pb-safe flex min-h-dvh flex-col bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 text-white">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-10">
        <div className="[&_span]:!text-white">
          <Logo />
        </div>
        {step === 'welcome' ? (
          <div className="animate-fade-up mt-10 flex flex-1 flex-col">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight">
              {tx('Aprende Contaduría y Finanzas desde cero', 'Learn Accounting and Finance from scratch')}
            </h1>
            <p className="mt-3 text-navy-200">
              {tx(
                'Lecciones cortas, ejercicios con retroalimentación inmediata, repetición espaciada y simuladores profesionales.',
                'Short lessons, exercises with instant feedback, spaced repetition and professional simulators.',
              )}
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f.es} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <span className="text-electric-300">{f.icon}</span>
                  <span className="text-sm">{tx(f.es, f.en)}</span>
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <Button size="lg" className="mt-10 w-full" onClick={() => setStep('language')}>
              {tx('Comenzar', 'Get started')} <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="mt-3 text-center text-xs text-navy-300">
              {tx('Tu progreso se guarda solo en este dispositivo. No pedimos datos personales.', 'Your progress is stored only on this device. No personal data required.')}
            </p>
          </div>
        ) : (
          <div className="animate-fade-up mt-10 flex flex-1 flex-col">
            <h1 className="text-2xl font-bold">{tx('Elige tu idioma', 'Choose your language')}</h1>
            <p className="mt-2 text-sm text-navy-200">{tx('Puedes cambiarlo después en Configuración.', 'You can change it later in Settings.')}</p>
            <div role="radiogroup" aria-label={tx('Idioma', 'Language')} className="mt-6 space-y-3">
              {(
                [
                  ['es', 'Español', 'México · NIF'],
                  ['en', 'English', 'IFRS · International'],
                ] as const
              ).map(([code, name, sub]) => (
                <button
                  key={code}
                  type="button"
                  role="radio"
                  aria-checked={state.settings.lang === code}
                  onClick={() => setLang(code)}
                  className={cx(
                    'flex w-full items-center justify-between rounded-2xl p-4 text-left ring-2 transition',
                    state.settings.lang === code ? 'bg-electric-500/15 ring-electric-400' : 'bg-white/5 ring-white/10 hover:ring-white/30',
                  )}
                >
                  <span>
                    <span className="block text-lg font-semibold">{name}</span>
                    <span className="block text-xs text-navy-300">{sub}</span>
                  </span>
                  <span className={cx('h-5 w-5 rounded-full ring-2', state.settings.lang === code ? 'bg-electric-400 ring-electric-300' : 'ring-white/30')} />
                </button>
              ))}
            </div>
            <div className="flex-1" />
            <Button size="lg" className="mt-10 w-full" onClick={finish}>
              {tx('Entrar a FINCORE', 'Enter FINCORE')} <ArrowRight className="h-5 w-5" />
            </Button>
            <button type="button" className="mt-3 text-sm text-navy-300 hover:text-white" onClick={() => setStep('welcome')}>
              {tx('Volver', 'Back')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
