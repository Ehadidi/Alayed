<template>
  <section class="p-5">

    <div class="container">
        <h3 class="M_bottom_50 fontBold mainColor">منتجاتنا</h3>
        <div class="wrapper">
            <productCategory></productCategory>
        </div>
    </div>
  </section>
</template>

<script>
import productCategory from '@/components/Home/productCategory.vue'
export default {
    components:{
        productCategory
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 37.5px 50px;
        .item_grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
</style>