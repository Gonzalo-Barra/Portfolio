<template>

  <div  class="footer sticky-bottom d-flex justify-content-around">
    <div>
      <h6>buscame en</h6>
      <b-link
        target="_blank"
        href="https://www.linkedin.com/in/gonzalo-barra-valle"
        ><i class="fa-brands fa-linkedin fa-2x"></i
      ></b-link>
      <b-link target="_blank" href="https://github.com/Gonzalo-Barra"
        ><i class="fa-brands fa-github fa-2x"></i
      ></b-link>
    </div>

    <div>
      <h6 class="nombre align-middle ">© 2022 Gonzalo Barra</h6>
    </div>

    <div>
      <h6>Hecho con</h6>
      <i class="fa-brands fa-vuejs fa-2x"></i>
      <i class="fa-brands fa-bootstrap fa-2x"></i>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style  scoped>
.footer {
  background-color: #000000;
  padding: 20px 0;
}

.fa-linkedin {
  color: #0966c2;
}

.fa-github {
  color: white;
}

.fa-vuejs {
  color: #3fb984;
}

.fa-bootstrap {
  color: #771bf6;
}

h6 {
  color: white;
}
</style>
