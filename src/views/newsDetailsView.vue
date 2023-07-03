<template>
    <div class="bg-title">
        <div class="container h-100">
            <div class="flex-end-content">
                <h1 class="font25 fontBold">الاخبار</h1>
                <p>هذا النص هو مثال لنص يمكن ان يستبدل</p>
            </div>
        </div>
    </div>
    <div class="P_top_60 P_bottom_60">
        <div class="container">
            <div class="news-article">
                <div class="row M_top_50 M_bottom_50">
                    <div class="col-lg-4 col-md-3 d-md-block d-none">
                        <div class="values-img">
                            <img :src="require('@/assets/images/siteImg.png')" alt="">
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-9 col-12">
                        <div class="values-content">
                            <div class="values-item">
                                <p>
                                    هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص
                                    اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
                                    استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا
                                    النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر
                                    هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
                                    استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر
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
            <h5 class="fontBold mainColor txt_start">اخبار اخري</h5>
            <div class="row pt-5 pb-5">
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
                <newsCard></newsCard>
            </div>
        </div>
        <router-link to="/news" class="btn main_btn up mt-5">المزيد من الاخبار</router-link>
    </div>
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

.values-item {
    font-size: 15px;
    line-height: 35px;
}
</style>