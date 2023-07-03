<template>
    <div class="ChairmanSpeech">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="aboutTxt">
                        <h5>كلمة رئيس مجلس الإدارة</h5>
                        <p>
                            هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر
                            هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص
                            اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله
                            بنص اخر هذا النص يمكن استبداله بنص اخرهذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله
                            بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص
                            اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر.
                        </p>
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
        <p>
            “ هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
            يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص
            اخر هذا. “
        </p>
    </div>
</template>
  
<script>
export default {

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