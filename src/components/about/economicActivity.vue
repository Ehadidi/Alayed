<template>
    <section class="how-we-are">
      <div class="container">
        <div class="aboutTxt" v-if="aboutData">
            <h5>{{ $t('about.EconomicActivity') }}</h5>
            <p v-html="aboutData.economic_activity"> </p>
        </div>
        <div class="img-group">
            <img v-for="img in imgAssets" :key="img" :src="img.src" alt="activity image">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props:['aboutData'],
    data(){
        return {
            imgAssets:[
                {src : require('@/assets/images/Frame4.png')},
                {src : require('@/assets/images/Frame1.png')},
                {src : require('@/assets/images/Frame2.png')},
                {src : require('@/assets/images/Frame3.png')},
                {src : require('@/assets/images/Frame5.png')},
            ]
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
      .how-we-are{
          background: url('@/assets/images/1.png') no-repeat center;
          background-size: cover;
          img{
            width: 350px;
            height: 184px;
          }
          .aboutTxt{
              padding: 40px 0 0 0;
              h5{
                  color: #fff;
                  margin-bottom: 18px;
                  font-weight: 600;
              }
              p{
                  color: #fff;
                  line-height: 35px;
                  margin: 40px 0;
                  padding: 0;
              }
          }
          .img-group{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 0 0 40px 0;
            img{
                width: 60px;
                height: 60px;
            }
          }
      }
  </style>