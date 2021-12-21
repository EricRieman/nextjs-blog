import Logo from './logo'
import Link from 'next/link'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <header className={style.header}>
      <Link href='/' >
        <a><Logo /></a>
      </Link>
      <nav>
        <ul>
          <li><Link href='/posts'>Posts</Link></li>
          <li><Link href='/contacts'>Contacts</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
