<template>
  <section class="how-we-are" :style="`background: url('${economic_banner}') no-repeat center; background-size: cover`">
    <div class="container">
      <div class="aboutTxt" v-if="aboutData">
        <h5>{{ $t('about.EconomicActivity') }}</h5>
        <p v-html="aboutData.economic_activity"> </p>
      </div>
      <div class="img-group">
        <img class="round" v-for="img in aboutData.economic_activity_images" :key="img" :src="img" alt="activity image">
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  props: ['aboutData', 'economic_banner'],
}
</script>
  
<style lang="scss" scoped>
.how-we-are {
    min-height: 300px;
    max-height: fit-content;
  img {
    width: 100%;
    height: 100%;
  }

  .banner-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
  }

  .aboutTxt {
    padding: 40px 0 0 0;

    h5 {
      color: #fff;
      margin-bottom: 18px;
      font-weight: 600;
    }

    p {
      color: #fff;
      line-height: 35px;
      margin: 40px 0;
      padding: 0;
    }
  }

  .img-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 0 0 40px 0;

    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>