<template>
  <nav class="navbar navbar-expand-lg navbar-light style-7" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/assets/img/creazylablogo.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
          <li class="nav-item">
            <NuxtLink :to="{name: 'index'}" class="nav-link" :class="{active: $route.name === 'index'}"  >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="{name: 'about'}" class="nav-link" :class="{active: $route.name === 'about'}">
              about
            </NuxtLink>
          </li>
          <li class="nav-item">
            <!-- <NuxtLink to="/page-portfolio-app" class="nav-link"> -->
            <NuxtLink :to="{name: 'portfolio'}" class="nav-link" :class="{active: $route.name === 'portfolio'}" >
              portfolio
            </NuxtLink>
          </li>
          <li class="nav-item">
            <!-- <NuxtLink to="/page-blog-app" class="nav-link"> -->
            <NuxtLink :to="{name: 'blog'}" class="nav-link" :class="{active: $route.name === 'blog'}">
              blog
              <small class="fs-10px icon-20 rounded-pill bg-blue5 text-white fw-bold px-3 ms-2 d-inline-flex justify-content-center align-items-center">3</small>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <!-- <NuxtLink to="/page-contact-app" class="nav-link"> -->
            <NuxtLink :to="{name: 'contact-us'}" class="nav-link" :class="{active: $route.name === 'contact-us'}">
              contact
            </NuxtLink>
          </li>
          <!-- <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              pages
              <small class="hot alert-danger text-danger">hot</small>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><NuxtLink to="/page-about-app" class="dropdown-item">about</NuxtLink></li>
              <li><NuxtLink to="/page-product-app" class="dropdown-item">product</NuxtLink></li>
              <li><NuxtLink to="/page-services-app" class="dropdown-item">services</NuxtLink></li>
              <li><NuxtLink to="/page-shop-app" class="dropdown-item">shop</NuxtLink></li>
              <li><NuxtLink to="/page-single-project-app" class="dropdown-item">single project</NuxtLink></li>
            </ul>
          </li> -->
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <a href="#" class="me-4">
              <img src="/assets/img/icons/user.png" alt="" />
            </a>
            <a href="" class="side_menu_btn" @click="toggleSideMenu">
              <img src="/assets/img/icons/4dots.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  methods: {
    // handle active menu
    handleActiveMenu() {
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      const currentLocation = location.href;
      const currentLocationWithoutHash = currentLocation.split('#')[0];

      navLinks.forEach((link) => {
        if (link.href === currentLocationWithoutHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    },
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add('show');
      dropDownMenu?.classList?.add('show');
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
      const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
      const dropDownMenu = dropdown.querySelector('.dropdown-menu');

      dropDownToggler?.classList?.remove('show');
      dropDownMenu?.classList?.remove('show');
    },
    toggleSideMenu(e) {
      e.preventDefault();

      document.querySelector('.side_menu_btn').classList.toggle('active');

      const side_menu = document.getElementById('side_menu');
      const side_overlay = document.querySelector('.side_overlay');

      side_menu && side_menu.classList.toggle('show');
      side_overlay && side_overlay.classList.toggle('show');
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);
  },
}
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #00c58e;
}
</style>
