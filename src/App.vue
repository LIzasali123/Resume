<template>
  <div class="layoutGrid">
    <div class="coverImg"></div>
    <app-header></app-header>
    <app-info-projects></app-info-projects>
    <app-gallery-projects></app-gallery-projects>
    <app-gallery-diploma></app-gallery-diploma>
    <app-info-diploma></app-info-diploma>
    <app-skills></app-skills>
    <app-info-personal></app-info-personal>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './components/HeaderCard/header.vue'
  import infoProjects from './components/infoProjects/infoProjects.vue'
  import galleryProjects from './components/galleryProjects/galleryProjects.vue'
  import galleryDiploma from './components/galleryDiploma/galleryDiploma.vue'
  import infoDiploma from './components/infoDiploma/infoDiploma.vue'
  import skills from './components/skills/skills.vue'
  import infoPersonal from './components/infoPersonal/infoPersonal.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'app-header': header,
      'app-info-projects': infoProjects,
      'app-gallery-projects': galleryProjects,
      'app-gallery-diploma': galleryDiploma,
      'app-info-diploma': infoDiploma,
      'app-skills': skills,
      'app-info-personal': infoPersonal,
      'app-footer': footer
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
  grid-template-rows: 10vh 50vh 10vh 10vh 80vh 10vh 130vh 10vh 100vh 100vh 40vh;
  grid-template-columns: 20vw 30vw 30vw 20vw;
}

.coverImg {
    background-image: url(./assets/cover3.jpeg);
    background-size: cover;
    background-position: 0 90%;
    background-repeat: no-repeat;
    position: relative;
    grid-row: 1 / 3;
    grid-column: 1 / 5;
}

</style>
