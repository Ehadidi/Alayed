<template>
  <div class="bg-title">
    <div class="container h-100">
      <div class="flex-end-content">
        <h1 class="font25 fontBold">B2B</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="b2b-txt">
      <div v-if="b2bData">
        <p v-html="b2bData"></p>
      </div>
      <div v-else>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loader: true,
      b2bData: ''
    }
  },

  methods: {
    async get_b2b() {
      await axios.get('b2b')
        .then((res) => {
          this.b2bData = res.data.data
          console.log(this.b2bData);
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

.b2b-txt {
  color: #000;
  font-weight: 600;
  text-align: start;
  margin: 40px 0;
  line-height: 28px;
}
</style>