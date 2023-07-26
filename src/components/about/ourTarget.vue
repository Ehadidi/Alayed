<template>
    <section class="our--massage">
        <div class="d-flex flex-column align-items-center gap20 w-75 M_auto">
          <h4 class="mainColor">{{ $t('about.ourGoals') }}</h4>
          <div class="row mb-5 w-100" v-if="aboutData">
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt" v-html="aboutData.goals_1"> </p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt" v-html="aboutData.goals_2"> </p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt" v-html="aboutData.goals_3"> </p>
            </div>
          </div>
          <div class="quoted-txt" v-if="aboutData">
                <p v-html="aboutData.goals_paragraph"></p>
            </div>
            <v-img
            class="siteImg"
                cover
                :src="require('@/assets/images/siteImg2.png')"
            ></v-img>
            <!-- <img class="siteImg" :src="require('@/assets/images/siteImg2.png')" alt="site image"> -->
        </div>
    </section>
  </template>
  
  <script>
  export default {
    props : ['aboutData']
  }
  </script>
  
  <style lang="scss" scoped>
      .our--massage{
          background-color: #F5F5F5;
          padding: 100px 40px;
          h4{
              font-weight: 600;
          }
          .our--massage--txt{
              font-weight: 600;
              line-height: 30px;
              margin: 0;
              padding: 0;
          }
      }
    .siteImg{
        aspect-ratio: 16 / 4;
        width: 70%;
    }
  </style>