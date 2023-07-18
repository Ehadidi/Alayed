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
      <p>
        هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن
        استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا.
        هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
        استبداله
        بنص اخر هذا. هذا النص يمكن استبداله بنص اخر
        هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن
        استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا.
        هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن
        استبداله
        بنص اخر هذا. هذا النص يمكن استبداله بنص اخر
      </p>
    </div>
  </div>
</template>

<script>
export default {

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