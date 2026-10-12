import { Fragment, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes } from 'react'

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(' ')
}

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: 'sm' | 'md' | 'lg' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none'
  const sizes = { sm: 'px-3 py-1.5 text-sm min-h-9', md: 'px-4 py-2.5 text-sm min-h-11', lg: 'px-5 py-3 text-base min-h-12' }
  const variants: Record<Variant, string> = {
    primary: 'bg-electric-500 text-white hover:bg-electric-600 shadow-sm shadow-electric-500/20',
    secondary:
      'bg-white text-navy-800 ring-1 ring-navy-200 hover:bg-navy-50 dark:bg-navy-800 dark:text-navy-50 dark:ring-navy-600 dark:hover:bg-navy-700',
    ghost: 'text-navy-700 hover:bg-navy-100 dark:text-navy-100 dark:hover:bg-navy-800',
    success: 'bg-money-500 text-white hover:bg-money-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button type="button" className={cx(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}

export function Card({ className, children, as: As = 'div', ...rest }: { className?: string; children: ReactNode; as?: 'div' | 'section' | 'article' } & Record<string, unknown>) {
  return (
    <As className={cx('rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-100 dark:bg-navy-900 dark:ring-navy-800', className)} {...rest}>
      {children}
    </As>
  )
}

export function ProgressBar({ value, className, tone = 'electric', label }: { value: number; className?: string; tone?: 'electric' | 'money'; label?: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100)
  return (
    <div
      className={cx('h-2 w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800', className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={label}
    >
      <div className={cx('h-full rounded-full transition-all duration-500', tone === 'money' ? 'bg-money-500' : 'bg-electric-500')} style={{ width: `${pct}%` }} />
    </div>
  )
}

export function Badge({ children, tone = 'navy', className }: { children: ReactNode; tone?: 'navy' | 'electric' | 'money' | 'amber' | 'red'; className?: string }) {
  const tones = {
    navy: 'bg-navy-100 text-navy-700 dark:bg-navy-800 dark:text-navy-100',
    electric: 'bg-electric-500/10 text-electric-700 dark:text-electric-300',
    money: 'bg-money-500/10 text-money-700 dark:text-money-300',
    amber: 'bg-amber-500/15 text-amber-800 dark:text-amber-300',
    red: 'bg-red-500/10 text-red-700 dark:text-red-300',
  }
  return <span className={cx('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold', tones[tone], className)}>{children}</span>
}

export function PageHeader({ title, subtitle, right }: { title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cx('mb-2 mt-6 text-sm font-bold uppercase tracking-wider text-navy-500 dark:text-navy-300', className)}>{children}</h2>
}

export function Field({
  label,
  hint,
  error,
  id,
  suffix,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string | null; id: string; suffix?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-navy-700 dark:text-navy-100">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
          className={cx(
            'tabular w-full rounded-xl border bg-white px-3 py-2.5 text-navy-900 outline-none transition focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 dark:bg-navy-950 dark:text-white',
            error ? 'border-red-500' : 'border-navy-200 dark:border-navy-700',
            suffix && 'pr-12',
          )}
          {...rest}
        />
        {suffix && <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-navy-400">{suffix}</span>}
      </div>
      {error ? (
        <p id={`${id}-err`} className="mt-1 text-xs font-medium text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-navy-400">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function Select({ label, id, children, className, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & { label?: string; id: string }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-navy-700 dark:text-navy-100">
          {label}
        </label>
      )}
      <select
        id={id}
        className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 dark:border-navy-700 dark:bg-navy-950 dark:text-white"
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
  label: string
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex w-full gap-1 overflow-x-auto rounded-xl bg-navy-100 p-1 dark:bg-navy-800">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={cx(
            'min-h-9 flex-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold transition',
            value === o.value ? 'bg-white text-navy-900 shadow-sm dark:bg-navy-600 dark:text-white' : 'text-navy-500 hover:text-navy-800 dark:text-navy-300',
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** Renders text supporting **bold** markup only (no HTML injection). */
export function Rich({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-navy-900 dark:text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </span>
  )
}

export function Stat({ label, value, icon, tone = 'electric' }: { label: string; value: ReactNode; icon?: ReactNode; tone?: 'electric' | 'money' | 'amber' }) {
  const tones = { electric: 'text-electric-500', money: 'text-money-500', amber: 'text-amber-500' }
  return (
    <Card className="flex items-center gap-3 p-3">
      {icon && <div className={cx('shrink-0', tones[tone])}>{icon}</div>}
      <div className="min-w-0">
        <div className="tabular text-lg font-bold leading-tight text-navy-900 dark:text-white">{value}</div>
        <div className="truncate text-xs text-navy-500 dark:text-navy-300">{label}</div>
      </div>
    </Card>
  )
}

export function Notice({ tone = 'info', title, children }: { tone?: 'info' | 'warning' | 'success' | 'error'; title?: string; children: ReactNode }) {
  const tones = {
    info: 'bg-electric-500/8 ring-electric-500/30 text-navy-800 dark:text-navy-100',
    warning: 'bg-amber-500/10 ring-amber-500/40 text-amber-900 dark:text-amber-200',
    success: 'bg-money-500/10 ring-money-500/40 text-money-800 dark:text-money-200',
    error: 'bg-red-500/10 ring-red-500/40 text-red-800 dark:text-red-200',
  }
  return (
    <div className={cx('rounded-xl p-3 text-sm ring-1', tones[tone])} role={tone === 'error' ? 'alert' : undefined}>
      {title && <div className="mb-0.5 font-semibold">{title}</div>}
      {children}
    </div>
  )
}
