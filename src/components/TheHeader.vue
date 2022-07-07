<template>
  <div  id="inicio" class="header d-flex flex-column bd-highlight">
    <div class="d-flex flex-column  "  v-animate-css="animationInfinite1">
    <h5>HOLA, MI NOMBRE ES</h5>
    <h1>GONZALO BARRA</h1>
    <h5>FRONT-END DEVELOPER</h5>
    </div>
    
    <div  class="icons"  v-animate-css="animationInfinite2">
    <b-link
      target="_blank"
      href="https://www.linkedin.com/in/gonzalo-barra-valle"
      ><i class="p-2 bd-highlight fa-brands fa-linkedin fa-3x"></i
    ></b-link>
    <b-link target="_blank" href="https://github.com/Gonzalo-Barra"
      ><i class="p-2 bd-highlight fa-brands fa-github fa-3x"></i
    ></b-link>
    <b-link target="_blank" href="https://docs.google.com/document/d/1Ex27Ve5McLMnhr7pbt5LBCWbH9l1W_FwH8kXaLeigCE/edit"
      ><b-img class="pb-4  bd-highlight imagen" src="https://i.imgur.com/sHB9oGt.png"></b-img></b-link>
    </div>

    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      animationInfinite1: {
        classes: "fadeInUpBig",
        delay: 250,
        duration: 800,
        // the animation will repeat 5 times.
      },
      animationInfinite2: {
        classes: "fadeInUpBig",
        delay: 300,
        duration: 800,
        // the animation will repeat 5 times.
      },
    };
  },
};
</script>

<style  scoped>
h1 {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.fa-linkedin {
  color: #0966c2;
}

.fa-github {
  color: white;
}
h5 {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}

.header {
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen{
  width:50px;
  
   color: white !important
}
</style>