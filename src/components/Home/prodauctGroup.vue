<template>
    <section class="p-5">
        <div class="container">
            <h3 class="M_bottom_50 fontBold mainColor">{{ $t('products.sections') }}</h3>
            <div class="d-flex align-items-center justify-content-center gap20" v-if="loader">
                <div class="d-flex flex-column gap15" v-for="i in 5" :key="i">
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton shape="circle" size="10rem" class="mr-2"></Skeleton>
                </div>
            </div>
            <div v-else class="wrapper">
                <productCategory :products="products"></productCategory>
            </div>
        </div>
        <router-link to="/product" class="btn main_btn up mt-5">{{ $t('products.moreCtegory') }}</router-link>
    </section>
</template>

<script>
import productCategory from '@/components/Home/productCategory.vue'
import Skeleton from 'primevue/skeleton';
export default {
    props: ['products', 'loader'],
    components: {
        productCategory,
        Skeleton
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 37.5px 50px;
    justify-items: center;

    .item_grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>