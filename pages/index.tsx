import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { siteLinks, socialLinks } from '../constants/data'

const Home: NextPage = () => {
  return (
    <div className={''}>
      <Nav siteLinks={siteLinks} />

      <main className={''}>

      </main>

      <Footer siteLinks={siteLinks} socialLinks={socialLinks} />
    </div>
  )
}

export default Home
