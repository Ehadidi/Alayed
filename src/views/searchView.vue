<template>
    <div v-if="loader" class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in 2" :key="item">
            <Skeleton width="100%" height="200px" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
    </div>
    <div class="container P_top_50 P_bottom_50">
        <div v-if="emptyData" class="">
            <div class="alert alert-danger text-center w-100" role="alert">
                لا يوجد منتجات
            </div>
        </div>
        <div v-else class="grid-wrapper">
            <router-link v-for="item in filterData" :key="item" class="default_link overflow_hid"
                :to="{ name: 'productDetails', params: { id: item.id } }">
                <div class="product_card">
                    <img :src="item.cover" alt="">
                    <div class="card-info">
                        <h6 class="mainDark fontBold">{{ item.name }}</h6>
                        <span class="mainColor fontBold">{{ item.category_name }}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Skeleton from 'primevue/skeleton';

export default {
    components: { Skeleton },
    data: () => ({
        filterData: [],
        loader: true,
        emptyData: false,
    }),
    methods: {
        async searchData() {
            await axios.get(`search?name=${this.$route.params.key}`)
                .then((res) => {
                    this.filterData = res.data.data
                    if (this.filterData.length === 0) {
                        this.emptyData = true
                    } else {
                        this.emptyData = false
                    }
                    this.loader = false
                }).catch(e => {
                    console.error(e);
                })
        },
    },
    mounted() {
        this.searchData()
    }
}
</script>

<style lang="scss" scoped>
.product_card {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 5px 0px #eee;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    height: 340px;
    padding: 0 0 30px 0;
    transition: .6s all ease;

    .card-info {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-direction: column;
    }

    img {
        width: 70%;
        height: 100%;
        margin: 10px 0 30px;
    }

    &:hover {
        background-color: rgba(30, 54, 140, .17);
        border: 2px solid #1e368c;
    }
}

.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(243px, 1fr));
    gap: 30px;

    &.inline--cards {
        grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));

        .product_card {
            flex-direction: row;
            justify-content: flex-start;
            width: 335px;
            height: 105px;
            background-color: transparent;
            padding: 0;
            border: 0;
            box-shadow: none;
            gap: 20px;

            img {
                width: 150px;
                margin: 0;
                height: 105px;
                padding: 13px;
                background-color: #fff;
                border-radius: 5px;
                transition: .6s all ease;
            }

            .card-info {
                align-items: flex-start;
            }

            &:hover {
                img {
                    background-color: rgba(30, 54, 140, .17);
                    border: 2px solid #1e368c;
                }
            }
        }
    }
}
</style>