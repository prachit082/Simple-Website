import styles from '../styles/Home.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Socials from './socials';
const Layout = ({ children }) => {
    return ( 
        <div className={styles.layout}>
            <Navbar />
            <Socials />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;