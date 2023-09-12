<template>
    <div class="slider-wrapper">
        <Skeleton v-if="loader" width="100%" height="100%" class="mb-2"></Skeleton>
        <Carousel v-else id="gallery" :autoplay="5000" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="(slide) in sliders" :key="slide">
                <div class="carousel__item slide">

                    <img :src="slide.image" alt="">

                    <!-- <v-img class="bg-white" cover :aspect-ratio="1" :src="slide.image"></v-img> -->
                    <!-- <v-img :src="slide.image" max-height="125" cover class="bg-grey-lighten-2"></v-img> -->
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
                <Carousel id="thumbnails" :breakpoints="breakpoints" :wrap-around="true"
                    v-model="currentSlide" ref="carousel">
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
import Skeleton from 'primevue/skeleton';
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Skeleton
    },
    data: () => ({
        currentSlide: 0,
        loader: true,
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
            },
        },

    }),
    methods: {
        skipSlider() {
            window.scrollTo(0, 600);
        },
        slideTo(val) {
            this.currentSlide = val
        },
        async get_sliders() {
            await axios.get('home')
                .then((res) => {
                    this.sliders = res.data.data.slides
                    this.loader = false
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

    .p-skeleton {
        background-color: #7c7c7c;
    }

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
            right: 8%;
            z-index: 7;
            color: #fff;
            align-items: end;

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

.carousel__slide--active {
    .pagination-bullet {
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
