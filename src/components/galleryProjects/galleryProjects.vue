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
                    { id: 1, picture: require('../../assets/personalWebsite.png'), name: 'My Personal Website', content: 'My personal website is a portfolio of all my projects and the knowledge I have acquired. I built and designed this website using Vue js, SCSS, JavaScript,  and BEM. You can also check my GitHub to see the source code for all my projects.', href: 'http://elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/Resume'},
                    { id: 2, picture: require('../../assets/memoryGame.png'), name: 'Memory Game', content: 'Small memory game with Game of Thrones theme.  I built this game using vanillaJs and CSS. There I practiced my 3D CSS styles and animations. Later on I added mongodb to store the top 10 high scores to make it more challenging. Try to beat it.', href: 'http://memoryGame.elizabethsetton.com/', git:'https://github.com/ElizabethSetton/memoryGame'},
                    { id: 3, picture: require('../../assets/sqloutputtojson.png'), name: 'SQL output to JSON', content: 'I created this tool with my husband, he needed a quick solution to transform SQL query output to JSON so I built the web design and made it mobile friendly. This is was a good opportunity to practice my frontend skills.', href: 'http://sqloutputtojson.com/', git: 'https://github.com/ElizabethSetton/SqloutputtoJson'},
                    { id: 4, picture: require('../../assets/natours.png'), name: 'Natours', content: 'This was a project of advance css and sass course where I practiced my column layout skills. Its mainly visual with little to no backend, but loaded with visual effects and animations to make them look very neat and modern. Later on I learned vue js and decided to add vue to this project for more organized code.', href: 'http://natours.elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/Natours'},
                    { id: 5, picture: require('../../assets/naxter.png'), name: 'Naxter', content: 'Just like Natours,I built this project in advanced css and sass course. However, in this project I practiced my grid layout skills and later added vue.js', href: 'http://naxter.elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/naxter'},
                    { id: 6, picture: require('../../assets/trilo.png'), name: 'Trilo', content: 'This was another project of advance css and sass course, but here I have practice my flexbox layout skills. Same like other i added vue.js later.', href: 'http://trilo.elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/trilo'},
                    { id: 7, picture: require('../../assets/colorGame.png'), name: 'Rgba color game', content: 'Small game that displays random rgba color and you have to guess what is the right color from 6 cards that are painted randomly that painted in that random color. Very useful game for practice rgba color code knowledge.', href: 'http://colorGame.elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/colorGame'},
                    // { id: 8, picture: require('../../assets/project3.png'), name: 'Burger Builder', content: 'I created this website alongside the react redux course. There You can login to the website, visually customize your burger, and order it.', href: 'http://natours.elizabethsetton.com/', git: 'https://github.com/ElizabethSetton/BurgerBuilder'},
                    // { id: 9, picture: require('../../assets/project3.png'), name: 'Yelp Camp', content: 'This is my first website that I built along with the web developer bootcamp courese. This is a website for camping  where you can login and make a post of your camping and all the information on that trip. Other users can comment on your post or upload their own campgrounds.', href: 'http://natours.elizabethsetton.com/', git: },
                ]
            }
        },
        components: {
            'gallery-project': project
        }    
    }
</script>

<style lang="scss">
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
        &__project:last-child {
            grid-column: 2 / 3;
            grid-row: 3 / 4;
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
            padding: 0.5rem 0 0.5rem 0 !important;
            text-align: center;
            text-decoration: none;
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
                text-decoration: none;
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
                grid-column: 1 / 2;
                grid-row: 5 / 6;
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
                grid-column: 1 / 2;
                grid-row: 7 / 8;
            }
        }
    }    
}
</style>