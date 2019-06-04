<template>
    <div class="galleryDiploma">
            <div class="galleryDiploma__diploma"
                @mouseover="increase1 = true , decrease1 = false, decrease2 = true, decrease3 = true, decrease4 = true"
                @mouseout="increase1 = false , decrease2 = false, decrease3 = false, decrease4 = false"
                v-bind:class="{increase: increase1, decrease: decrease1}">
                <div class="galleryDiploma__diploma__img">
                    <img src="../../assets/diploma1.jpg">
                </div>
                <p class="galleryDiploma__diploma__name">Advence css and sass</p>
            </div>
            <div class="galleryDiploma__diploma"
                @mouseover="increase2 = true, decrease1 = true, decrease3 = true, decrease4 = true"
                @mouseout="increase2 = false, decrease1 = false, decrease3 = false, decrease4 = false"
                v-bind:class="{increase: increase2, decrease: decrease2}">
                <div class="galleryDiploma__diploma__img">
                    <img src="../../assets/diploma1.jpg">
                </div>
                <p class="galleryDiploma__diploma__name">Advence css and sass</p>
            </div>
            <div class="galleryDiploma__diploma"
                @mouseover="increase3 = true, decrease1 = true, decrease2 = true, decrease4 = true"
                @mouseout="increase3 = false, decrease1 = false, decrease2 = false, decrease4 = false"
                v-bind:class="{increase: increase3, decrease: decrease3}">
                <div class="galleryDiploma__diploma__img">
                    <img src="../../assets/diploma1.jpg">
                </div>
                <p class="galleryDiploma__diploma__name">Advence css and sass</p>
            </div>
            <div class="galleryDiploma__diploma"
                @mouseover="increase4 = true, decrease1 = true, decrease2 = true, decrease3 = true"
                @mouseout="increase4 = false, decrease1 = false, decrease2 = false, decrease3 = false"
                v-bind:class="{increase: increase4, decrease: decrease4}">
                <div class="galleryDiploma__diploma__img">
                    <img src="../../assets/diploma1.jpg">
                </div>
                <p class="galleryDiploma__diploma__name">Advence css and sass</p>
            </div>
            <div class="sali"></div>
            <div class="liza" v-bind:class="[increase1 ? purple : notPurple]"></div>
            <div class="liza" v-bind:class="[increase2 ? purple : notPurple]"></div>
            <div class="liza" v-bind:class="[increase3 ? purple : notPurple]"></div>
            <div class="liza" v-bind:class="[increase4 ? purple : notPurple]"></div>
            <div class="galleryDiploma__diploma__info"
                v-bind:class="{down: increase1,  decrease: decrease1}">Lorem ipsum dolor sit amet <span class="span"> adipisicing elit.</span> Beatae inventore, quibusdam <span class="span">ipsum</span> quia ex incidunt esse, tenetur aperiam consequatur <span class="span"> odio</span> sed, delectus adipisci sequi nulla modi iusto tempore a.</div>
            <div class="galleryDiploma__diploma__info"
                v-bind:class="{down: increase2,  decrease: decrease2}">Lorem ipsum dolor sit amet <span class="span"> adipisicing elit.</span> Beatae inventore, quibusdam <span class="span">ipsum</span> quia ex incidunt esse, tenetur aperiam consequatur <span class="span"> odio</span> sed, delectus adipisci sequi nulla modi iusto tempore a.</div>
            <div class="galleryDiploma__diploma__info"
                v-bind:class="{down: increase3,  decrease: decrease3}">Lorem ipsum dolor sit amet <span class="span"> adipisicing elit.</span> Beatae inventore, quibusdam <span class="span">ipsum</span> quia ex incidunt esse, tenetur aperiam consequatur <span class="span"> odio</span> sed, delectus adipisci sequi nulla modi iusto tempore a.</div>
            <div class="galleryDiploma__diploma__info"
                v-bind:class="{down: increase4,  decrease: decrease4}">Lorem ipsum dolor sit amet <span class="span"> adipisicing elit.</span> Beatae inventore, quibusdam <span class="span">ipsum</span> quia ex incidunt esse, tenetur aperiam consequatur <span class="span"> odio</span> sed, delectus adipisci sequi nulla modi iusto tempore a.</div>
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
    }
    .down {
        transform: translateY(1.5rem) scale(1.2);
    }
    .decrease {
        transform: scale(0.9);
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
        grid-row: 10 / 11;

        display: grid;
        grid-template-columns:repeat(4, minmax(10rem, 1fr));
        grid-template-rows: min-content min-content min-content min-content;
        grid-column-gap: 3rem;   
        transition: all .7s;       

        &__diploma {
            display: grid;
            grid-template-rows: min-content min-content;
            // grid-gap: 1.5rem;
            background-color: $color-background;
            box-shadow: $general-box-shadow;
            border-radius: 3%;
            transition: all .7s;
            margin-bottom: 3rem !important;

            // &:hover {
            //     transform: translateY(-3rem) scale(1.2);
            // }

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
            }
        }
    }
    .span {
        color: $color-heading;
    }

    .sali {
        grid-column: 1 / 5;
        grid-row: 2 / 3;
        border-top: 3px solid #c9cfe5;
    }

    .liza {
        margin: 0 auto !important;
        width: 1.3rem;
        height: 1.3rem;
        border: 3px solid $color-purple-dark;
        border-radius: 50%;
        transform: translateY(-0.8rem);
        transition: all .2s;
        box-shadow: $general-box-shadow;
    }
</style>
