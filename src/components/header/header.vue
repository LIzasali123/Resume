<template>
    <div class="header">
        <h1 class="text text--header text__heading">Hello</h1>
        <p class="text text__content">
            I am a self learner web developer.
            I strive for aesthetic design and implementation with cutting edge technology.
            Clean and soft design is my passion, and I achieve it using web design, graphic design, and water coloring.
        </p>
        <div class="btncv">
            <a class="btncv__cv" @click.prevent="downloadItem(item.url)" :href="item.url">
                Download CV
            </a>
        </div>
    </div>    
</template>
<script>
import axios from 'axios'

export default {
    data: function () {
        return {  
            item: {
                url: require('../../assets/Resume.pdf')
            }
        }
    },
    methods: {    
        downloadItem (url) {
            axios.get(url, { responseType: 'blob' })
            .then(({ data }) => {
                let blob = new Blob([data], { type: 'application/pdf' })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = 'ElizabethSetton.pdf'
                link.click()
            })
            .catch(error => {
                    console.error(error)
            })
        }
    }
}
</script>

<style lang="scss">
    .header {
        grid-column: 3 / 5;
        grid-row: 4 / 5;

        margin: 4rem 0 4rem 0 !important;
    }
    .btncv {
        margin: 2rem auto 0 auto !important;
        width: max-content;
        transition: all .3s;

        &__cv, &__cv:link {
            background-color: $color-heading;
            padding: 1rem 1.5rem !important;
            border: 3px solid inherit;
            font-size: $font-size-medium2;
            color: white;

            &:hover:link {
                text-decoration: none;
                border: 3px solid white;
            }
            @include respond(phone-medium) {
                font-size: $font-size-small;
                padding: 0.5rem 1rem !important;
            }
        }
        &:hover {
            transform: translateY(-0.5rem) scale(1.1);
        }
    }
</style>