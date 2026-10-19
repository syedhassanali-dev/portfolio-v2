import { FAQ } from '../data'

export default function Faq() {
  return (
    <section>
      <div className="wrap">
        <h2>Questions before you hire</h2>
        <div className="faq">
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  )
}
