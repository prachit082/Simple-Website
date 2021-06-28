import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return ( 
        <nav className={styles.nav}>             
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/project"><a>Projects</a></Link>
        </nav>
     );
}
 
export default Navbar;