<template>
    <div class="infoProjects">
        <h1 class="infoProjects__heading">My Projects</h1>
        <p class="infoProjects__content">
            Those all my projects that I’ve built from the lates to the old ones.
            Most of them were more for practice some of the technologies that I’ve have learned except of my personal website. 
            I have more projects in progress you can check my Github to see what I am currently working on.
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
    
    .infoProjects {
        grid-column: 3 / 5;
        grid-row: 6 / 7;
        text-align: center;
        font-size: $font-size-small;

        &__heading {
            margin-bottom: 1.5rem !important;
        }
        &__content {

        }

    }
</style>

