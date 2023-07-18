<template>
    <div class="float-option">
        <router-link class="watsapp" to=""><img :src="require('@/assets/images/watsapp.png')" alt=""></router-link>
        <button class="btn upPage" @click="scrollToTop"><img :src="require('@/assets/images/arrowUp.png')" alt=""></button>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style lang="scss">
.float-option {
    .watsapp {
        position: fixed;
        bottom: 5%;
        right: 5%;
        z-index: 10;

        img {
            width: 40px;
        }
    }

    .upPage {
        position: fixed;
        bottom: 5%;
        left: 5%;
        z-index: 10;

        img {
            width: 35px;
        }
    }
}
</style>