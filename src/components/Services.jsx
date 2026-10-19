import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <h2>Clear packages, fixed prices</h2>
        <p className="lead">You know the cost before we start. Need something different? Ask for a custom quote.</p>
        <div className="svc">
          {SERVICES.map((s) => (
            <div key={s.n} className={'card' + (s.pop ? ' pop' : '')}>
              <h3>{s.n}</h3>
              <div className="price"><small>{s.note} </small>{s.p}</div>
              <ul>{s.pts.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="btn primary" href="#contact">Choose {s.n}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
