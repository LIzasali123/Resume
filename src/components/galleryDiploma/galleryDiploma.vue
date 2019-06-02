<template>
    <div class="galleryDiploma">
        <!-- <div class="galleryDiploma__diplomas"> -->
            <div class="galleryDiploma__diploma">
                <img class="galleryDiploma__diploma__img" src="../../assets/diploma1.jpg">
                <div class="galleryDiploma__diploma__name">Advence css and sass</div>
            </div>
            <div class="galleryDiploma__diploma"><img src="../../assets/diploma1.jpg"></div>
            <div class="galleryDiploma__diploma"><img src="../../assets/diploma1.jpg"></div>
            <div class="galleryDiploma__diploma"><img src="../../assets/diploma1.jpg"></div>
        <!-- </div> -->
        <!-- <div class="liza"></div> -->

    </div>
</template>

<style lang="scss">
    .galleryDiploma {
        grid-column: 2 / 6 ;
        grid-row: 10 / 11;
        // display: grid;
        // grid-template-columns: 10vw 10vw 30vw 30vw 10vw 10vw;
        display: grid;
        grid-template-columns:repeat(4, minmax(10rem, 1fr));
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 5rem;
        grid-row-gap: 2rem;

        // &__diplomas {
            // grid-column: 2 / 6;
            // display: grid;
            // grid-template-columns:repeat(4, minmax(10rem, 1fr));
            // grid-template-rows: min-content;
            // grid-column-gap: 5rem;
            // justify-content: center;
            // margin: 4rem 0 !important;
            // padding: 3rem 0 !important;
            // border-bottom: $color-border;

            
            &--diploma {
                // display: grid;
                // grid-template-rows: min-content min-content;
                // grid-gap: 3rem;

                // border-radius: 3%;
                // transition: all .3s;
                // box-shadow: $general-box-shadow;
                // background-color: $color-purple-light;

                // &:hover {
                //     transform: translatey(-3rem) scale(1.3);
                // }

                &__img {
                    height: 100%;
                    width: 100%;
                    // border-top-left-radius: inherit;
                    // border-top-right-radius: inherit;
                }

                &__name {

                }
            // }
        }
    }
    .liza {
        margin: 0 auto !important;
        width: 1.5rem;
        height: 1.5rem;
        border: 3px solid red;
        border-radius: 50%;
        transition: all .2s;

        &:hover {
            background-color: red;
        }
    }
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
