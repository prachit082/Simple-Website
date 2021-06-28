import Head from 'next/head'
import Footer from '../nav/footer'
import Navbar from '../nav/navbar'
import Socials from "../nav/socials"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>amrohan</title>
        <meta name="description" content="amrohan rohan salunkhe personal portfolio website"/>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>I'm <span>Rohan </span> Salunkhe</h1>
        <p>It’s my privilege to share my interests, stories, photos and skills with you. Below you’ll find a sample of the many things I’ve done. I tweak the website every other day, so come back often to see what's new.</p>
      </div>
      </main>
    </div>
    
  )
}
