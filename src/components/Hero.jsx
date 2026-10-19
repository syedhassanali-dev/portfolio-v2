import { useRef } from 'react'
import Count from './Count'

export default function Hero() {
  const ref = useRef(null)
  const bars = [34, 48, 40, 62, 55, 78, 70, 92]

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `rotateY(${-9 + x * 14}deg) rotateX(${5 - y * 12}deg)`
  }
  const reset = () => { ref.current.style.transform = '' }

  return (
    <header className="hero" id="top">
      <div className="wrap grid">
        <div>
          <span className="status"><span className="dot" />Taking 2 new projects this month</span>
          <h1>I build websites that bring you <span className="u">paying clients.</span></h1>
          <p className="lead">
            I'm a React developer who designs and builds fast, good-looking websites and web apps
            for small businesses and startups, made to turn visitors into enquiries.
          </p>
          <div className="cta">
            <a className="btn primary" href="#contact">Get a free quote</a>
            <a className="btn ghost" href="#work">See my results</a>
          </div>
          <div className="trust">
            <div><strong><Count to={40} suffix="+" /></strong>projects delivered</div>
            <div><strong><Count to={98} /></strong>avg. Lighthouse score</div>
            <div><strong><Count to={5} />.0</strong>client rating</div>
          </div>
        </div>

        <div className="stage" onMouseMove={move} onMouseLeave={reset}>
          <div className="browser" ref={ref}>
            <div className="bar"><i /><i /><i /><span>jsonsmith.com/dashboard</span></div>
            <div className="screen">
              <div className="kpis">
                <div className="kpi"><small>Visitors</small><b>12.4k</b><br /><em>▲ 38%</em></div>
                <div className="kpi"><small>Enquiries</small><b>318</b><br /><em>▲ 4x</em></div>
                <div className="kpi"><small>Load time</small><b>0.9s</b><br /><em>▼ 3.1s</em></div>
              </div>
              <div className="chart">
                {bars.map((h, i) => <i key={i} style={{ height: h + '%', animationDelay: i * 90 + 'ms' }} />)}
              </div>
              <div className="lead-row"><span>New enquiry from Sara M.</span><b>Just now</b></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
