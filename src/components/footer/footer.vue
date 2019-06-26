<template>
    <div class="footer">
        <p class="footer__text">© 2019 Elizabeth Setton. All Rights Reserved</p>
    </div>
</template>

<style lang="scss">
    .footer {
        grid-column: 1 / 7;
        grid-row: 16 / 17;
        display: flex;
        // background: linear-gradient(to right bottom, rgba(201, 207, 229, 0.6), rgba(168, 151, 183, 0.6));
        background-color: $color-purple-light;
        color: $color-heading;
        justify-content: center;
        align-items: center;

        &__text {
            padding: 0.7rem !important;

            @include respond(phone-medium) {
                font-size: $font-size-small;
            }
            @include respond(phone-small) {
                font-size: $font-size-smallest;
            }
        }
    }
</style>

