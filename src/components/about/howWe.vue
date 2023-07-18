<template>
  <section class="how-we-are">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="aboutTxt">
                    <h1>من نحن</h1>
                    <div v-if="aboutData">
                        <p v-html="aboutData.paragraph"></p>
                    </div>
                    <div v-else>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 d-lg-block d-none">
                <img :src="require('@/assets/images/generic.png')" alt="">
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

<style lang="scss" scoped>
    .how-we-are{
        background: url('@/assets/images/1.png') no-repeat center;
        background-size: cover;
        .aboutTxt{
            padding: 40px 0;
            h1{
                font-size: 20px;
                color: #fff;
                margin-bottom: 18px;
                text-align: start;
                font-weight: 600;
            }
            p{
                color: #fff;
                line-height: 35px;
                margin: 0;
                text-align: start;
                padding: 0;
            }
        }
    }
</style>