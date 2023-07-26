<template>
  <section>
    <div class="card flex justify-content-center">
      <Toast />
      <!-- <Button @click="showSticky" label="Sticky" /> -->
    </div>
    <div class="bg-title">
      <div class="container h-100">
        <div class="flex-end-content">
          <h1 class="font25 fontBold">{{ $t('layout.contactUs') }}</h1>
        </div>
      </div>
    </div>
    <map-component></map-component>
    <div class="container P_bottom_50">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40" v-for="depart in departments" :key="depart">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">{{ depart.title }}</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>{{ depart.address }}</span>
            </div>
            <div class="d-flex align-items-start gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <div class="d-flex flex-column gap10">
                <div v-for="phone in depart.phone" :key="phone">
                  <span>{{ phone }}</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-start gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <div class="d-flex flex-column gap10">
                <div v-for="mail in depart.email" :key="mail">
                  <span>{{ mail }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container P_bottom_50">
      <h3 class="fontBold mainColor txt_start M_bottom_50">{{ $t('layout.BranchSales') }}</h3>
      <div class="branchs">
        <div class="branch-item" v-for="branch in branchs" :key="branch">
          <h5 class="fontBold mainColor txt_start">{{ branch.title }}</h5>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/location.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>{{ branch.address }}</span>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <div v-for="email in branch.email" :key="email">
                <span>{{ email }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <div v-for="phone in branch.phone" :key="phone">
                <span>{{ phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offWhite P_top_50 P_bottom_50">
      <div class="container">
        <h3 class="fontBold mainColor M_bottom_50">{{ $t('layout.footer.sendToUs') }}</h3>
        <form ref="regestForm" @submit.prevent="submitForm">
          <div class="row align-items-center flex-column">
            <div class="col-lg-6 col-12 mb-5">
              <form-group>
                <form-input :label="$t('layout.userName')" :placeholder="$t('layout.writeUserName')" vmodal="name" name="name" type="text"
                  width="col-lg-6 col-12">
                  <template #img><img :src="require('@/assets/images/profile-circle.png')" alt=""></template>
                </form-input>

                <form-input :label="$t('layout.phone')" :placeholder="$t('layout.writePhone')" vmodal="phone" name="phone"
                  type="number" width="col-lg-6 col-12">
                  <template #img><img :src="require('@/assets/images/call-outgoing.png')" alt=""></template>
                </form-input>

                <form-input :label="$t('layout.email')" :placeholder="$t('layout.writeEmail')" vmodal="email"
                  name="email" type="email" width="col-12">
                  <template #img><img :src="require('@/assets/images/sms2.png')" alt=""></template>
                </form-input>

                <form-input :label="$t('layout.messageSubject')" :placeholder="$t('layout.writeMessageSubject')" type="text" vmodal="title"
                  name="title" width="col-12">
                  <template #img><img :src="require('@/assets/images/message-question.png')" alt=""></template>
                </form-input>

                <form-input :label="$t('layout.yourMassage')" :placeholder="$t('layout.writeYourMassge')" width="col-12" vmodal="message"
                  name="message" :textarea="true">
                  <template #img><img :src="require('@/assets/images/message-text.png')" alt=""></template>
                </form-input>
              </form-group>
            </div>
            <div class="col-lg-4 col-6">
              <div class="d-flex align-items-center justify-content-center gap15">
                <!-- <button class="btn main_btn up fill font10 width100" :loading="loading" @click="load">ارسال</button> -->
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
import axios from 'axios';
import mapComponent from '@/components/contact/mapComponent.vue'
import formGroup from '@/components/Layouts/formGroup.vue'
import formInput from '@/components/Layouts/formInput.vue'

// import { useToast } from 'primevue/usetoast';
export default {
  components: {
    mapComponent,
    formGroup,
    formInput,
  },
  data() {
    return {
      departments: [],
      loader: true,
      branchs: [],
      vadlid: '',
      loading: false
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
    async get_contact_us() {
      await axios.get('contactUsInfo')
        .then((res) => {
          this.departments = res.data.data.departments
          this.branchs = res.data.data.branchs
          this.loader = false
        })
    },
    async submitForm() {
      this.loading = true
      const formData = new FormData(this.$refs.regestForm)

      await axios.post(`message`, formData)
        .then((response) => {
          this.vadlid = response.data.msg
          
          if (response.data.key == 'success') {
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
    this.get_contact_us()
  }
};
</script>

<style lang="scss" scoped>
.bg-title {
  background: url('@/assets/images/Frame.png') no-repeat center;
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

.branch-item {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;

  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
}
</style>