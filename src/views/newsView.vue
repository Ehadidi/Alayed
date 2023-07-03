<template>
    <div class="bg-title">
        <div class="container h-100">
            <div class="flex-end-content">
                <h1 class="font25 fontBold">الاخبار</h1>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل</p>
            </div>
        </div>
    </div>
    <section class="P_top_60 P_bottom_60">
        <div class="container">
            <div class="row">
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
            </div>
        </div>
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

<style lang="scss" scoped>
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