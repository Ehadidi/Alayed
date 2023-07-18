<template>
    <div class="ChairmanSpeech">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="aboutTxt">
                        <h5>كلمة رئيس مجلس الإدارة</h5>
                        <p v-html="dataWords.word"></p>
                    </div>
                </div>
                <div class="col-lg-6 d-lg-block d-none">
                    <div class="d-flex flex-column align-items-center">
                        <img :src="require('@/assets/images/alayed-logo.png')" alt="logo">
                        <img class="Chairman-img" :src="require('@/assets/images/Chairman.png')" alt="Chairman">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="quoted-txt M_bottom_60">
        <p v-html="dataWords.paragraph"></p>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data(){
        return{
            loader :true,
            dataWords : []
        }
    },
    methods: {
        async get_word_of_board() {
            await axios.get('word-of-board')
                .then((res) => {
                    this.dataWords = res.data.data
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
    background: url('@/assets/images/1.png') no-repeat center;
    background-size: cover;
    padding: 50px 0;
    margin-bottom: 10%;

    img {
        width: 150px;
        height: 100px;
    }

    .Chairman-img {
        width: 56%;
        height: unset;
        aspect-ratio: 16 / 14;
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

        p {
            color: #fff;
            line-height: 35px;
            margin: 0;
            text-align: start;
            padding: 0;
        }
    }
}
</style>