import { ME } from '../data'

export default function Nav({ theme, setTheme }) {
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">{ME.name.split('  ')[0]}<b>.</b>dev</a>
        <div className="links">
          <a className="hide" href="#work">Work</a>
          <a className="hide" href="#services">Pricing</a>
          <a className="hide" href="#process">Process</a>
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a className="btn primary sm" href="#contact">Hire me</a>
        </div>
      </div>
    </nav>
  )
}
