import { useState, useEffect } from 'react'

export default function Count({ to, suffix = '' }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let start = null
    const duration = 1400
    const step = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [to])
  return <>{v}{suffix}</>
}
