'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    href: '/',
    label: 'home'
  },
  {
    href: 'participants',
    label: 'admin'
  }
]

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-7 px-7'>
      <Link href='https://github.com/tfisyu' className='text-2xl'>
        yuri tesão bonito e gostosão
      </Link>

      <nav>
        <ul className='flex gap-x-5 text-[14px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${pathname === link.href ? 'text-zinc-700' : 'text-zinc-400'} text-3xl`} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}