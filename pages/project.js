import Head from 'next/head'
import Footer from '../nav/footer'
import Navbar from '../nav/navbar'
import Socials from '../nav/socials'
import styles from '../styles/Home.module.css'
const Project = () => {
    return ( 
        <div className={styles.container}>
      <Head>
        <title>amrohan | Project</title>
        <meta name="description" content="rohan salunkhe project amrohan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>My Projects</span> 
        </h1>
        <div className={styles.grid}>
          <a href="https://github.com/amrohan/Searching-Algorithms" className={styles.card}>
            <h2>Searching Algorithms &rarr;</h2>
            <p>Find in-depth information about Algorithms</p>
          </a>

          <a href="https://github.com/amrohan/My-Games" className={styles.card}>
            <h2>Guess Number &rarr;</h2>
            <p>An interactive awesome game!</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </div>
     );
}
 
export default Project;
