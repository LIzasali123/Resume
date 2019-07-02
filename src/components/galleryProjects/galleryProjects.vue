<template> 
        <div class="projectGal">
            <gallery-project
                v-for="project in projects"
                v-bind:key="project.id"
                v-bind:project="project">
            </gallery-project>
    </div>
</template>

<script>
    import project from './project.vue'

    export default {
        data: function () {
            return {
                projects: [
                    {id: 1, picture: require('../../assets/project1.png'), name: 'My Personal Website', content: 'My personal website is a portfolio of all my projects and the knowledge I acquired. I built and designed this website using Vue js, SCSS, JavaScript,  and BEM. You can also check my GitHub to see the source code for all my projects.'},
                    {id: 2, picture: require('../../assets/project3.png'), name: 'Memory Game', content: 'Small memory game with Game of Thrones theme.  I built this game using vanillaJs and CSS. There I practiced my 3D CSS styles and animations. Later on I added mongodb to store the top 10 heights scores to make it more challenging. Try to beat it.'},
                    {id: 3, picture: require('../../assets/project3.png'), name: 'SQL output to JSON', content: 'This tool I created with my husband, he need some quick solution to transform sql code to jason so I build the web design and make it mobile friendly. This is war good opportunity to practice more on my frontend skills.'},
                    {id: 4, picture: require('../../assets/project3.png'), name: 'Naxter', content: 'This was a project of advance css and sass curse where I practice my grid layout skills. Its mainly visual with little to no backend, but loaded with visual effects to make them look very neat and modern. Later on I learned vue js and decided to add vue to this project for more organized code.'},
                    {id: 5, picture: require('../../assets/project3.png'), name: 'Trilo', content: 'This was a project of advance css and sass curse where I practice my flexbox layout skills. Its mainly visual with little to no backend, but loaded with visual effects to make them look very neat and modern. Later on I learned vue js and decided to add vue to this project for more organized code.'},
                    {id: 6, picture: require('../../assets/project3.png'), name: 'Natours', content: 'This was a project of advance css and sass curse where I practice my column layout skills. Its mainly visual with little to no backend, but loaded with visual effects to make them look very neat and modern. Later on I learned vue js and decided to add vue to this project for more organized code.'},
                    {id: 7, picture: require('../../assets/project3.png'), name: 'Rgba color game', content: 'Small game that displays random rgba color and you have to guess what the right color from 6 card that painted in that random color. Very useful game for practice rgba color code knowledge.'},
                    {id: 8, picture: require('../../assets/project3.png'), name: 'Burger Builder', content: 'This website I created along side with react redux curse. There  you can login and then customize your own  burger,  visually you can build it like burger tower, and then you can order it. '},
                    {id: 9, picture: require('../../assets/project3.png'), name: 'Yelp Camp', content: 'This is my first website that I build along with web developer bootcamp curse. This is a website for camping  where you can login and make post of your camping and all the information of that trip. Other users can comment on your post or upload their own campgrounds.'},
                ]
            }
        },
        components: {
            'gallery-project': project
        }    
    }
</script>

<style lang="scss">
    @import "@/styles/_variables.scss";
    @import "@/styles/_mixins.scss";
    .projectGal {
        grid-column: 2 / 6;
        grid-row: 8 / 9;  

        display: grid;
        grid-template-columns: repeat(3, minmax(10rem, 1fr));
        grid-template-rows: repeat(3, min-content);
        justify-content: center;
        grid-gap: 4rem;

        &__icon {
            width: 2.5rem !important;
            height: 3rem;
            color: $color-purple-dark;
            margin-right: 1rem !important;
            transition: all .3s;

            &:hover {
                color: $color-purple-light;
                transform: scale(1.2);
            }
            &--link {
                outline: none;
            }
        }
        &__project {
            display: grid;
            grid-template-rows: min-content 1fr min-content;
            grid-gap: 1rem;
            border-radius: 3%;
            background-color: $color-background;
            box-shadow: $general-box-shadow;
        }
        &__img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 0 14%;
            background-repeat: no-repeat;
            position: relative;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;

        }
        &__button {
            font-weight: 500;
            letter-spacing: 0.1rem;
            border: none;
            background-color: $color-purple-lighter;
            color: white;
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
            height: 3.5rem;

            &:focus {
                outline: none;
            }
            &:hover {
                background-color: $color-purple-light;
                color: $color-purple-lighter;
            }
        }
        &__info {
            display: flex;
            flex-flow: column;
        }
        &__heading {
            margin-left: 1rem !important;
            display: flex;
            justify-content: space-between;
            font-size: $font-size-big;
            color: $color-heading;

            &--par {
                font-size: $font-size-small;
                margin: 0 1rem !important;
            }
        }
        @include respond(tab-port) {
            grid-column: 3 / 5;
            grid-template-columns: repeat(2, minmax(10rem, 1fr));
            grid-template-rows: repeat(5, min-content);

            &__project:last-child {
                transform: translateX(57%);
            }
        
        @include respond(phone-medium) {
            &__heading {
                font-size: $font-size-small;
                &--par {
                    font-size: $font-size-smallest;
                }
            }
            &__icon {
                width: 2.2rem !important;
                height: 2.2rem;
            }   
            &__button {
                font-weight: normal;     
                font-size: $font-size-small;
                height: 2.5rem;
            }
        }
        @include respond(phone-small) {
            grid-template-columns: 100%;
            grid-template-rows: repeat(9, min-content);

            &__project:last-child {
                transform: none;
            }
        }
    }    
}
</style>