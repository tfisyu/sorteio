'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    href: '/',
    label: 'main'
  },
  {
    href: 'participants',
    label: 'participantes'
  }
]

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-5 px-5'>
      <Link href='https://github.com/tfisyu' className='text-2xl'>
        tfisyu
      </Link>

      <nav>
        <ul className='flex gap-x-5 text-[10px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${pathname === link.href ? 'text-zinc-700' : 'text-zinc-400'} text-2xl`} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}