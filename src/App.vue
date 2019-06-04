<template>
  <div class="layoutGrid">
    <div class="coverImg"></div>
    <app-header></app-header>
    <div class="bgcolor--infoProjects"></div>  
    <app-info-projects></app-info-projects>
    
    <app-gallery-projects></app-gallery-projects>
    <app-gallery-diploma></app-gallery-diploma>
    <app-info-diploma></app-info-diploma>
    <app-skills></app-skills>
    <app-info-personal></app-info-personal>
    <div class="bgcolor--footer"></div>  
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
  font-family: "Josefin Sans", sans-serif !important;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1.6rem !important;
  line-height: 1.7 !important;
  background-color: $color-background;

}
.layoutGrid {
  display: grid;
  grid-template-rows: 10vh 40vh 10vh 10vh 10vh 100vh 10vh min-content 5vh min-content 10vh 50vh 10vh 40vh 10vh 40vh 10vh 10vh 20vh 5vh;
  grid-template-columns: 10vw 10vw 30vw 30vw 10vw 10vw;
}

.coverImg {
    background-image: url(./assets/coverr.jpg);
    background-size: cover;
    background-position: 0 14%;
    background-repeat: no-repeat;
    position: relative;
    grid-row: 1 / 3;
    grid-column: 1 / 7;
}
.bgcolor {
  &--infoProjects{
    background-color: #c9cfe5;
    grid-row: 3 / 6;
    grid-column: 1 / 7;
    z-index: -1;
  }
  &--footer {
    grid-column: 1 / 7;
    grid-row: 18 / 21;
    background-image: linear-gradient(to right bottom, rgba(201, 207, 229, 0.7), rgba(168, 151, 183, 0.4)), url(./assets/cover16.jpg);
    background-size: cover;
    background-position: 0 50%;
    background-repeat: no-repeat;
    position: relative;
    z-index: -1;
  }
}

</style>
