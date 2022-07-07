<template>
<d-container fluid>
  <div id="app">
    <div>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
  </d-container>
</template>
<script>
import Navbar from "./components/TheNavbar.vue";
import Header from "@/components/TheHeader.vue";
import Body from "@/components/TheBody.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Body,

    Footer,
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1a1b1c;
}


</style>
