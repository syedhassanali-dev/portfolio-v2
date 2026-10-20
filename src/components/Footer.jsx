import { ME } from '../data'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {ME.name}. Built with React.</span>
          <span>Available worldwide</span>
        </div>
      </footer>
      <a className="float" href={`https://wa.me/${ME.whatsapp}`} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={25} />
      </a>
    </>
  )
}
