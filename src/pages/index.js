import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
// import Header from '../containers/layout/header/header-three'
// import Header from '../containers/layout/header/header-four'
import Header from '../containers/layout/header/header-three'

import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-services/hero-area'
import FeaturesArea from '../containers/index-services/features-area'
import AboutArea from '../containers/index-services/about-area'
import ServicesArea from '../containers/index-services/services-area'
import GradationArea from '../containers/index-services/gradation-area'
import CtaArea from '../containers/global/cta-area/section-one'
import CaseStudyArea from '../containers/index-services/case-study-area'
import PricingArea from '../containers/index-services/pricing-area'
import BlogArea from '../containers/index-services/blog-area'
import ContactArea from '../containers/global/contact-area/contact-four'
import ClientsArea from '../containers/global/clients-area'

// import Features from '../containers/elements/box-image/section-one'
// import Features from '../containers/elements/box-image/section-seven'
import Features from '../containers/elements/box-image/section-four'


import AboutServiceWrap from '../containers/index-infotechno/about-service-wrap'
import ServicesAreaFeatures from '../containers/index-infotechno/services-area'
// import AboutArea from '../containers/index-infotechno/about-area'


const IndexServices = ({ location }) => (
  <Layout location={location}>
    <SEO />
    <Header transparent />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <ServicesArea />
      

      <AboutServiceWrap>
        <AboutArea />
        <ServicesAreaFeatures />
      </AboutServiceWrap>

      {/* <Features /> */}

      <CtaArea />


      <GradationArea />

      <ContactArea />
      
    </main>
    
  </Layout>
)

export default IndexServices
