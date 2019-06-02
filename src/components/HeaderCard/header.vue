<template>
    <div class="idcard card">
        <div class="idcard__info">
            <h1 class="idcard__heading">Elizabeth Setton</h1>
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
                <a class="icons__link" href="https://www.facebook.com/profile.php?id=100000319325615"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/></a>
                <a class="icons__link" href="https://www.linkedin.com/feed/"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
                <a class="icons__link" href="https://github.com/ElizabethSetton"><font-awesome-icon class="icons__font" :icon="{ prefix: 'fab', iconName: 'github-square' }" /></a>
            </div>
        </div>
        <div class="idcard__img">
            <img class="idcard__img--img" src="../../assets/me.jpeg" alt="profile picture">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.idcard {
    grid-row: 2 / 4;
    grid-column: 3 / 5;

    display: grid;
    grid-template-columns: 1fr 23rem max-content 1fr;
    grid-template-rows: 1fr 23rem 1fr; 
    grid-row-gap: 2.2rem;
    grid-column-gap: 3rem;

    font-size: $font-size-small;
    border-radius: 1rem;
    box-shadow: $general-box-shadow;

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

        &--img {
            border-radius:3%;
        }
    }
}
.icons {
    align-self: end;
    height: 2.8rem;

    &__font {
        width: 2.5rem !important;
        height: 3rem;
        color: $color-purple-light;
        transition: all .3s;

        &:hover {
            color: $color-purple-dark;
            transform: scale(1.2);
        }
    }
    &__link:link {
        margin-right: 1rem !important;
        outline: none;
    }   
}

img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
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
        font-weight: 700;
        text-transform: uppercase;
        color: $color-heading;
    }
}

h4,{
    margin-bottom: 1.2rem !important;
    letter-spacing: 0.1rem;
    border-bottom: $color-border;
}
</style>


