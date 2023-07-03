<template>
  <div>
    <mainSlider></mainSlider>
    <cardGroup class="offWhite p-5"></cardGroup>
    <prodauctGroup></prodauctGroup>
  </div>
</template>

<script>
import mainSlider from '@/components/Home/mainSlider.vue';
import cardGroup from '@/components/Home/cardGroup.vue';
import prodauctGroup from '@/components/Home/prodauctGroup.vue';


export default {
  components: {
    mainSlider,
    cardGroup,
    prodauctGroup
  },
  data() {
    return {
      products: [
        { img1: require('@/assets/images/Group1.png'), title: 'الماء و الحدائق' },
        { img1: require('@/assets/images/Group2.png'), title: 'الدفع' },
        { img1: require('@/assets/images/Group3.png'), title: 'الشفط' },
        { img1: require('@/assets/images/Group4.png'), title: 'التمديدات' },
        { img1: require('@/assets/images/Group5.png'), title: 'الغاز' },
        { img1: require('@/assets/images/Group6.png'), title: 'الهواء' },
        { img1: require('@/assets/images/Group7.png'), title: 'الحريق' },
        { img1: require('@/assets/images/Group8.png'), title: 'النيوماتيك' },
        { img1: require('@/assets/images/Group9.png'), title: 'الرش المحوري' },
        { img1: require('@/assets/images/Group10.png'), title: 'رش المبيدات' },
        { img1: require('@/assets/images/Group11.png'), title: 'الادوات و الاكسسوارات' },
        { img1: require('@/assets/images/Group4.png'), title: 'منتجات خاصه' },
      ]
    }
  },

  provide() {
    return {
      products: this.products,
    };
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
}
</script>
