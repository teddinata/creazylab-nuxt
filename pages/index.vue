<!-- <template>
  <div>
    <Header />
    <Features />
    <Demos />
    <InnerPages />
    <BuyNow />
    <Portfolio />
    <Codei />
    <BestFeatures />
    <Responsive />
    <AllFeatures />
    <Testimonials />
    <CallToAction />
  </div>
</template>

<script>
import Header from '../components/Preview/Header';
import Features from '../components/Preview/Features';
import Demos from '../components/Preview/Demos';
import InnerPages from '../components/Preview/InnerPages';
import BuyNow from '../components/Preview/BuyNow';
import Portfolio from '../components/Preview/Portfolio';
import Codei from '../components/Preview/Codei';
import BestFeatures from '../components/Preview/BestFeatures';
import Responsive from '../components/Preview/Responsive';
import AllFeatures from '../components/Preview/AllFeatures';
import Testimonials from '../components/Preview/Testimonials';
import CallToAction from '../components/Preview/CallToAction';

export default {
  name: 'LandingPreview',
  layout: "Preview",
  components: {
    Header,
    Features,
    Demos,
    InnerPages,
    BuyNow,
    Portfolio,
    Codei,
    BestFeatures,
    Responsive,
    AllFeatures,
    Testimonials,
    CallToAction,
  },
  head() {
    return {
      titleTemplate: "%s - Preview"
    }
  },
  mounted() {
    if (document.querySelectorAll('body').length > 1) {
      document.body.remove();
    }

    document.body.classList.add('index-main');
  }
}
</script> -->

<template>
  <div>
    <SideMenu />
    <Navbar />
    <Header />
    <main>
      <Features />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ChooseUs />
      <Blog />
      <ChatBanner />
    </main>
    <Footer />
  </div>
</template>

<script>
import SideMenu from '../components/ITCreative/SideMenu';
import Navbar from '../components/Navbars/ITCreativeNav';
import Header from '../components/ITCreative/Header';
import Features from '../components/ITCreative/Features';
import About from '../components/ITCreative/About';
import Services from '../components/ITCreative/Services';
import Projects from '../components/ITCreative/Projects';
import Testimonials from '../components/ITCreative/Testimonials';
import ChooseUs from '../components/ITCreative/ChooseUs';
import Blog from '../components/ITCreative/Blog';
import ChatBanner from '../components/ITCreative/ChatBanner';
import Footer from '../components/ITCreative/Footer';

export default {
  name: 'HomeITSolutions2',
  layout: "Main",
  components: {
    SideMenu,
    Navbar,
    Header,
    Features,
    About,
    Services,
    Projects,
    Testimonials,
    ChooseUs,
    Blog,
    ChatBanner,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Building The Future Creative",
    }
  }
}
</script>
