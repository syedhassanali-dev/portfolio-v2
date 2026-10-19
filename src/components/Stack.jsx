import { STACK } from '../data'

export default function Stack() {
  const loop = [...STACK, ...STACK]
  return (
    <div className="stack">
      <div className="track">{loop.map((s, i) => <span key={i}>{s}</span>)}</div>
    </div>
  )
}
