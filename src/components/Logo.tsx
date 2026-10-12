export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#0b1731" />
      <path d="M16 44V20h22" stroke="#1f7aff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 32h14" stroke="#1f7aff" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M34 44l8-9 5 5 7-10" stroke="#12a86d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark size={compact ? 28 : 34} />
      <span className="leading-tight">
        <span className="block text-base font-extrabold tracking-tight text-navy-900 dark:text-white">FINCORE</span>
        {!compact && <span className="block text-[11px] font-medium text-navy-400">Accounting &amp; Finance Academy</span>}
      </span>
    </span>
  )
}
