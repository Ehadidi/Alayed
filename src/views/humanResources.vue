<template>
    <section>
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">الموارد البشرية</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="txt">
                <p>
                    هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا
                    النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
                    استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
                    استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر
                </p>
            </div>
            <div class="row justify-content-center P_bottom_50">
                <div class="col-lg-6 col-12">
                    <div class="positions">
                        <div class="position-item">
                            <span>الإداره العامه و الإداريه و المالية</span>
                            <span>الإسم</span>
                        </div>
                        <div class="position-item">
                            <span>الإداره العامه و الإداريه و المالية</span>
                            <span>الإسم</span>
                        </div>
                        <div class="position-item">
                            <span>الإداره العامه و الإداريه و المالية</span>
                            <span>الإسم</span>
                        </div>
                        <div class="position-item">
                            <span>الإداره العامه و الإداريه و المالية</span>
                            <span>الإسم</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offWhite P_top_50 P_bottom_50">
            <div class="container">
                <h3 class="fontBold mainColor M_bottom_50">انضم الينا</h3>
                <div class="row align-items-center flex-column">
                    <div class="col-lg-6 col-12 mb-5">
                        <form-group>
                            <form-input label="الاسم" placeholder="يرجي إدخال الإسم" type="text"
                                width="col-lg-6 col-12 mb-3">
                                <template #img><img :src="require('@/assets/images/profile-circle.png')" alt=""></template>
                            </form-input>

                            <form-input label="رقم الجوال" placeholder="يرجي إدخال رقم الجوال" type="number"
                                width="col-lg-6 col-12 mb-3">
                                <template #img><img :src="require('@/assets/images/call-outgoing.png')" alt=""></template>
                            </form-input>

                            <form-input label="البريد الإلكتروني" placeholder="يرجي إدخال البريد الإلكتروني" type="email"
                                width="col-12 mb-3">
                                <template #img><img :src="require('@/assets/images/sms2.png')" alt=""></template>
                            </form-input>

                            <file-uploader label="السيرة الذاتيه" width="col-12 mb-3"
                                placeholder="يرجي ارفاق السيره الذاتيه">
                                <template #img><img :src="require('@/assets/images/attach-circle.png')" alt=""></template>
                            </file-uploader>

                            <div class="col-12 mb-3">
                                <div class="fontBold txt_start d-block mb-2">القسم</div>
                                <div class="input_select">
                                    <select name="section">
                                        <option selected disabled value="" hidden>اختر القسم</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </div>
                            </div>
                        </form-group>
                    </div>
                    <div class="col-lg-4 col-6">
                        <div class="d-flex align-items-center justify-content-center gap15">
                            <button class="btn main_btn up fill font10 width100">ارسال</button>
                            <button class="btn main_btn up font10">مسح الكل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import formGroup from '@/components/Layouts/formGroup.vue'
import formInput from '@/components/Layouts/formInput.vue'
import fileUploader from '@/components/Layouts/fileUploader.vue'
export default {
    components: {
        formGroup,
        formInput,
        fileUploader
    },
}
</script>

<style lang="scss" scoped>
.bg-title {
    background: url('@/assets/images/hr.png') no-repeat center;
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

.txt {
    padding: 50px 0;
    color: #000;
    font-size: 11px;
    font-weight: 900;
    text-align: start;
    line-height: 25px;
}

.positions {
    .position-item {
        font-size: 12px;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 900;
        color: #1e368c;

        &:nth-child(odd) {
            background-color: #f1f1f1;
        }
    }
}
</style>