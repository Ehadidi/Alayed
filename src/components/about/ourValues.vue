<template>
    <section class="P_top_50 P_bottom_50">
        <div class="container">
            <div class="title--sec">
                <h4 class="fontBold">قيمنا</h4>
                <div class="features mainColor fontBold">
                    <span>الجوده -</span>
                    <span>العلم -</span>
                    <span>الابتكار -</span>
                    <span>الاداء</span>
                </div>
            </div>
            <div class="row M_top_50 M_bottom_50">
                <div class="col-lg-4 col-md-3 d-md-block d-none">
                    <div class="values-img">
                        <img :src="require('@/assets/images/siteImg.png')" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-9 col-12">
                    <div v-if="aboutData" class="values-content">
                        <div class="values-item">
                            <h5>الجوده</h5>
                            <p v-html="aboutData.quality_paragraph"></p>
                        </div>
                        <div class="values-item">
                            <h5>العلم</h5>
                            <p v-html="aboutData.science"></p>
                        </div>
                        <div class="values-item">
                            <h5>الابتكار</h5>
                            <p v-html="aboutData.innovation"></p>
                        </div>
                        <div class="values-item">
                            <h5>الاداء</h5>
                            <p v-html="aboutData.performance"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quoted-txt">
                <div v-if="aboutData">
                    <p v-html="aboutData.value_message"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props : ['aboutData']
}
</script>