<template>
  <div class="layoutGrid">
    <div class="coverImg"></div>
    <app-header></app-header>
    <app-info-projects></app-info-projects>
    <app-gallery-projects></app-gallery-projects>
  </div>
</template>

<script>
  import header from './components/HeaderCard/header.vue'
  import infoProjects from './components/infoProjects/infoProjects.vue'
  import galleryProjects from './components/galleryProjects/galleryProjects.vue'

  export default {
    name: 'app',
    components: {
      'app-header': header,
      'app-info-projects': infoProjects,
      'app-gallery-projects': galleryProjects
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
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 1.6rem !important;
  line-height: 1.7 !important;
  // background-color: #efeeab;

}
.layoutGrid {
  display: grid;
  grid-template-rows: 10vh 50vh 10vh 10vh 80vh 10vh 129vh 10vh ;
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
