// components/StatItem.tsx
"use client"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function StatItem({
  end,
  suffix = '',
  label,
}: {
  end: number
  suffix?: string
  label: string
}) {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="space-y-4">
      <div className="text-5xl font-bold">
        {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : null}
      </div>
      <p>{label}</p>
    </div>
  )
}
