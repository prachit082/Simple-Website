import Head from 'next/head'
import Navbar from '../nav/navbar';
import styles from '../styles/Home.module.css'
import Socials from "../nav/socials"
import Footer from '../nav/footer';

const About = () => {
    return ( 
        <div className={styles.about}>
        <Head>
        <title>amrohan | About</title>
        <meta name="description" content="About amrohan" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <main className={styles.main}>
            <h1>About <span>Me</span> </h1>
            <h3>Hi, my name is Rohan Salunkhe.</h3>
            <p>I love sharing my work with the world. Knowing that I’m creating for an audience gives each of my projects an additional boost. Although being so public is not always easy, I’ve found the feedback and comments I’ve received to be very helpful in shaping my work. I hope you’ll enjoy browsing my latest projects - get in touch for feedback or possible collaborations 
            </p>
            <div className={styles.info}>
                <h3>Languages I Know </h3>
                <p>PYTHON | C / C++ | REACT | NEXTJS | JAVASCRIPT</p>
            </div>
            </main>
        </div>
     );
}
 
export default About;