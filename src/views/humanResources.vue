<template>
    <section>
        <Toast />
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">الموارد البشرية</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="txt">
                <p>{{ hrData.paragraph }}</p>
            </div>
            <div class="row justify-content-center P_bottom_50">
                <div class="col-lg-6 col-12">
                    <div class="positions">
                        <div class="position-item" v-for="item in hrData.BoardOfDirector" :key="item">
                            <span>{{ item.name }}</span>
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offWhite P_top_50 P_bottom_50">
            <div class="container">
                <h3 class="fontBold mainColor M_bottom_50">انضم الينا</h3>
                <form ref="regestForm" @submit.prevent="submitForm">
                    <div class="row align-items-center flex-column">
                        <div class="col-lg-6 col-12 mb-5">
                            <form-group>
                                <form-input label="الاسم" name="name" vmodal="name" placeholder="يرجي إدخال الإسم"
                                    type="text" width="col-lg-6 col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/profile-circle.png')"
                                            alt=""></template>
                                </form-input>

                                <form-input label="رقم الجوال" name="phone" vmodal="phone"
                                    placeholder="يرجي إدخال رقم الجوال" type="number" width="col-lg-6 col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/call-outgoing.png')"
                                            alt=""></template>
                                </form-input>

                                <form-input label="البريد الإلكتروني" name="email" vmodal="name"
                                    placeholder="يرجي إدخال البريد الإلكتروني" type="email" width="col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/sms2.png')" alt=""></template>
                                </form-input>

                                <file-uploader label="السيرة الذاتيه" name="cv" width="col-12 mb-3" refre="uploadCv"
                                    placeholder="يرجي ارفاق السيره الذاتيه">
                                    <template #img><img :src="require('@/assets/images/attach-circle.png')"
                                            alt=""></template>
                                </file-uploader>

                                <div class="col-12 mb-3">
                                    <div class="fontBold txt_start d-block mb-2">القسم</div>
                                    <div class="input_select">
                                        <select name="category_id" >
                                            <option selected disabled value="" hidden>اختر القسم</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>
                            </form-group>
                        </div>
                        <div class="col-lg-4 col-6">
                            <div class="d-flex align-items-center justify-content-center gap15">
                                <button class="btn main_btn up fill font10 width100" :loading="loading" :disabled="loading === true">
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="spinner-border spinner-border-sm d-none" :class="{ 'd-block': loading }" role="status">
                                    <span class="sr-only">Loading...</span>
                                    </div>
                                    <span>ارسال</span>
                                </div>
                                </button>
                                <button type="button" @click="resetForm" class="btn main_btn up font10">مسح الكل</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import formGroup from '@/components/Layouts/formGroup.vue'
import formInput from '@/components/Layouts/formInput.vue'
import fileUploader from '@/components/Layouts/fileUploader.vue'
export default {
    components: {
        formGroup,
        formInput,
        fileUploader
    },
    data() {
        return {
            hrData: [],
            loading: false,
            vadlid: ''
        }
    },
    methods: {
        resetForm() {
            this.$refs.regestForm.reset();
        },
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: '', detail: `${this.vadlid}`, life: 3000 })
        },
        showFail() {
            this.$toast.add({ severity: 'error', summary: '', detail: `${this.vadlid}`, life: 3000 })
        },
        async getHumanResources() {
            await axios.get('hr')
                .then((res) => {
                    this.hrData = res.data.data
                })
        },
        async submitForm() {
            this.loading = true
            const formData = new FormData(this.$refs.regestForm)
            await axios.post(`joinUs`, formData)
                .then((response) => {
                    this.vadlid = response.data.msg
                    if (response.data.key === 'success') {
                        this.showSuccess()
                        this.loading = false
                        this.$refs.regestForm.reset();
                    }
                    else {
                        this.showFail()
                        this.loading = false
                    }
                }).catch(e => {
                    console.error(e);
                })
        }
    },
    mounted() {
        this.getHumanResources()
    }
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