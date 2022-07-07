<template>
  <b-container id="acercademi" fluid>
   
        <div
          class="titulo1 mx-auto"
          v-animate-onscroll.repeat="{
            down: 'animated fadeInDown',
            up: 'animated fadeInUp',
          }"
        >
        <b-row  align-h="center" >
            <b-col cols="12" md="6">
          <h3 class="titulo ">Acerca de mí</h3>
          <p class=" text-justify" >
            Titulado de Ingeniería Electrónica de la Universidad Tecnológica de
            Chile, INACAP. Apasionado por el desarrollo web y la tecnología, me
            encanta enfrentar nuevos desafíos y sobre todo, estar constantemente
            aprendiendo. Flexibilidad, capacidad de adaptación, facilidad para
            trabajar e integrarse a equipos de trabajo.
            <br />
            <br />
            <br />
            Realicé el bootcamp de Talento Digital por 6 meses donde me
            especialicé en el desarrollo Front-end moderno. Donde adquirí
            conocimientos y habilidades principalmente con el framework de
            Vue.JS. Actualmente me desempeño en distintos trabajos relacionados
            con el desarrollo web en WordPress en empresas vinculadas a las
            emisoras de radio de forma particular
          </p>
          </b-col>
        </b-row>
        </div>

  </b-container>
</template>

<script>
export default {};
</script>

<style  scoped>
h3,
p {
  color: white;
  font-family: "Montserrat", sans-serif;
}


.titulo1 {
padding-top: 10vh;
  font-weight: 800;
}

p {
  font-weight: 400;
}

.titulo {
  margin-bottom: 100px;
   font-weight: 800;
}


</style>
