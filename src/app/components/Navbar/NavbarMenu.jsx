import Link from 'next/link'
import { NAVBAR_LINKS } from './contants'

export default function NavbarMenu () {
  return (
    <nav aria-label='Primary Navigation'>
      <ul className='hidden md:flex linkColor'>
        {NAVBAR_LINKS.map(link => (
          <li
            key={link.href}
            className='ml-10 text-sm uppercase hover:border-b'
          >
            <Link href={link.href}>
              <div aria-label={`Go to ${link.label}`}>{link.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
