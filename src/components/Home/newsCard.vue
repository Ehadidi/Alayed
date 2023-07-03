<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <router-link to="/newsDetails" class="raise">
            <v-card>
                <v-img class="mb-3" :src="require('@/assets/images/scaled.png')" height="200px" cover></v-img>
                <div class="newsCard">
                    <v-card-subtitle class="p-0">
                        28 مايو 2023
                    </v-card-subtitle>
                    <v-card-title class="p-0">
                        <span class="fontBold font17">هذا النص يمكن استبداله</span>
                    </v-card-title>
                    <v-card-text class="p-0 txt_start">
                        هذا النص يمكن استبداله
                        هذا النص يمكن استبداله
                    </v-card-text>
                </div>
            </v-card>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newsCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
}

.v-card {
    box-shadow: none;
    background-color: transparent;
}
</style>