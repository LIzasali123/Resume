<template>
    <div class="header">
        <h1 class="header__heading">Hello</h1>
        <p class="header__content">
            I am a self learner web developer.
            I strive for aesthetic design and implementation with cutting edge technology.
            Clean and soft design is my passion, and I achieve it using web design, graphic design, and water coloring.
        </p>
    </div>    
</template>
<script>
export default {
    data: function() {
        return {

            hover: false,
            show: false
        };
    }
}
</script>


<style lang="scss">
    .header {
        grid-column: 3 / 5;
        grid-row: 4 / 5;

        margin: 4rem 0 !important;
        margin-bottom: 8rem !important;
        text-align: center;

        &__heading {
            margin-bottom: 1.5rem !important;
        }
        &__content{
            font-size: $font-size-small;
        }
    }
</style>

