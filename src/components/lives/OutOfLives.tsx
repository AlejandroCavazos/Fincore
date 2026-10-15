import { useEffect } from 'react'
import { BookOpen, Clock, HeartPulse, RefreshCw } from 'lucide-react'
import { recoveryLeft, canRecover, canRefill } from '../../lib/lives/service'
import type { Ctx } from '../../lib/lives/service'
import { hms, useLives } from '../../state/lives'
import { navigate } from '../../state/router'
import { Button, Card } from '../ui'
import { REFILL_CONFIRM, REVIEW_LIMIT_TEXT, UPGRADE_TEXT } from './text'

/**
 * Out-of-lives notice. Options in the order the plan defines; upgrading is
 * always a small secondary link, never the main button.
 */
export function OutOfLives({ ctx = {}, paused, title }: { ctx?: Ctx; paused?: boolean; title?: string }) {
  const lv = useLives()
  const s = lv.s
  useEffect(() => {
    lv.track('out_of_lives_viewed', { ...ctx })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (option: string) => lv.track('out_of_lives_choice', { ...ctx, option })
  const recoverHref = `/lives/recover${ctx.topic ? `?topic=${encodeURIComponent(ctx.topic)}` : ''}`
  const theoryHref = ctx.topic ? `/lesson/${ctx.topic}` : '/courses'
  const reviewOk = canRecover(s)
  const reviewLimit = !reviewOk && recoveryLeft(s) === 0 && s.lives < lv.max
  const refillOk = canRefill(s)
  const plus = lv.plan === 'plus'

  const review = (
    <div key="review">
      <Button
        variant={plus && refillOk ? 'secondary' : 'primary'}
        size="lg"
        className="w-full"
        disabled={!reviewOk}
        onClick={() => {
          choose('repasar')
          navigate(recoverHref)
        }}
      >
        <HeartPulse className="h-5 w-5" /> Repasar para recuperar 1 vida
      </Button>
      {reviewLimit && <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">{REVIEW_LIMIT_TEXT}</p>}
    </div>
  )
  const refill = refillOk && (
    <Button
      key="refill"
      size="lg"
      className="w-full"
      onClick={() => {
        if (!window.confirm(REFILL_CONFIRM)) return
        choose('usar recarga')
        lv.refill()
      }}
    >
      <RefreshCw className="h-5 w-5" /> Usar mi recarga de hoy
    </Button>
  )
  const wait = (
    <Button
      key="wait"
      variant="secondary"
      className="w-full"
      onClick={() => {
        choose('esperar')
        navigate('/')
      }}
    >
      <Clock className="h-4 w-4" /> Esperar{lv.nextIn !== null ? ` · próxima vida en ${hms(lv.nextIn)}` : ''}
    </Button>
  )
  const theory = (
    <Button
      key="theory"
      variant="ghost"
      className="w-full"
      onClick={() => {
        choose('leer teoría')
        navigate(theoryHref)
      }}
    >
      <BookOpen className="h-4 w-4" /> Seguir leyendo la teoría
    </Button>
  )

  return (
    <Card className="animate-fade-up text-center" data-testid="out-of-lives">
      <HeartPulse className="mx-auto h-10 w-10 text-red-500" />
      <h2 className="mt-2 text-lg font-bold text-navy-900 dark:text-white">{title ?? 'Te quedaste sin vidas por ahora'}</h2>
      <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
        {paused ? 'Tranquilo, guardamos tu avance: cuando tengas vidas sigues justo donde te quedaste. ' : ''}
        Equivocarse es parte de aprender. Mientras tanto puedes seguir estudiando.
      </p>
      <div className="mx-auto mt-4 grid max-w-sm gap-2">
        {plus ? [refill, review, wait, theory] : [review, wait, theory]}
      </div>
      {lv.plan === 'free' && (
        <a
          href="#/plans"
          onClick={() => {
            choose('mejorar plan')
            lv.track('upgrade_clicked', { ...ctx, from: 'out_of_lives' })
          }}
          className="mt-4 inline-block text-xs text-navy-500 underline-offset-2 hover:underline dark:text-navy-300"
        >
          ¿Quieres más? Plan Plus: {UPGRADE_TEXT}
        </a>
      )}
    </Card>
  )
}
