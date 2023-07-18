<template>
  <section class="our--massage">
      <div class="d-flex flex-column align-items-center gap20 w-75 M_auto">
        <h4>رسالتنا</h4>
        <div v-if="aboutData">
            <p class="our--massage--txt" v-html="aboutData.message"></p>
        </div>
        <div v-else>
            <p></p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    props:['aboutData']
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
</style>