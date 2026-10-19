import { REVIEWS } from '../data'

export default function Reviews() {
  return (
    <section>
      <div className="wrap">
        <h2>What clients say</h2>
        <div className="quotes">
          {REVIEWS.map(([text, name, role, color]) => (
            <div className="q" key={name}>
              <div className="stars">★★★★★</div>
              <p>{text}</p>
              <div className="who">
                <div className="av" style={{ background: color }}>{name[0]}</div>
                <div><b>{name}</b>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
