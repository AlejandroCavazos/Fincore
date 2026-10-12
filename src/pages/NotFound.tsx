import { Card } from '../components/ui'
import { useI18n } from '../state/store'

export default function NotFound() {
  const { tx } = useI18n()
  return (
    <Card className="text-center">
      <h1 className="text-xl font-bold text-navy-900 dark:text-white">{tx('Página no encontrada', 'Page not found')}</h1>
      <p className="mt-2 text-sm text-navy-500">{tx('El enlace no existe o fue movido.', 'This link does not exist or was moved.')}</p>
      <a href="#/" className="mt-4 inline-block font-semibold text-electric-600">
        {tx('Ir al inicio', 'Go home')}
      </a>
    </Card>
  )
}
