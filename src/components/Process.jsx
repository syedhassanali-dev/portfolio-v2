import { STEPS } from '../data'

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <h2>How we work together</h2>
        <div className="steps">
          {STEPS.map(([t, d]) => (
            <div className="step" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
