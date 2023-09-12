<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <router-link :to="'/newsDetails/' + item.id" class="raise">
            <v-card>
                <v-img class="mb-3" :src="item.image" height="200px" cover></v-img>
                <div class="newsCard">
                    <v-card-subtitle class="p-0">
                        {{ item.date }}
                    </v-card-subtitle>
                    <v-card-title class="p-0">
                        <span class="fontBold font17">{{ item.title }}</span>
                    </v-card-title>
                    <v-card-text class="p-0 txt_start">
                        {{ item.description }}
                    </v-card-text>
                </div>
            </v-card>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['item'],

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

.v-card-title {
    width: 100%;
    text-align: start;

    span {
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        white-space: nowrap;
    }
}
</style>