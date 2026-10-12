import { Bot, Calculator, FlaskConical, GraduationCap, TrendingUp, Settings, Star } from 'lucide-react'
import { Card, PageHeader } from '../components/ui'
import { useI18n } from '../state/store'

export default function Tools() {
  const { tx } = useI18n()
  const items = [
    { href: '#/lab', icon: <FlaskConical />, title: tx('Laboratorio contable', 'Accounting lab'), desc: tx('Registra pólizas, consulta cuentas T y genera la balanza.', 'Record entries, view T-accounts and build the trial balance.') },
    { href: '#/calc', icon: <Calculator />, title: tx('Calculadoras financieras', 'Financial calculators'), desc: tx('VP, VF, interés compuesto, anualidades, VPN, TIR, payback, WACC, equilibrio y razones.', 'PV, FV, compound interest, annuities, NPV, IRR, payback, WACC, break-even and ratios.') },
    { href: '#/invest', icon: <TrendingUp />, title: tx('Inversión y valuación', 'Investing & valuation'), desc: tx('Casos de empresas, DCF, escenarios y portafolios.', 'Company cases, DCF, scenarios and portfolios.') },
    { href: '#/exams', icon: <GraduationCap />, title: tx('Evaluaciones', 'Exams'), desc: tx('Exámenes por nivel.', 'Level exams.') },
    { href: '#/tutor', icon: <Bot />, title: tx('Tutor educativo', 'Learning tutor'), desc: tx('Explicaciones, cálculos verificados y ejercicios generados.', 'Explanations, verified calculations and generated exercises.') },
    { href: '#/plans', icon: <Star />, title: tx('Planes', 'Plans'), desc: tx('Gratis, Plus, Pro e Institucional.', 'Free, Plus, Pro and Institutional.') },
    { href: '#/settings', icon: <Settings />, title: tx('Configuración', 'Settings'), desc: tx('Idioma, tema, respaldo e instalación.', 'Language, theme, backup and install.') },
  ]
  return (
    <div>
      <PageHeader title={tx('Herramientas', 'Tools')} />
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((i) => (
          <a key={i.href} href={i.href}>
            <Card className="flex h-full items-start gap-3 transition hover:ring-electric-400">
              <span className="mt-0.5 text-electric-500 [&_svg]:h-6 [&_svg]:w-6">{i.icon}</span>
              <div>
                <p className="font-semibold text-navy-900 dark:text-white">{i.title}</p>
                <p className="text-sm text-navy-500 dark:text-navy-300">{i.desc}</p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
