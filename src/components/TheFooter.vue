<template>

  <div  class="footer sticky-bottom d-flex justify-content-around">
    <div>
      <h6>Buscame en</h6>
      <b-link
        target="_blank"
        href="https://www.linkedin.com/in/gonzalo-barra-valle"
        ><i class="fa-brands p-1 fa-linkedin fa-2x"></i
      ></b-link>
      <b-link target="_blank" href="https://github.com/Gonzalo-Barra"
        ><i class="fa-brands p-1 fa-github fa-2x"></i
      ></b-link>
          <b-link target="_blank" href="https://docs.google.com/document/d/1Ex27Ve5McLMnhr7pbt5LBCWbH9l1W_FwH8kXaLeigCE/edit"
      ><b-img class="pb-3  bd-highlight imagen" src="https://i.imgur.com/sHB9oGt.png"></b-img></b-link>
    </div>

    <div>
      <h6 class="py-4 nombre align-middle ">© 2022 Gonzalo Barra</h6>
    </div>

    <div>
      <h6>Hecho con</h6>
      <i class="fa-brands fa-vuejs fa-2x p-1"></i>
      <i class="fa-brands fa-bootstrap fa-2x p-1"></i>
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

.imagen{
    width:35px;
}
</style>
