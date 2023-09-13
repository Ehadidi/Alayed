<template>
    <div>
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">{{ $t('news.newsTitle') }}</h1>
                    <p>{{ title }}</p>
                </div>
            </div>
        </div>
        <div class="P_top_60 P_bottom_60">
            <div class="container">
                <div class="news-article">
                    <div class="row M_top_50 M_bottom_50">
                        <div class="col-lg-4 col-md-3 d-md-block d-none">
                            <Skeleton v-if="loader" width="100%" height="300px" class="mb-2"></Skeleton>
                            <div class="values-img" v-else>
                                <img :src="imageDetail" alt="">
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-9 col-12">
                            <div class="values-content">
                                <div v-if="loader" class="d-flex flex-column gap10">
                                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                                    <Skeleton height=".5rem"></Skeleton>
                                </div>
                                <div v-else class="values-item">
                                    <p>
                                        {{ description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="P_top_60 P_bottom_60">
            <div class="container">
                <h5 class="fontBold mainColor txt_start">{{ $t('news.anotherNews') }}</h5>
                <div v-if="loader" class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in 2" :key="item">
                        <Skeleton width="100%" height="200px" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                    </div>
                </div>
                <div v-else class="row pt-5 pb-5">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in relatedNews" :key="item">
                        <router-link :to="'/newsDetails/' + item.id" class="raise" @click="getNewData(item.id)">
                            <v-card>
                                <v-img class="mb-3" :src="item.image" height="200px" cover></v-img>
                                <div class="newsCard">
                                    <v-card-subtitle class="p-0">
                                        {{ item.date }}
                                    </v-card-subtitle>
                                    <v-card-title class="p-0">
                                        <span class="fontBold font17">{{ item.title }}</span>
                                    </v-card-title>
                                    <v-card-text class="p-0 txt_start">
                                        {{ item.description }}
                                    </v-card-text>
                                </div>
                            </v-card>
                        </router-link>
                    </div>
                </div>
            </div>
            <router-link to="/news" class="btn main_btn up mt-5">{{ $t('news.moreNews') }}</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

export default {
    components: { Skeleton },
    data() {
        return {
            imageDetail: '',
            description: '',
            title: '',
            relatedNews: [],
            loader: true,
        }
    },

    methods: {
        async get_newsDetails() {
            await axios.get(`news/details?id=${this.$route.params.id}`)
                .then((res) => {
                    this.description = res.data.data.detail.description
                    this.title = res.data.data.detail.title
                    this.imageDetail = res.data.data.detail.image
                    this.relatedNews = res.data.data.related_news
                    this.loader = false

                })
                .catch(err => {
                    console.log(err);
                })
        },
        async getNewData(itemId) {
            await axios.get(`news/details?id=${itemId}`)
                .then((respone) => {
                    this.description = respone.data.data.detail.description
                    this.imageDetail = respone.data.data.detail.image
                    this.relatedNews = respone.data.data.related_news
                    this.title = respone.data.data.detail.title
                })
                .catch(err => {
                    console.log(err);
                })
        },
    },
    mounted() {
        this.get_newsDetails()
    },

}
</script>

<style lang="scss" scoped>
.newsCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    .v-card-title {
        width: 100%;
        text-align: start;

        span {
            text-overflow: ellipsis;
            overflow: hidden;
            display: block;
            white-space: nowrap;
        }
    }
    .v-card-text{
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        width: 100%;
    }
}

.v-card {
    box-shadow: none;
    background-color: transparent;
}

.bg-title {
    background: url('@/assets/images/newsBg.png') no-repeat center;
    background-size: cover;
    height: 350px;
    gap: 25px;
    padding: 50px 0;
    color: #fff;

    .flex-end-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
}

.values-item {
    font-size: 15px;
    line-height: 35px;
}
</style>