import type { NextPage } from 'next'
import Nav from '../components/Nav'
import Tiers from '../components/Tiers'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { siteLinks, pricingData, featureTableData, socialLinks } from '../constants/data'

const Home: NextPage = () => {
  return (
    <main>
      <Nav siteLinks={siteLinks} />
      <Tiers pricingData={pricingData} />
      <Features featureTableData={featureTableData} />
      <Footer siteLinks={siteLinks} socialLinks={socialLinks} />
    </main>
  )
}

export default Home
