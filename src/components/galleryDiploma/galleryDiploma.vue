<template>
    <div class="galleryDiploma">
        <div class="galleryDiploma__diplomas">
            <div class="galleryDiploma__diplomas--diploma"><img src="../../assets/diploma1.jpg"></div>
            <div class="galleryDiploma__diplomas--diploma"><img src="../../assets/diploma1.jpg"></div>
            <div class="galleryDiploma__diplomas--diploma"><img src="../../assets/diploma1.jpg"></div>
            <div class="galleryDiploma__diplomas--diploma"><img src="../../assets/diploma1.jpg"></div>
        </div>
        <div class="liza"></div>

    </div>
</template>

<style lang="scss">
    .galleryDiploma {
        grid-column: 1 / 7 ;
        grid-row: 10 / 11;
        display: grid;
        grid-template-columns: 10vw 10vw 30vw 30vw 10vw 10vw;

        &__diplomas {
            grid-column: 2 / 6;
            display: grid;
            grid-template-columns:repeat(4, minmax(10rem, 1fr));
            grid-column-gap: 2rem;
            justify-content: center;
            margin: 4rem 0 !important;
            padding: 3rem 0 !important;
            border-bottom: 1px solid #c9cfe5;

            
            &--diploma {
                height: 100%;
                border-radius: 3%;
                background-color: #c9cfe5;
                transition: all .3s;
                box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.14);

                &:hover {
                    transform: translatey(-3rem) scale(1.3);
                }
            }
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

    @keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
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
