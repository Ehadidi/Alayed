<template>
  <section>
    <div class="bg-title">
      <img :src="b2bImage" alt="">
      <div class="container h-100">
        <div class="flex-end-content">
          <h1 class="font25 fontBold">B2B</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="b2b-txt">
        <div v-if="b2bPragraph">
          <p v-html="b2bPragraph"></p>
        </div>
        <div v-else>
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loader: true,
      b2bPragraph: '',
      b2bImage: ''
    }
  },

  methods: {
    async get_b2b() {
      await axios.get('b2b')
        .then((res) => {
          this.b2bPragraph = res.data.data.paragraph
          this.b2bImage = res.data.data.image

          this.loader = false
        })
    }
  },
  mounted() {
    this.get_b2b()
  }
}
</script>

<style lang="scss" scoped>
.bg-title {
  height: 350px;
  gap: 25px;
  padding: 50px 0;
  color: #fff;
  position: relative;

  img{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    filter: brightness(0.6);
  }

  .flex-end-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }
}

.b2b-txt {
  color: #000;
  font-weight: 600;
  text-align: start;
  margin: 40px 0;
  line-height: 28px;
}
</style>