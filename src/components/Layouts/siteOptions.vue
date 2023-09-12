<template>
    <div class="float-option">
        <a class="watsapp" :href="`http://wa.me/${watsapp}`" target="_blank"><img :src="require('@/assets/images/watsapp.png')" alt=""></a>
        <button class="btn upPage" @click="scrollToTop"><img :src="require('@/assets/images/arrowUp.png')" alt=""></button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        watsapp:''
    }),
    methods: {
        async get_watts() {
            await axios.get('home')
                .then((res) => {
                    this.watsapp = res.data.data.whatsapp
                    console.log(this.watsapp);
                })
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    mounted() {
        this.get_watts()
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