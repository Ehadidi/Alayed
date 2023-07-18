<template>
  <div>
    <mainSlider :loader="loader" :sliders="sliders"></mainSlider>
    <cardGroup :loader="loader" :news="news" class="offWhite p-5"></cardGroup>
    <prodauctGroup :loader="loader" :products="products"></prodauctGroup>
  </div>
</template>

<script>
import axios from 'axios';
import mainSlider from '@/components/Home/mainSlider.vue';
import cardGroup from '@/components/Home/cardGroup.vue';
import prodauctGroup from '@/components/Home/prodauctGroup.vue';


export default {
  components: {
    mainSlider,
    cardGroup,
    prodauctGroup,
  },
  data() {
    return {
      sliders : [],
      news : [],
      products: [],
      loader: true,
    }
  },

  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    async get_home(){
      await axios.get('home')
      .then( (res)=>{
          this.sliders = res.data.data.slides
          this.news = res.data.data.news
          this.products = res.data.data.categories
          this.loader = false
      } )
    }
  },
  mounted(){
    this.get_home()
  }
}
</script>
