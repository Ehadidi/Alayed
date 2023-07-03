<template>
  <section>
    <div class="bg-title">
      <div class="container h-100">
        <div class="flex-end-content">
          <h1 class="font25 fontBold">تواصل معنا</h1>
          <p>هذا النص هو مثال لنص يمكن ان يستبدل</p>
        </div>
      </div>
    </div>
    <map-component></map-component>
    <div class="container P_bottom_50">
      <h3 class="fontBold mainColor txt_start M_bottom_50">الفرع الرئيسي</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-items">
            <div class="d-flex align-items-start gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <div class="d-flex flex-column align-items-start font16 fontBold gap15">
                <span>+9661 2345 6789</span>
                <span>+9661 2345 6789</span>
                <span>+9661 2345 6789</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-items">
            <div class="d-flex align-items-start gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <div class="d-flex flex-column align-items-start font16 fontBold gap15">
                <span>sample.email@provider.com</span>
                <span>sample.email@provider.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-items">
            <div class="d-flex align-items-start gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <div class="d-flex flex-column align-items-start font16 fontBold gap15">
                <span>الدولة - المدينة - الحي - الشارع</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">التصدير</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">الانتاج</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">الادارة</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">المالية</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">الشؤون القانونيه</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 M_bottom_40">
          <div class="d-flex flex-column align-items-start font16 fontBold gap15">
            <h5 class="fontBold mainColor txt_start">التسويق</h5>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/location.png')" alt="">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
              <span>+9661 2345 6789</span>
            </div>
            <div class="d-flex align-items-center gap10">
              <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
              <span>sample.email@provider.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container P_bottom_50">
      <h3 class="fontBold mainColor txt_start M_bottom_50">مبيعات الفروع</h3>
      <div class="branchs">
        <div class="branch-item">
          <h5 class="fontBold mainColor txt_start">الرياض</h5>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/location.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>sample.email@provider.com</span>
              <span>sample.email@provider.com</span>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>+9661 2345 6789</span>
              <span>+9661 2345 6789</span>
              <span>+9661 2345 6789</span>
            </div>
          </div>
        </div>
        <div class="branch-item">
          <h5 class="fontBold mainColor txt_start">الرياض</h5>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/location.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>الدولة - المدينة - الحي - الشارع</span>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/sms.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>sample.email@provider.com</span>
              <span>sample.email@provider.com</span>
            </div>
          </div>
          <div class="d-flex align-items-start gap10">
            <img class="width20" :src="require('@/assets/images/call-calling.png')" alt="">
            <div class="d-flex flex-column align-items-start font16 fontBold gap15">
              <span>+9661 2345 6789</span>
              <span>+9661 2345 6789</span>
              <span>+9661 2345 6789</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offWhite P_top_50 P_bottom_50">
      <div class="container">
        <h3 class="fontBold mainColor M_bottom_50">ارسل لنا</h3>
        <div class="row align-items-center flex-column">
          <div class="col-lg-6 col-12 mb-5">
            <form-group>
              <form-input label="الاسم" placeholder="يرجي إدخال الإسم" type="text" width="col-lg-6 col-12">
                <template #img><img :src="require('@/assets/images/profile-circle.png')" alt=""></template>
              </form-input>

              <form-input label="رقم الجوال" placeholder="يرجي إدخال رقم الجوال" type="number" width="col-lg-6 col-12">
                <template #img><img :src="require('@/assets/images/call-outgoing.png')" alt=""></template>
              </form-input>

              <form-input label="البريد الإلكتروني" placeholder="يرجي إدخال البريد الإلكتروني" type="email"
                width="col-12">
                <template #img><img :src="require('@/assets/images/sms2.png')" alt=""></template>
              </form-input>

              <form-input label="موضوع الرساله" placeholder="يرجي إدخال موضوع الرساله" type="text" width="col-12">
                <template #img><img :src="require('@/assets/images/message-question.png')" alt=""></template>
              </form-input>

              <form-input label="موضوع الرساله" placeholder="يرجي إدخال موضوع الرساله" width="col-12" :textarea="true">
                <template #img><img :src="require('@/assets/images/message-text.png')" alt=""></template>
              </form-input>
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
import mapComponent from '@/components/contact/mapComponent.vue'
import formGroup from '@/components/Layouts/formGroup.vue'
import formInput from '@/components/Layouts/formInput.vue'


export default {
  components: {
    mapComponent,
    formGroup,
    formInput
  },
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