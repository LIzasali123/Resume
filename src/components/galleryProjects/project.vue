<template>
    <div class="projectGal__project">
        <div class="projectGal__img">
            <img v-bind:src="project.picture" alt="project img">
        </div>
        <div class="projectGal__info">
            <div class="projectGal__heading">
                <p class="projectGal__heading--name">{{ project.name }}</p>
                <a class="projectGal__icon--link" href="https://github.com/ElizabethSetton"><font-awesome-icon class="projectGal__icon" :icon="{ prefix: 'fab', iconName: 'github-square' }" /></a>
            </div>
            <p class="projectGal__heading--par">{{ project.content }}</p>
        </div>
        <button class="projectGal__button">View Project</button>
    </div>
</template>
<script>
    export default {
        props: ['project']
    }
</script>