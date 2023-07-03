<template>
    <section ref="art1">
        <div class="container">
            <div class="row">
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
            </div>
        </div>
        <router-link to="/news" class="btn main_btn up mt-5">المزيد من الاخبار</router-link>
    </section>
</template>

<script>
import newsCard from '@/components/Home/newsCard.vue'

export default {
    components: {
        newsCard,
    }
}
</script>

<style></style>