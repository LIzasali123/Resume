<template>
    <div class="card">
        <div class="card__info">
            <h1 class="card__heading">Elizabeth Setton</h1>
            <h4>Frontend Developer</h4>
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
            <div class="icons">
                <a class="icons__link"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/></a>
                <a class="icons__link"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
                <a class="icons__link"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'github-square' }" /></a>
            </div>
        </div>
        <div class="card__img">
            <img src="../../assets/me.jpeg" alt="profile picture">
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

    display: grid;
    grid-template-columns: 1fr 23rem max-content 1fr;
    grid-template-rows: 1fr 23rem 1fr; 
    grid-row-gap: 2.2rem;
    grid-column-gap: 3rem;

    font-size: 1.3rem;
    border-radius: 1rem;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.14);

    &__heading {
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }
    &__info {
        grid-row: 2 / 3;
        grid-column: 3 / 4;

        display: grid;
    }
    &__img {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
}
.icons {
    align-self: end;
    height: 2.8rem;

    &__link {
        margin-right: 1rem !important;
    }
    &__font {
        width: 2.5rem !important;
        height: 3rem;
    }
}

img {
    width: 100%;
    height: 100%;
    border-radius:3%;
}

.dlList {
    font-size: 1.2rem;
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
    // border-bottom: 1px solid red;
}
</style>


