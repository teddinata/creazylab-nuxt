<template>
  <div>
    <SideMenu/>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="blog-page style-5 color-5">
      <BlogSlider styleType="5" />
      <PopularPosts styleType="5" />
      <AllNews styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../common/navbarScrollEffect";
import SideMenu from '../components/ITCreative/SideMenu';
import Navbar from '../components/Navbars/ITCreativeNav';
import TopNav from '../components/Navbars/TopNav';
import BlogSlider from '../components/Blog/BlogSlider';
import PopularPosts from '../components/Blog/PopularPosts';
import AllNews from '../components/Blog/AllNews';
import Footer from '../components/ITCreative/Footer';

export default {
  name: 'PageBlog5',
  layout: "Main",
  components: {
    SideMenu,
    TopNav,
    Navbar,
    BlogSlider,
    PopularPosts,
    AllNews,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Building The Future Creative - Blog",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
