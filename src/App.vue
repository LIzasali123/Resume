<template>
  <div class="layoutGrid">
    <div class="coverImg"></div>
    <app-header></app-header>
  </div>
</template>

<script>
  import header from './components/HeaderCard/header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': header
    }
}
</script>

<style lang="scss">
*, *::after, *::before {
  margin: 0 !important;
  padding: 0!important;
  box-sizing: inherit !important;
}
html {
  font-size: 76.5% !important; //10px
}

body {
  box-sizing: border-box !important;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem !important;
  line-height: 1.7 !important;

}
.layoutGrid {
  // display: grid;
  // grid-template-rows: 80vh min-content 40vw repeat(3,min-content);
  // grid-template-columns: [sidebar-start ]8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
  display: grid;
  grid-template-rows: 10vh 50vh 10vh;
  grid-template-columns: 20vw 30vw 30vw 20vw;
}

.coverImg {
    background-image: url(./assets/cover2.jpeg);
    background-size: cover;
    background-position: 0 90%;
    background-repeat: no-repeat;
    position: relative;
    grid-row: 1 / 3;
    grid-column: 1 / 5;
}

</style>
