<template>
    <div class="define-sec">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6 col-12 mb-3">
                    <div class="d-flex align-items-center gap20">
                        <span class="width70 height70 round d-flex align-items-center justify-content-center bgMain">
                            <img :src="require('@/assets/images/Group2.png')" class="w-50" alt="">
                        </span>
                        <div class="d-flex flex-column align-items-start gap10">
                            <h6 class="fontBold mainColor">{{ productName }}</h6>
                            <span class="fontBold">{{ categoryName }} / {{ mainCategoryName }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-12 mb-3">
                    <div class="d-flex align-items-center gap15 justify-content-end">
                        <span v-for="ico in icons" :key="ico" 
                            class="width60 height60 round d-flex align-items-center justify-content-center bgMain"
                         >
                            <img :src="ico" class="w-50" alt="">
                            <!-- <v-tooltip activator="parent" location="bottom">
                                un burnable
                            </v-tooltip> -->
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['icons' , 'mainCategoryName' , 'categoryName' , 'productName']
}
</script>

<style lang="scss" scoped>
.define-sec {
    padding: 60px 0;
}
</style>