<template>
    <div>
        <div class="ChairmanSpeech" :style="`background: url('${banner}') no-repeat center; background-size: cover;`">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                        <div class="aboutTxt">
                            <h5>{{ $t('layout.ChairmanSpeech') }}</h5>
                            <div class="txt" v-html="dataWords.word"></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="d-flex flex-column align-items-center">
                            <img :src="require('@/assets/images/alayed-logo.png')" alt="logo">
                            <img v-if="image" class="Chairman-img" :src="image" alt="Chairman">
                            <Skeleton v-else width="56%" height="300px"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="quoted-txt M_bottom_60" v-html="dataWords.paragraph">
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

export default {
    components:{
        Skeleton
    },
    data() {
        return {
            loader: true,
            dataWords: [],
            image: '',
            banner: ''
        }
    },
    methods: {
        async get_word_of_board() {
            await axios.get('word-of-board')
                .then((res) => {
                    this.banner = res.data.data.banner
                    this.dataWords = res.data.data
                    this.image = res.data.data.image
                    this.loader = false
                })
        }
    },
    mounted() {
        this.get_word_of_board()
    }
}
</script>
  
<style lang="scss" scoped>
.ChairmanSpeech {
    // background: url('@/assets/images/1.png') no-repeat center;
    // background-size: cover;
    padding: 50px 0;
    margin-bottom: 10%;

    img {
        width: 150px;
        // height: 100px;
    }

    .Chairman-img {
        width: 56%;
        height: unset;
        // aspect-ratio: 16 / 14;
        margin-top: 30px;
        margin-bottom: -20%;
    }

    .aboutTxt {
        h5 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 18px;
            text-align: start;
            font-weight: 600;
        }

        .txt {
            color: #fff;
            line-height: 35px;
            margin: 0;
            text-align: start;
            padding: 0;
            word-break: break-word;
        }

    }
}
</style>