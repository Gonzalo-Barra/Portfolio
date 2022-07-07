<template>
  <b-container id="trabajos" fluid>
    <div class="trabajo mx-auto" v-animate-onscroll.repeat="{
            down: 'animated fadeInDown',
            up: 'animated fadeInUp',
          }">
      <h3 class="titulo">Trabajos</h3>

      <div class="cartas mx-auto">
        <b-card-group
          class="
            d-flex
            flex-column flex-sm-row flex-md-row
            justify-content-around
            pb-4
          "
        >
          <b-card
            style="max-width: 15rem"
            :title="item.name"
            :img-src="item.img"
            bg-variant="dark"
            img-top
            text-variant="white"
            class="text-center mx-auto shadow"
            v-for="item in items1"
            :key="item.id"
          >
            <b-button target="_blank" :href="item.link" variant="primary">Go Demo</b-button>
          </b-card>
        </b-card-group>

        <b-card-group
          class="
            d-flex
            flex-column flex-sm-row flex-md-row
            justify-content-around
            pb-4
          "
        >
          <b-card
            style="max-width: 15rem"
            :title="item.name"
            :img-src="item.img"
            bg-variant="dark"
            img-top
            text-variant="white"
            class="text-center mx-auto"
            v-for="item in items2"
            :key="item.id"
          >
            <b-button :href="item.link" variant="primary">Go Demo</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "BodyCard-Component",
  data: function () {
    return {
      items1: [
        {
          name: "eShop",
          img: "https://i.imgur.com/bBFz4gp.png",
          link: "https://gonzalo-barra.github.io/carrito-compras-vue/",
        },
        {
          name: "Login app",
          img: "https://i.imgur.com/Q34TNbh.png",
          link: "https://gonzalo-barra.github.io/login-app-firebase/",
        },
        {
          name: "gigeoART",
          img: "https://i.imgur.com/SlZ5fZS.png",
          link: "https://gonzalo-barra.github.io/GIGEO-APP/",
        },
      ],
      items2: [
        {
          name: "barbershop",
          img: "https://i.imgur.com/KaJzhyz.png",
          link: "https://gonzalo-barra.github.io/Barbershop-blog/",
        },
        {
          name: "ScriptDog",
          img: "https://i.imgur.com/lXDOafl.png",
          link: "https://scriptdog.cl/",
        },
        {
          name: "Viajes Chile",
          img: "https://i.imgur.com/MlViIv1.jpg",
          link: "https://gonzalo-barra.github.io/Viajes-Chile/",
        },
      ],
    };
  },
  components: {},
};
</script>

<style  scoped>
h3 {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.titulo {
  margin-top: 8vh;
  margin-bottom: 10vh;
}

img {
  width: 100%;
}
</style>