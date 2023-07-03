<template>
    <div class="position-relative">
        <swiper :pagination="pagination" :modules="modules" class="mySwiper"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
        >
            <swiper-slide>
                <img :src="require('@/assets/images/sliderPic.png')" alt="">
                <div class="sliderCategory">
                    <h2>العنايه بالحدائق</h2>
                    <span>
                        <img :src="require('@/assets/images/categoryicon.png')" alt="">
                    </span>
                </div>
                <img :src="require('@/assets/images/Intersect.png')" class="dropOver" alt="">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/sliderPic1.png')" alt="">
                <div class="sliderCategory">
                    <h2>العنايه بالحدائق</h2>
                    <span>
                        <img :src="require('@/assets/images/categoryicon.png')" alt="">
                    </span>
                </div>
                <img :src="require('@/assets/images/Intersect.png')" class="dropOver" alt="">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('@/assets/images/sliderPic1.png')" alt="">
                <div class="sliderCategory">
                    <h2>العنايه بالحدائق</h2>
                    <span>
                        <img :src="require('@/assets/images/categoryicon.png')" alt="">
                    </span>
                </div>
                <img :src="require('@/assets/images/Intersect.png')" class="dropOver" alt="">
            </swiper-slide>
        </swiper>
        <h1 class="swiper_title">هذا النص يمكن استبداله</h1>
        <button class="btn skipSlider" @click="goto('art1')"><font-awesome-icon :icon="['fas', 'chevron-down']" /></button>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">العنايه بالحدائق</span>';
                },
            },
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style lang="scss">
.swiper-wrapper {
    width: 100%;
    height: 100vh;

    img {
        filter: brightness(0.7);
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        position: relative;

        .sliderCategory {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 40px;
            position: absolute;
            top: 20%;
            right: 5%;
            z-index: 7;
            color: #fff;

            span {
                background: #fff;
                display: block;
                padding: 15px;
                border-radius: 10px;
                width: fit-content;
            }
        }

        .dropOver {
            position: absolute;
            top: 0;
            right: 0;
            width: 35%;
            height: 45%;
            z-index: 6;
            filter: contrast(1);
        }
    }

}

.swiper_title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 7;
    width: fit-content;
    height: fit-content;
    color: #fff;
}
.skipSlider{
    position: absolute;
    bottom: 8%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 8;
    font-size: 35px;
    color: #fff;
    width: fit-content;
    &:hover{
        color: #1E368C;
    }
}

.swiper-pagination {
    margin-bottom: 10%;

    .swiper-pagination-bullet {
        width: fit-content;
        height: fit-content;
        border-radius: 0;
        background: none;
        color: #fff;
        margin: 0 20px !important;
        font-size: 18px;
        opacity: 1;
        padding: 1px 0;

        &.swiper-pagination-bullet-active {
            background: none;
            color: #fff;
            border-bottom: 2px solid #fff;
        }
    }
}
</style>