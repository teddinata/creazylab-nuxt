<template>
  <div>
    <SideMenu/>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="contact-page style-5">
      <Form styleType="5" />
      <Map />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../common/navbarScrollEffect";
import SideMenu from '../components/ITCreative/SideMenu';
import TopNav from '../components/Navbars/TopNav';
import Navbar from '../components/Navbars/ITCreativeNav';
import Form from '../components/Contact/Form';
import Map from '../components/Contact/Map';
import Footer from '../components/ITCreative/Footer';

export default {
  name: 'ContactUs',
  layout: "Main",
  components: {
    SideMenu,
    TopNav,
    Navbar,
    Form,
    Map,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Building The Future Creative - Contact Us",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
