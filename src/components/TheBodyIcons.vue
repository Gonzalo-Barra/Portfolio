<template>
  <b-container v-animate-onscroll.repeat="{
            down: 'animated fadeInUp',
            up: 'animated fadeInDown',
          }">
    <div class="titulo">
      <h2>Tecnologías que he aprendido</h2>
    </div>



    <!-- Comment -->
    <div class="icons">
    <div  class="mx-auto  d-flex flex-column flex-sm-row bd-highlight justify-content-center">
      <div
      
        class=" mx-4 bd-highlight"
        v-for="item1 in items1"
        :key="item1.id"
      >
        <b-img
       
          width="50"
          height="50"
          rounded="square"
          alt="Circle image"
          :src="item1.img"
        ></b-img>
        <p>{{ item1.name }}</p>
      </div>
      </div>

      <!-- Comment -->

    <!-- Comment -->
    <div  class="mx-auto  d-flex flex-column flex-sm-row bd-highlight justify-content-center">
      <div
       class=" mx-4 bd-highlight"
        v-for="item2 in items2"
        :key="item2.id"
      >
        <b-img
          width="50"
          height="50"
          rounded="square"
          alt="Circle image"
          :src="item2.img"
        ></b-img>
        <p>{{ item2.name }}</p>
      </div>

      <!-- Comment -->
    </div>
</div>
  </b-container>
</template>

<script>
export default {
  name: "BodyIcons-Component",
  data: function () {
    return {
      items1: [
        {
          name: "HTML5",
          img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
          name: "CSS3",
          img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
        {
          name: "JavaScript",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
          name: "BootStrap",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        },
        {
          name: "SASS",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
        },
        {
          name: "Vue.JS",
          img: "https://vuejs.org//images/logo.png",
        },
        {
          name: "React Native",
          img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
        },
      ],
      items2: [
        {
          name: "NodeJS",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
        },
        {
          name: "ExpressJS",
          img: "https://jsurt.github.io/jacks-portfolio/images/color-express-icon%20(1).png",
        },
        {
          name: "MongoDB",
          img: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          name: "GIT",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
        },
      ],
    };
  },
};
</script>

<style  scoped>
p,
h2 {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
p {
  font-weight: 400;
}

.titulo{
  padding-top: 10vh;
  margin-bottom: 5vh;
}

.icons{
  padding: 40px 0;
}
</style>