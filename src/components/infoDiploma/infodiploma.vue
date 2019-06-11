<template>
    <div class="infoDiploma">
        <div class="leeran">
            <h1 class="leeran__heading">Hello</h1>
            <p class="leeran__paragraph">
                I am a self learner web developer.
                I strive for aesthetic design and implementation with cutting edge technology.
                Clean and soft design is my passion, and I achieve it using web design, graphic design, and water coloring.
            </p>
        </div>
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
    .infoDiploma {
        grid-column: 3 / 5;
        grid-row: 4 / 5;
    }
    .leeran {
        margin: 3rem 0 !important;
        text-align: center;

        &__heading {
            margin-bottom: 1.5rem !important;
        }
        &__paragraph{
            font-size: $font-size-small;
        }

    }
</style>

