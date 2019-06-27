<template>
    <div class="header">
        <h1 class="text text--header text__heading">Hello</h1>
        <p class="text text__content">
            I am a self learner web developer.
            I strive for aesthetic design and implementation with cutting edge technology.
            Clean and soft design is my passion, and I achieve it using web design, graphic design, and water coloring.
        </p>
        <div class="btncv">
            <a class="btncv--cv" href="../../assets/me.jpeg" download>Download cv</a>
        </div>
        <!-- <button @click="downloadWithAxios">Download file with Vue Resource</button> -->
    </div>    
</template>
<script>
import axios from 'axios'
// import VueAxios from 'vue-axios'
export default {
    data() {
        return {    
            url:'../../img/me.png'
        }
    },
    methods: {    
        forceFileDownload(response){
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.png'); //or any other extension;
            document.body.appendChild(link);
            link.click();
        },
        // downloadWithVueResource() {
        //     this.$http({
        //         method: 'get',
        //         url: this.url,
        //         responseType: 'arraybuffer'
        //     })
        //     .then(response => {
        //         this.forceFileDownload(response);  
        //     })
        //     .catch(() => console.log('error occured'));
        // }
        // },
        downloadWithAxios(){
            axios({
                method: 'get',
                url: this.url,
                responseType: 'arraybuffer'
            })
            .then(response => {    
                this.forceFileDownload(response)
            })
            .catch(() => console.log('error occured'))
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
       margin-top: 2rem !important;
       text-align: center;
        &--cv {
            color: white;
            transition: transform .3s;
            background-color: $color-heading;
            padding: 1rem 1.5rem !important;
            border: 3px solid $color-purple-light;

            &:hover, &:focus {
                transform: translateY(-1rem);
                text-decoration: none;
                color: white;
                border: 3px solid white;
            }
            @include respond(phone-medium) {
                font-size: $font-size-small;
                padding: 0.5rem 1rem !important;
            }
        }
    }
</style>