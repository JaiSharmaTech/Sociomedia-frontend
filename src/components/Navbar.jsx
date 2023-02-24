import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
            <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={100}
                    height={24}
                    priority
            />
        </Link>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder='Search' />
      </div>

      <nav className={styles.navbar}>
        <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='/explore'><li>Explore</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/random'><li>Random</li></Link>
        </ul>
      </nav>

      <div className={styles.userNav}>
        <Link href='/login'><button>Login</button></Link>
        <Link href='/signup'><button>Signup</button></Link>
      </div>
    </header>
  )
}

export default Navbar
