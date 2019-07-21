<template>
  <div class="layoutGrid">
    <div class="coverImg"></div>
    <app-id-card></app-id-card>
    <div class="bgcolor--header"></div>  
    <app-header></app-header>
    <app-info-projects></app-info-projects>
    <app-gallery-projects></app-gallery-projects>
    <app-info-diploma></app-info-diploma>
    <app-gallery-diploma></app-gallery-diploma>
    <app-info-personal></app-info-personal>
    <div class="bgcolor--footer"></div>  
    <app-footer></app-footer>
  </div>
</template>

<script>
  import idCard from './components/idCard/idCard.vue'
  import header from './components/header/header.vue'
  import infoProjects from './components/infoProjects/infoProjects.vue'
  import galleryProjects from './components/galleryProjects/galleryProjects.vue'
  import infoDiploma from './components/infoDiploma/infoDiploma.vue'
  import galleryDiploma from './components/galleryDiploma/galleryDiploma.vue'
  import infoPersonal from './components/infoPersonal/infoPersonal.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'app-id-card': idCard,
      'app-header': header,
      'app-info-projects': infoProjects, 
      'app-gallery-projects': galleryProjects,
      'app-info-diploma': infoDiploma, 
      'app-gallery-diploma': galleryDiploma,
      'app-info-personal': infoPersonal,
      'app-footer': footer
    }
}
</script>

<style lang="scss">
    @import "@/styles/_variables.scss";
    @import "@/styles/_mixins.scss";
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
    grid-template-rows: 10vh 40vh 10vh min-content 10vh min-content 10vh min-content 10vh min-content 10vh min-content 10vh min-content 10vh min-content;
    grid-template-columns: 10vw 10vw 30vw 30vw 10vw 10vw;

    @include respond(tab-land) {
      grid-template-columns: 5vw 5vw 40vw 40vw 5vw 5vw;
    }
    @include respond(tab-port) {
      grid-template-columns: 2vw 2vw 46vw 46vw 2vw 2vw;
      grid-template-rows: 10vh 30vh 10vh min-content 5vh min-content 5vh min-content 5vh min-content 5vh min-content 10vh min-content 10vh 5vh;
    }
    @include respond(phone-big) {
      grid-template-rows: 10vh 20vh 10vh min-content 5vh min-content 5vh min-content 5vh min-content 5vh min-content 10vh min-content 10vh 5vh;
    }
    @include respond(phone-small) {
      grid-template-rows: 5vh min-content 5vh min-content 5vh min-content 5vh min-content 5vh min-content 5vh min-content 10vh min-content 10vh 5vh;
    }
  }

  .coverImg {
      background-image: url(./assets/cover.jpg);
      background-size: cover;
      background-position: 0 14%;
      background-repeat: no-repeat;
      position: relative;
      grid-row: 1 / 3;
      grid-column: 1 / 7;
  }
  .bgcolor {
    &--header{
      background-color: $color-purple-light;
      grid-row: 3 / 5;
      grid-column: 1 / 7;
      z-index: -1;
    }
  }
  .text {
    text-align: center;
    &__heading {
      color: $color-heading;
      margin: 0 auto 1.5rem auto !important;     
      border-bottom: $color-border;
      width: max-content;
      padding: 1rem 2rem !important;
      font-size: $font-size-big;

      @include respond(phone-medium) {
        font-size: $font-size-small;
      }
    }
    &--header {
      border-bottom: none;
      padding: 0!important;
      width: min-content;
      margin: 0 auto 1rem auto !important;    
    }
    &__content {
      font-size: $font-size-small;

      @include respond(phone-medium) {
        font-size: $font-size-smallest;
      }
    }
  }
  img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
  }
  span {
    color: $color-heading;
  }
</style>