<template>
    <div class="slider-wrapper">
        <Carousel id="gallery" :items-to-show="1" :autoplay="5000" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="(slide) in sliders" :key="slide">
                <div class="carousel__item slide">
                    <img :src="slide.image" alt="">
                    <div class="sliderCategory">
                        <h2>{{ slide.title }}</h2>
                        <span>
                            <img :src="require('@/assets/images/categoryicon.png')" alt="">
                        </span>
                    </div>
                    <img :src="require('@/assets/images/Intersect.png')" class="dropOver" alt="">
                    <h1 class="swiper_title">{{ slide.title }}</h1>
                </div>
            </Slide>
        </Carousel>

        <div class="thumbnails_carousel">
            <div class="container">
                <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel">
                    <Slide v-for="(slide, index) in sliders" :key="slide">
                        <div class="carousel__item" @click="slideTo(index)">
                            <button class="btn p-0 pagination-bullet">{{ slide.title }}</button>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
        <button class="btn skipSlider" @click="skipSlider"><font-awesome-icon :icon="['fas', 'chevron-down']" /></button>
    </div>
</template>
  
<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        currentSlide: 0,
        sliders: []
    }),
    methods: {
        skipSlider() {
            window.scrollTo(0,600);
        },
        slideTo(val) {
            this.currentSlide = val
        },
        async get_sliders() {
            await axios.get('home')
                .then((res) => {
                    this.sliders = res.data.data.slides
                })
        }
    },

    mounted() {
        this.get_sliders()
    }
})
</script>
  
<style lang="scss">
.slider-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;

    img {
        filter: brightness(0.7);
        width: 100%;
        height: 100%;
    }

    .carousel__item.slide {
        position: relative;
        width: 100%;
        height: 100%;

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
}

.carousel {
    height: 100%;
}

.carousel__viewport {
    height: 100%;
}

.carousel__track {
    height: 100%;
}

.thumbnails_carousel {
    position: absolute;
    width: 100%;
    bottom: 20%;
}

.pagination-bullet {
    width: fit-content;
    height: fit-content;
    border-radius: 0;
    background: none;
    color: #fff;
    margin: 0 20px !important;
    font-size: 18px;
    opacity: 1;
    padding: 1px 0;

    &.pagination-bullet-active {
        background: none;
        color: #fff;
        border-bottom: 2px solid #fff;
    }
}
.carousel__slide--active{
    .pagination-bullet{
        background: none;
        color: #fff;
        border-bottom: 2px solid #fff;
    }
}
.skipSlider {
        position: absolute;
        bottom: 8%;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 8;
        font-size: 35px;
        color: #fff;
        width: fit-content;

        &:hover {
            color: #1E368C;
        }
    }
</style>
