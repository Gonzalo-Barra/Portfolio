<template>
  <div>
    <BodyText />
    <BodyIcons />
    <BodyCard />
  </div>
</template>

<script>
import BodyText from "./TheBodyText.vue";
import BodyIcons from "./TheBodyIcons.vue";
import BodyCard from "./TheBodyCard.vue";
export default {
  name: "BodyText-Component",

  components: {
    BodyText,
    BodyIcons,
    BodyCard,
  },
  data: function () {
    return {};
  },
};
</script>

<style  scoped>
h3,
p {
  padding-top: 40px;
  padding-bottom: 30px;
  color: white;
  font-family: "Montserrat", sans-serif;
}

h3 {
  font-weight: 800;
}

p {
  font-weight: 400;
}

.texto {
  text-align: justify;
  text-justify: inter-word;
}
</style>
