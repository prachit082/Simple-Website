import styles from '../styles/Home.module.css'
// Font Awesome Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { faTree } from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
    return ( 
        <div className={styles.social}>              
            <a href="https://www.instagram.com/amrohann/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>												
            <a href="https://www.facebook.com/amrohann"target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>													
            <a href="https://twitter.com/Amrohann"target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>	
            <a href="https://github.com/amrohan"target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://linktr.ee/amrohan"target="_blank"><FontAwesomeIcon icon={faTree}></FontAwesomeIcon></a>
        </div>
     );
}
 
export default Socials;