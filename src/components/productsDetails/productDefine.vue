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
                            <h6 class="fontBold mainColor">اسم المنتج</h6>
                            <span class="fontBold"> القسم الرئيسي \ القسم الفرعي</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-12 mb-3">
                    <div class="d-flex align-items-center gap15 justify-content-end">
                        <span class="width60 height60 round d-flex align-items-center justify-content-center bgMain">
                            <img :src="require('@/assets/images/fire.png')" class="w-50" alt="">
                            <v-tooltip activator="parent" location="bottom">
                                un burnable
                            </v-tooltip>
                        </span>
                        <span class="width60 height60 round d-flex align-items-center justify-content-center bgMain">
                            <img :src="require('@/assets/images/fire.png')" class="w-50" alt="">
                            <v-tooltip activator="parent" location="bottom">
                                un burnable
                            </v-tooltip>
                        </span>
                        <span class="width60 height60 round d-flex align-items-center justify-content-center bgMain">
                            <img :src="require('@/assets/images/fire.png')" class="w-50" alt="">
                            <v-tooltip activator="parent" location="bottom">
                                un burnable
                            </v-tooltip>
                        </span>
                        <span class="width60 height60 round d-flex align-items-center justify-content-center bgMain">
                            <img :src="require('@/assets/images/fire.png')" class="w-50" alt="">
                            <v-tooltip activator="parent" location="bottom">
                                un burnable
                            </v-tooltip>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.define-sec {
    padding: 60px 0;
}
</style>