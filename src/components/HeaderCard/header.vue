<template>
    <div class="card">
        <div class="card__content row feturette">
            <div class="col-md-5">
                <div class="card__img">
                    <img class="img" src="../../assets/me.jpeg" alt="profile picture">
                </div>
            </div>
            <div class="col-md-7">
                <div class="card__info">
                    <h1>Elizabeth Setton</h1>
                    <h4>Frontend developer</h4>
                    <div>
                        <dl class="dlList">
                            <dt class="dlList__iteam">Age</dt>
                            <dd class="dlList__iteam">22</dd>
                            <dt class="dlList__iteam">Phone</dt>
                            <dd class="dlList__iteam">+972 (58) 7471315</dd>
                            <dt class="dlList__iteam">Email</dt>
                            <dd class="dlList__iteam">Lizasali123@gmail.com</dd>
                            <dt class="dlList__iteam">Address</dt>
                            <dd class="dlList__iteam">Tel-Aviv, Israel</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.card {
    grid-row: 2 / 4;
    grid-column: 2 / 4;

    &__img {
        padding: 3rem !important;
        width: 100%;
        height: 100%;
    }
    &__content {
        
    }
}

.img {
    width: 100%;
    height: 100%;
}
.dlList {
    width: 80%;
    overflow: hidden;
    padding: 0;
    margin: 0;

    &__iteam {
        float: left;
        width: 40%;
    }
}

h1, h4, dt {
    text-transform: uppercase;
}
</style>


