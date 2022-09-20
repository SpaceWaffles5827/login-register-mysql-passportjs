import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
        <Link href="/login"><h1>Login</h1></Link>
        <Link href="/register"><h1>Register</h1></Link>
        <Link href="/profile"><h1>Profile</h1></Link>
    </div>
  )
}
