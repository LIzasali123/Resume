<template>
    <div class="galleryDiploma">
        <div class="galleryDiploma__diploma galleryDiploma--1"
            @mouseover="increase1 = true , decrease1 = false, decrease2 = true, decrease3 = true, decrease4 = true"
            @mouseout="increase1 = false , decrease2 = false, decrease3 = false, decrease4 = false"
            v-bind:class="{increase: increase1, decrease: decrease1}">
            <div class="galleryDiploma__diploma__img">
                <img src="../../assets/webDeveloper.png">
            </div>
            <p class="galleryDiploma__diploma__name">Web Developer Bootcamp</p>
        </div>
        <div class="galleryDiploma__diploma galleryDiploma--2"
            @mouseover="increase2 = true, decrease1 = true, decrease3 = true, decrease4 = true"
            @mouseout="increase2 = false, decrease1 = false, decrease3 = false, decrease4 = false"
            v-bind:class="{increase: increase2, decrease: decrease2}">
            <div class="galleryDiploma__diploma__img">
                <img src="../../assets/react.png">
            </div>
            <p class="galleryDiploma__diploma__name">React Redux</p>
        </div>
        <div class="galleryDiploma__diploma galleryDiploma--3"
            @mouseover="increase3 = true, decrease1 = true, decrease2 = true, decrease4 = true"
            @mouseout="increase3 = false, decrease1 = false, decrease2 = false, decrease4 = false"
            v-bind:class="{increase: increase3, decrease: decrease3}">
            <div class="galleryDiploma__diploma__img">
                <img src="../../assets/scss.jpg">
            </div>
            <p class="galleryDiploma__diploma__name">Advence css and sass</p>
        </div>
        <div class="galleryDiploma__diploma galleryDiploma--4"
            @mouseover="increase4 = true, decrease1 = true, decrease2 = true, decrease3 = true"
            @mouseout="increase4 = false, decrease1 = false, decrease2 = false, decrease3 = false"
            v-bind:class="{increase: increase4, decrease: decrease4}">
            <div class="galleryDiploma__diploma__img">
                <img src="../../assets/vuejs.png">
            </div>
            <p class="galleryDiploma__diploma__name">VueJS and Vue CLI 3</p>
        </div>
        <div class="galleryDiploma__nav"></div>
        <div class="galleryDiploma__radio galleryDiploma--5" v-bind:class="[increase1 ? purple : notPurple]"></div>
        <div class="galleryDiploma__radio galleryDiploma--6" v-bind:class="[increase2 ? purple : notPurple]"></div>
        <div class="galleryDiploma__radio galleryDiploma--7" v-bind:class="[increase3 ? purple : notPurple]"></div>
        <div class="galleryDiploma__radio galleryDiploma--8" v-bind:class="[increase4 ? purple : notPurple]"></div>
        <div class="galleryDiploma__diploma__info galleryDiploma--9" 
            v-bind:class="{down: increase1,  decrease: decrease1}"
            @mouseover="increase1 = true , decrease1 = false, decrease2 = true, decrease3 = true, decrease4 = true"
            @mouseout="increase1 = false , decrease2 = false, decrease3 = false, decrease4 = false">
            <p class="galleryDiploma__diploma__info__name">Web Developer Bootcamp</p>
            <p>This course taught me the basics of being a <span>fullstack developer</span> by building small projects using <span>NodeJS</span>, <span>Express</span>, <span>MongoDB</span>, <span>HTML</span>, <span>CSS</span>, <span>VanillaJS</span>, <span>jQuery</span>, <span>npm</span>, and <span>bootstrap 3 and 4.</span> With the help of the course and the teacher I understand my preference and what my passion in life is.</p>
        </div>
        <div class="galleryDiploma__diploma__info galleryDiploma--10" 
            v-bind:class="{down: increase2,  decrease: decrease2}"
            @mouseover="increase2 = true, decrease1 = true, decrease3 = true, decrease4 = true"
            @mouseout="increase2 = false, decrease1 = false, decrease3 = false, decrease4 = false">
            <p class="galleryDiploma__diploma__info__name">React Redux</p>
            <p>This course taught me how to use frameworks and how to break my websites into reusable components. The technologies I learned in this course are <span>ReactJS</span>, <span>Redux</span>, <span>Redux Saga</span>, <span>AJAX</span>, <span>forms</span> and <span>form validation</span>, <span>Firebase,</span> testing using <span>Jest</span>, <span>webpack</span>, and <span>NextJS</span>.</p>
        </div>
        <div class="galleryDiploma__diploma__info galleryDiploma--11" 
            v-bind:class="{down: increase3,  decrease: decrease3}"
            @mouseover="increase3 = true, decrease1 = true, decrease2 = true, decrease4 = true"
            @mouseout="increase3 = false, decrease1 = false, decrease2 = false, decrease4 = false">
            <p class="galleryDiploma__diploma__info__name">Advence css and sass</p>
            <p>The only technologies I was taught are <span>SCSS</span> and <span>Sass</span>, however the core of the course was focused on <span>responsive design</span> using <span>column</span>, <span>flexbox</span> and <span>grid layout</span>. Also we covered how to organize our SCSS files, make them readable and clean, and with the help of <span>BEM</span> my HTML code is just as clean.</p>
        </div>
        <div class="galleryDiploma__diploma__info galleryDiploma--12" 
            v-bind:class="{down: increase4,  decrease: decrease4}"
            @mouseover="increase4 = true, decrease1 = true, decrease2 = true, decrease3 = true"
            @mouseout="increase4 = false, decrease1 = false, decrease2 = false, decrease3 = false">
            <p class="galleryDiploma__diploma__info__name">VueJS and Vue CLI 3</p>
            <p>In this course we've covered the use of <span>Vue</span>, <span>Vue CLI 2</span> and <span>3</span>, interacting with the <span>DOM</span>, using <span>Axios</span> to consume <span>APIs</span>, but mainly we've heavily learned to interact with <span>webpack</span>. Vue is the best option for <span>SPAs</span> since it's lighter than other frameworks.</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                decrease1: false,
                decrease2: false,
                decrease3: false,
                decrease4: false,
                increase1: false,
                increase2: false,
                increase3: false,
                increase4: false,
                purple: 'purple',
                notPurple: 'notPurple',
                down: 'down'
            }
        }
    }
</script>

<style lang="scss">

    .increase {
        transform: translateY(-3rem) scale(1.2);

        @include respond(tab-port) {
            transform: translateY(-1rem) scale(1);
        }
    }
    .down {
        transform: translateY(1.5rem) scale(1.2);

        @include respond(tab-port) {
            transform: translateY(-1rem) scale(1);
        }
    }
    .decrease {
        transform: scale(0.9);

        @include respond(tab-port) {
            transform: scale(0.9);
        }
    }
    .purple {
        background-color: $color-purple-dark;
        transform: scale(3) translateY(-0.6rem);
    }
    .notPurple {
        background-color: white;
    }

    .galleryDiploma {
        grid-column: 2 / 6 ;
        grid-row: 12 / 13;

        display: grid;
        grid-template-columns:repeat(4, minmax(10rem, 1fr));
        grid-template-rows: min-content min-content min-content min-content;
        grid-column-gap: 3rem;   
        transition: all .7s;      
        
        &__nav {
            grid-column: 1 / 5;
            grid-row: 2 / 3;

            border-top: 3px solid #c9cfe5;
        }
        &__radio {
            margin: 0 auto !important;
            width: 1.3rem;
            height: 1.3rem;
            border: 3px solid $color-purple-dark;
            border-radius: 50%;
            transform: translateY(-0.8rem);
            transition: all .2s;
            box-shadow: $general-box-shadow;
        }
        &__diploma {
            display: grid;
            grid-template-rows: min-content min-content;
            background-color: $color-background;
            box-shadow: $general-box-shadow;
            border-radius: 3%;
            transition: all .7s;
            margin-bottom: 3rem !important;

            &__img {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;

            }

            &__name {
                text-align: center;
                padding: 1rem !important;
                color: $color-heading;
            }

            &__info {
                margin-top: 1.6rem !important;
                background-color: $color-background;
                border-radius: 3%;
                font-size: $font-size-small;
                padding: 1rem !important;
                box-shadow: $general-box-shadow;
                transition: all .7s;

                &__name {
                    display: none;
                }
            }
        }
        @include respond(tab-port) {
            grid-column: 3 / 5;
            grid-template-columns: 20rem 0.5rem 0.5rem 1fr;
            grid-template-rows: repeat(4, min-content);
            grid-gap: 1rem;

            &__diploma {
                margin-bottom: 0 !important;
                display: flex;
                &__img {
                    border-bottom-left-radius: inherit;
                    border-bottom-right-radius: inherit;

                }
                &__name {
                    display: none;
                }
                &__info {
                    margin-top: 0 !important;
                    
                    &__name {
                        display: block;
                        margin: 0 auto 1.2rem auto !important;
                        padding: 0 1.5rem !important;
                        width: max-content;
                        text-align: center;
                        border-bottom: $color-border;
                        color: $color-heading;
                        font-size: $font-size-big;
                    }
                }
            }
            &__radio {
                transform: translateX(-1.7rem);
                align-self: center; 
            }

            &--1 {
                grid-column: 1 / 2;
                grid-row: 1 / 2;
            }
            &--2 {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
            }
            &--3 {
                grid-column: 1 / 2;
                grid-row: 3 / 4;
            }
            &--4 {
                grid-column: 1 / 2;
                grid-row: 4 / 5;
            }
            &__nav {
                grid-column: 2 / 3;
                grid-row: 1 / -1;
                border-right: 3px solid #c9cfe5;
                border-top: none;
            }
            &--5 {
                grid-column: 3 / 4;
                grid-row: 1 / 2;
            }
            &--6 {
                grid-column: 3 / 4;
                grid-row: 2 / 3;
            }
            &--7 {
                grid-column: 3 / 4;
                grid-row: 3 / 4;
            }
            &--8 {
                grid-column: 3 / 4;
                grid-row: 4 / 5;
            }
            &--9 {
                grid-column: 4 / 5;
                grid-row: 1 / 2;
            }
            &--10 {
                grid-column: 4 / 5;
                grid-row: 2 / 3;
            }
            &--11{
                grid-column: 4 / 5;
                grid-row: 3 / 4;
            }
            &--12 {
                grid-column: 4 / 5;
                grid-row: 4 / 5;
            }
        }
        @include respond(phone-medium) {
            grid-template-columns: 43vw 43vw;
            grid-template-rows: repeat(4, min-content);
            grid-gap: 1rem;
            margin: 0 auto !important;

            &__diploma {
                &__info {
                    font-size: $font-size-smallest;
                    &__name {
                        font-size: $font-size-small;
                    }
                }
            }
            &__radio {
                display: none;
            }

            &--1 {
                grid-column: 1 / 2;
                grid-row: 1 / 2;
            }
            &--2 {
                grid-column: 2 / 3;
                grid-row: 1 / 2;
            }
            &--3 {
                grid-column: 1 / 2;
                grid-row: 3 / 4;
            }
            &--4 {
                grid-column: 2 / 3;
                grid-row: 3 / 4;
            }
            &__nav {
                display: none;
            }
            &--9 {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
            }
            &--10 {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
            }
            &--11{
                grid-column: 1 / 2;
                grid-row: 4 / 5;
            }
            &--12 {
                grid-column: 2 / 3;
                grid-row: 4 / 5;
            }
        }
        @include respond(phone-small) {
            grid-template-rows: repeat(8, min-content);
            grid-gap: 0.5rem;
            &__diploma {
                &__info {
                    margin-bottom: 1.5rem !important;
                }
            }
            &--1 {
                grid-column: 1 / -1;
                grid-row: 1 / 2;
            }
            &--2 {
                grid-column: 1 / -1;
                grid-row: 3 / 4;
            }
            &--3 {
                grid-column: 1 / -1;
                grid-row: 5 / 6;
            }
            &--4 {
                grid-column: 1 / -1;
                grid-row: 7 / 8;
            }
            &__nav {
                display: none;
            }
            &--9 {
                grid-column: 1 / -1;
                grid-row: 2 / 3;
            }
            &--10 {
                grid-column: 1 / -1;
                grid-row: 4 / 5;
            }
            &--11{
                grid-column: 1 / -1;
                grid-row: 6 / 7;
            }
            &--12 {
                grid-column: 1 / -1;
                grid-row: 8 / 9;
            }
        }
    }
</style>