<template>
  <div>
    <div class="side_menu style-7" id="side_menu">
      <a href="#0" class="side_menu_cls" @click="toggleSideMenu">
        <img src="/assets/img/icons/4dots.png" alt="" />
      </a>
      <div class="content">
        <div class="logo">
          <a href="#" class="w-100">
            <img src="/assets/img/creazylablogo.png" alt="" />
          </a>
        </div>
        <div class="pages_links">
          <ul>
            <li><NuxtLink :to="{name: 'index'}" :class="{active: $route.name==='index'}">Home</NuxtLink></li>
            <li><NuxtLink :to="{name: 'about'}" :class="{active: $route.name==='about'}">about</NuxtLink></li>
            <li><NuxtLink :to="{name: 'portfolio'}" :class="{active: $route.name==='portfolio'}">portfolio</NuxtLink></li>
            <li><NuxtLink :to="{name: 'blog'}" :class="{active: $route.name==='blog'}">blog</NuxtLink></li>
            <li><NuxtLink :to="{name: 'contact-us'}" :class="{active: $route.name==='contact-us'}">contact</NuxtLink></li>
            <!-- <li><NuxtLink :to="{name: 'index'}">shop</NuxtLink></li> -->
          </ul>
        </div>
        <div class="side_foot">
          <h5> get in touch </h5>
          <div class="row">
            <div class="col-lg-6">
              <a href="tel:+6285155095022"> <i class="fal fa-phone-alt me-2"></i> (+62) 85 155 095 022 </a>
            </div>
            <!-- whatsapp -->
            <div class="col-lg-6">
              <a href="https://wa.me/6285155095022" target="_blank"> <i class="fab fa-whatsapp me-2 mt-4 mt-lg-0"></i> (+62) 85 155 095 022 </a>
            </div>
            <div class="col-lg-12 mt-2">
              <a href="mailto:halo@creazylab.id"> <i class="fal fa-envelope me-2 mt-4 mt-lg-0"></i> halo@creazylab.id </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side_overlay"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSideMenu(e) {
      e.preventDefault();
      const side_menu = document.getElementById('side_menu');
      const side_overlay = document.querySelector('.side_overlay');

      side_menu && side_menu.classList.remove('show');
      side_overlay && side_overlay.classList.remove('show');
    }
  }
}
</script>
