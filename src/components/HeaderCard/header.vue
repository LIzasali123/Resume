<template>
    <div class="idcard card">
        <div class="idcard__card">
            <div class="idcard__card__profilePic">
                <img class="idcard__card__profilePic--img" src="../../assets/me.jpeg" alt="profile picture">
            </div>
            <div class="idcard__card__heading">
                <h1 class="idcard__card__heading--primary">Elizabeth Setton</h1>
                <h4 class="idcard__card__heading--secondery">Frontend Developer</h4>
            </div>
            <div class="idcard__card__info">
                <dl class="idcard__card__info__list">
                    <dt class="idcard__card__info__list--dt">Age</dt>
                    <dd class="idcard__card__info__list--dd">22</dd>
                    <dt class="idcard__card__info__list--dt">Phone</dt>
                    <dd class="idcard__card__info__list--dd">+972 (58) 7471315</dd>
                    <dt class="idcard__card__info__list--dt">Email</dt>
                    <dd class="idcard__card__info__list--dd">ElizabethSetton@gmail.com</dd>
                    <dt class="idcard__card__info__list--dt">Address</dt>
                    <dd class="idcard__card__info__list--dd">Tel-Aviv, Israel</dd>
                </dl>
            </div>
            <div class="idcard__card__icons">
                <a class="idcard__card__icons__link" href="https://www.facebook.com/profile.php?id=100000319325615"><font-awesome-icon class="idcard__card__icons__font" :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/></a>
                <a class="idcard__card__icons__link" href="https://www.linkedin.com/feed/"><font-awesome-icon class="idcard__card__icons__font" :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
                <a class="idcard__card__icons__link" href="https://github.com/ElizabethSetton"><font-awesome-icon class="idcard__card__icons__font" :icon="{ prefix: 'fab', iconName: 'github-square' }" /></a>
            </div>
            <!-- <div class="idcard__card__icons">
                <font-awesome-icon class="idcard__card__icons__font" :icon="{ prefix: 'fab', iconName: 'facebook-square' }"><a class="idcard__card__icons__link" href="https://www.facebook.com/profile.php?id=100000319325615"></a></font-awesome-icon>
            </div> -->
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

    &__card {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 23rem max-content 1fr;
        grid-template-rows: 1fr min-content min-content min-content 1fr; 
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        grid-column-gap: 3rem;
        font-size: $font-size-small;
        box-shadow: $general-box-shadow;
        border-radius: inherit;

        @include respond(tab-port) {
            grid-template-columns: 1fr 20rem max-content 1fr;
            grid-template-rows: 1fr min-content min-content min-content 1fr; 
            grid-row-gap: 1rem;
            grid-column-gap: 1.5rem;
        }
        @include respond(phone-big) {
            grid-template-columns: 1fr 15rem max-content 1fr;
            grid-row-gap: 0.5rem;
        }
        @include respond(phone-small) {
            grid-template-columns: 1fr  max-content 1fr;
            grid-template-rows: 1rem min-content min-content min-content min-content 1rem; 
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
        }


        &__profilePic {
            grid-column: 2 / 3;
            grid-row: 2 / 5;

            @include respond(phone-small) {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
                margin: 0 auto !important;
                width: 8rem;
                height: 8rem;
                &--img {
                    border-radius: 100%;
                }
            }
            &--img {
                border-radius: 3%;
            }
        }
        &__heading {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
            width: max-content;
            padding: 0 4rem 0 0 !important;
            border-bottom: $color-border;

            @include respond(tab-port) {
                padding: 0 3rem 0 0 !important;
            }
            @include respond(phone-small) {
                grid-column: 2 / 3;
                grid-row: 3 / 4;
                padding: 0 1rem 0 1rem !important;
                text-align: center;
            }
            &--primary {
                font-size: $font-size-big;
                text-transform: uppercase;
                letter-spacing: 0.1rem;
                margin-bottom: 0.4rem !important;

                @include respond(tab-land) {
                    font-size: $font-size-big;
                    letter-spacing: 0.3rem;
                }
                @include respond(phone-big) {
                    font-size: $font-size-medium1;
                }
                @include respond(phone-small) {
                    letter-spacing: 0.09rem;
                }
            }
            &--secondery {
                letter-spacing: 0.1rem;
                font-size: $font-size-medium2;

                @include respond(phone-big) {
                    // font-size: $font-size-smallest;
                }
                @include respond(phone-medium) {
                    margin-bottom: 0.5rem !important;
                }
                @include respond(phone-small) {
                    margin-bottom: 0.3 !important;
                    letter-spacing: 0.09rem;
                }
            }
        }
        &__info {
            grid-column: 3 / 4;
            grid-row: 3 / 4;
            @include respond(phone-small) {
                grid-column: 2 / 3;
                grid-row: 4 / 5;
                justify-content: center;
            }
            @include respond(phone-small) {
                margin: 0 auto !important;
            }
            &__list {
                justify-content: space-between;
                @include respond(phone-big) {
                    font-size: $font-size-smallest;
                }
                &--dt {
                    margin-bottom: 0.8rem !important;
                    float: left;
                    clear: left;
                    width: 9rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: $color-heading;

                    &:last-of-type{
                        margin: 0 !important;
                    }
                    @include respond(tab-port) {
                        margin-bottom: 0.4 !important;
                    }
                    @include respond(phone-big) {
                        margin-bottom: 0.7rem !important;
                        width: 5.5rem;
                    }
                    @include respond(phone-medium) {
                        margin-bottom: 0.2 !important;
                    }
                    @include respond(tab-land) {
                        margin-bottom: 0.1 !important;
                    }
                }
                &--dd {
                    &:last-of-type{
                        margin: 0 !important;
                    }
                    margin-bottom: 0.8rem !important;
                    @include respond(tab-port) {
                        margin-bottom: 0.4 !important;
                    }
                    @include respond(phone-big) {
                        margin-bottom: 0.7rem !important;
                    }
                    @include respond(phone-medium) {
                        margin-bottom: 0.2 !important;
                    }
                    @include respond(tab-land) {
                        margin-bottom: 0.1 !important;
                    }
                    @include respond(phone-small) {
                        width: 19rem;   
                    }
                }
            }
        }
        &__icons {
            grid-column: 3 / 4;
            grid-row: 4 / 5;
            display: flex;
            flex-flow: row;
            @include respond(phone-small) {
                grid-column: 2 / 3;
                grid-row: 5 / 6;
                justify-content: center;
            }
        
            &__font {
                width: 3rem !important;
                height: 3rem;
                color: $color-purple-light;
                transition: all .3s;

                &:hover {
                    color: $color-purple-dark;
                    transform: scale(1.2);
                }
                @include respond(phone-big) {
                    width: 2.2rem !important;
                    height: 2.2rem;
                }
            }
            &__link:link {
                margin-right: 1rem !important;
                outline: none;
                @include respond(phone-big) {
                    width: 2.2rem !important;
                    height: 2.2rem;
                }
            }  
        }
    }
}
img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

</style>


