<template>
    <div>
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">{{ $t('news.newsTitle') }}</h1>
                    <div class="tx_start" v-html="paragraph"></div>
                </div>
            </div>
        </div>
        <section class="P_top_60 P_bottom_60">
            <div class="container">
                <div v-if="loader" class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in 2" :key="item">
                        <Skeleton width="100%" height="200px" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                    </div>
                </div>
                <div v-else class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in newsData" :key="item">
                        <router-link :to="'/newsDetails/' + item.id" class="raise">
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
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';


export default {
    components: { Skeleton },
    data() {
        return {
            paragraph: '',
            newsData: [],
            loader: true,
        }
    },

    methods: {
        async get_news() {
            await axios.get('news')
                .then((res) => {
                    this.paragraph = res.data.data.paragraph
                    this.newsData = res.data.data.news
                    this.loader = false
                })
        }
    },
    mounted() {
        this.get_news()
    }
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
</style>