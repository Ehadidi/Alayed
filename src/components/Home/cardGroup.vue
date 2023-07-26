<template>
    <section ref="art1">
        <div class="container">
            <div v-if="loader" class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in 2" :key="item">
                    <Skeleton width="100%" height="200px" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                </div>
            </div>
            <div v-else class="row">
                <newsCard v-for="item in news" :key="item" :item="item"></newsCard>
            </div>
        </div>
        <router-link to="/news" class="btn main_btn up mt-5">{{ $t('news.moreNews') }}</router-link>
    </section>
</template>

<script>
import newsCard from '@/components/Home/newsCard.vue'
import Skeleton from 'primevue/skeleton';

export default {
    props:['news' , 'loader'],
    components: {
        newsCard,
        Skeleton
    }
}
</script>

<style></style>