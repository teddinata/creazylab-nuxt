<template>
  <div>
    <SideMenu />
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="about-page style-5">
      <AboutHeader />
      <Community />
      <Philosophy />
      <ChooseUs />
      <Clients :padding="true" />
      <!-- <Numbers /> -->
      <Culture />
      <Team />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import navbarScrollEffect from "../common/navbarScrollEffect";
import TopNav from '../components/Navbars/TopNav';
import SideMenu from '../components/ITCreative/SideMenu';
import Navbar from '../components/Navbars/ITCreativeNav';
import AboutHeader from '../components/Saas/AboutHeader';
import Community from '../components/Saas/Community';
import Philosophy from '../components/Saas/Philosophy';
import ChooseUs from '../components/Saas/ChooseUs';
import Clients from '../components/Saas/Clients';
import Numbers from '../components/Saas/Numbers';
import Culture from '../components/Saas/Culture';
import Team from '../components/Saas/Team';
import Contact from '../components/Saas/Contact';
import Footer from '../components/ITCreative/Footer';

export default {
  name: 'About Us',
  layout: "Main",
  components: {
    SideMenu,
    TopNav,
    Navbar,
    AboutHeader,
    Community,
    Philosophy,
    ChooseUs,
    Clients,
    Numbers,
    Culture,
    Team,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Building The Future Creative - About Us",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
