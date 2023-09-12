<template>
    <section>
        <Toast />
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">{{ $t('layout.HR') }}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="txt">
                <p v-html="hrData.paragraph"></p>
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
                <h3 class="fontBold mainColor M_bottom_50">{{ $t('layout.joinUs') }}</h3>
                <form ref="regestForm" @submit.prevent="submitForm">
                    <div class="row align-items-center flex-column">
                        <div class="col-lg-6 col-12 mb-5">
                            <form-group>
                                <form-input :label="$t('layout.userName')" :placeholder="$t('layout.writeUserName')" name="name" vmodal="name"
                                    type="text" width="col-lg-6 col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/profile-circle.png')"
                                            alt=""></template>
                                </form-input>

                                <form-input name="phone" vmodal="phone" :label="$t('layout.phone')" :placeholder="$t('layout.writePhone')" type="number" width="col-lg-6 col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/call-outgoing.png')"
                                            alt=""></template>
                                </form-input>

                                <form-input :label="$t('layout.email')" :placeholder="$t('layout.writeEmail')" name="email" vmodal="email" type="email" width="col-12 mb-3">
                                    <template #img><img :src="require('@/assets/images/sms2.png')" alt=""></template>
                                </form-input>

                                <file-uploader :label="$t('layout.CV')" name="cv" width="col-12 mb-3" ref="refreArea" :refre="uploadCv"
                                    :placeholder="$t('layout.enterCV')">
                                    <template #img><img :src="require('@/assets/images/attach-circle.png')"
                                            alt=""></template>
                                </file-uploader>

                                <div class="col-12 mb-3">
                                    <div class="fontBold txt_start d-block mb-2">{{ $t('products.sections') }}</div>
                                    <div class="input_select">
                                        <select v-model="category_id" name="category_id">
                                            <option selected value="" hidden>{{ $t('products.selectCategoey') }}</option>
                                            <option v-for="categoryName in mainCategories" :value="categoryName.id" :key="categoryName">{{ categoryName.name }}</option>
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
                                    <span>{{ $t('layout.send') }}</span>
                                </div>
                                </button>
                                <button type="button" @click="resetForm" class="btn main_btn up font10">{{ $t('layout.clear') }}</button>
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
            vadlid: '',
            category_id:'',
            uploadCv: 'uploadCv',
            mainCategories: [],
        }
    },
    methods: {
        resetForm() {
            this.$refs.regestForm.reset();
            this.$refs.refreArea.fileName = null
            this.$refs.refreArea.showmark = false
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

        async mainCategory() {
            await axios.get('mainCategory')
                .then((resCategory) => {
                    this.mainCategories = resCategory.data.data.category
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
                        this.$refs.refreArea.fileName = null
                        this.$refs.refreArea.showmark = false
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
        this.mainCategory()
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