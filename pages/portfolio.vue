<template>
  <div>
    <SideMenu />
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="portfolio-page style-1">
      <Projects styleType="5" />
      <Download styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../common/navbarScrollEffect";
import TopNav from '../components/Navbars/TopNav';
import SideMenu from '../components/ITCreative/SideMenu';
import Navbar from '../components/Navbars/ITCreativeNav';
import Projects from '../components/Portfolio/Projects';
import Download from '../components/Portfolio/Download';
import Footer from '../components/ITCreative/Footer';


export default {
  name: 'Portfolio',
  layout: "Main",
  components: {
    SideMenu,
    TopNav,
    Navbar,
    Projects,
    Download,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Building The Future Creative - Our Portfolio",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
