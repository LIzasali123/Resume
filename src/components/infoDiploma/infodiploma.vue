<template>
    <div class="infoDiploma">
        <div class="gallery__elem">
            <div class="gallery__elem__item"
                @mouseover="hover = true"
                @mouseout="hover = false"
                v-bind:class="{grow1: hover}">1</div>
            <div class="gallery__elem__item"
                @mouseover="show = true"
                @mouseout="show = false"
                v-bind:class="{grow2: show}">2</div>
            <div class="gallery__elem__item"
                @mouseover="hover = true"
                @mouseout="hover = false"
                v-bind:class="{grow3: hover, grow3: show}">3</div>
            <div class="gallery__elem__item"
                @mouseover="hover = true"
                @mouseout="hover = false"
                v-bind:class="{grow4: hover}">4</div>

            <div @mouseover="hover = true"
                @mouseleave="hover = false"
                v-bind:class="{grow: hover}">
                Toggle
            </div>
            <div>
                <p></p>
            </div>
            <!-- <p class="sali" v-if>lizaaaa</p> -->
            <!-- <transition name="grow"> -->

<!-- <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
This will always apply errorClass, but will only apply activeClass when isActive is truthy. -->
                <div>
                    <p v-bind:class="{grow: hover}">hello</p>
                </div>
            <!-- </transition> -->
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
        grid-column: 1 / 7;
        grid-row: 12 / 13;
        background-color: paleturquoise;
    }
    .grow {

        // transition: all .9s;
        color: white;
    }
    .grow1 {
        // transition: all .9s;
        color: blue;
    }
    .grow2 {
        // transition: all .9s;
        color: green;
        transform: scale(1.2);
    }
    .grow3 {
        // transition: all .9s;
        color: orange;
    }
    .grow4 {
        // transition: all .9s;
        color: pink;
    }
    .gallery__elem {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        transition: all .9s;

        &__item {
            height: 6rem;
            width: 6rem;
            background-color: red;
            transition: all .9s;
        }
    }
</style>

