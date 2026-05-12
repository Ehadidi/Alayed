<template>
    <section class="how-we-are" :style="`background: url('${paragraph_banner}') no-repeat center; background-size: cover`">
        <div class="container" style="min-height: 350px;max-height: fit-content;">
            <div class="row align-items-end" style="min-height: 350px;max-height: fit-content;">
                <div class="col-lg-6 col-12">
                    <div class="aboutTxt">
                        <h1>{{ $t('about.howWeAre') }}</h1>
                        <div v-if="aboutData">
                            <p v-html="aboutData.paragraph"></p>
                        </div>
                        <div v-else>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img class="w-100" :src="aboutData.paragraph_image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['aboutData', 'paragraph_banner']
}
</script>

<style lang="scss" scoped>
.how-we-are {
    min-height: 350px;
    max-height: fit-content;
    .aboutTxt {
        padding: 40px 0;

        h1 {
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
}</style>