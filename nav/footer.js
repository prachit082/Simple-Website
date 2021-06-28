import styles from '../styles/Home.module.css'
const Footer = () => {
    const name= " Rohan Salunkhe";
    return (   
        <footer className={styles.footer}>  
          Powered by{name}
        </footer>
    );
}
export default Footer;