<template>
    <div class="footer">
        <p class="footer__text">© 2019 Elizabeth Setton. All Rights Reserved</p>
    </div>
</template>

<style lang="scss">
    @import "@/styles/_variables.scss";
    @import "@/styles/_mixins.scss";
    .footer {
        grid-column: 1 / 7;
        grid-row: 16 / 17;
        display: flex;
        background-color: $color-purple-light;
        color: $color-heading;
        justify-content: center;
        align-items: center;
        font-size: $font-size-small;

        &__text {
            padding: 0.7rem !important;

            @include respond(phone-small) {
                font-size: $font-size-smallest;
            }
        }
    }
</style>