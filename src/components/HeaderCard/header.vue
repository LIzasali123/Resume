<template>
    <div class="card">
        <div class="card__info">
            <h1 class="card__heading">Elizabeth Setton</h1>
            <h4>Frontend developer</h4>
            <div>
                <dl class="dlList">
                    <dt class="dlList__dt">Age</dt>
                    <dd class="dlList__dd">22</dd>
                    <dt class="dlList__dt">Phone</dt>
                    <dd class="dlList__dd">+972 (58) 7471315</dd>
                    <dt class="dlList__dt">Email</dt>
                    <dd class="dlList__dd">Lizasali123@gmail.com</dd>
                    <dt class="dlList__dt">Address</dt>
                    <dd class="dlList__dd">Tel-Aviv, Israel</dd>
                </dl>
            </div>
        </div>
        <div class="card__img">
            <img src="../../assets/me.jpeg" alt="profile picture">
        </div>
    </div>
    <!-- <div class="card">
        <div class=" card__content row featurette">
            <div class="col-sm-7 order-sm-2">
                <div class="card__info">
                    <h1 class="card__heading">Elizabeth Setton</h1>
                    <h4>Frontend developer</h4>
                    <hr>
                    <div>
                        <dl class="dlList">
                            <dt class="dlList__dt">Age</dt>
                            <dd class="dlList__dd">22</dd>
                            <dt class="dlList__dt">Phone</dt>
                            <dd class="dlList__dd">+972 (58) 7471315</dd>
                            <dt class="dlList__dt">Email</dt>
                            <dd class="dlList__dd">Lizasali123@gmail.com</dd>
                            <dt class="dlList__dt">Address</dt>
                            <dd class="dlList__dd">Tel-Aviv, Israel</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 order-sm-1">
                <div class=" card__img">
                    <img src="../../assets/me.jpeg" alt="profile picture">
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.card {
    grid-row: 2 / 4;
    grid-column: 2 / 4;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 1fr 23rem max-content 1fr;
    grid-template-rows: 1fr 23rem 1fr; 
    grid-row-gap: 2.2rem;
    grid-column-gap: 3rem;
    font-size: 1.5rem;
    
    // justify-content: center;

    &__heading {
        // margin: 2rem;
        text-transform: uppercase;
        // margin-bottom: 1rem !important;
        letter-spacing: 0.1rem;
    }
    &__info {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
    }
    &__img {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
    // &__content {
    //     padding: 0 1.4rem !important;
    // }
}

// .col-sm-7, .col-sm-5 {
//     padding: 0 1.3rem !important;
// }
img {
    width: 100%;
    height: 100%;
    border-radius:3%;
}

.dlList {
    
    &__dd {
        margin-bottom: 0.8rem !important;
    }
    &__dt {
        margin-bottom: 0.8rem !important;
        float: left;
        clear: left;
        width: 9rem;
        font-weight: 400;
        text-transform: uppercase;
    }
}

h4,{
    margin-bottom: 1.2rem !important;
    letter-spacing: 0.1rem;
}
</style>


