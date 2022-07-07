
<template>

     
          <b-navbar class=" d-flex justify-content-around" fixed="top">
            <b-navbar-nav>
              <b-nav-item  href="#" v-scroll-to="'#inicio'">Home</b-nav-item>
              <b-nav-item   href="#" v-scroll-to="'#acercademi'">Acerca de mí</b-nav-item>
              <b-nav-item    href="#" v-scroll-to="'#trabajos'">Trabajos</b-nav-item>
            </b-navbar-nav>
          </b-navbar>


</template>

<script>
export default {};
</script>

<style scoped>

.navbar {
    background-color: #000000;
  top: 0;
}
a {
color: white  !important;
}
a:hover {
  color: grey !important;
}
</style>