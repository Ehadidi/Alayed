<template>
    <section class="products-sec">
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex--start--title">
                    <h1 class="font20 fontBold mb-5">{{ subCategoryName }}</h1>
                    <!-- <h6 class="font13"> {{ subCategoryName }}</h6> -->
                </div>
            </div>
        </div>
        <div class="container P_top_60 P_bottom_60">
            <div class="row justify-content-between align-items-center mb-4">
                <div class="col-lg-2 col-md-3 col-6">
                    <select class="default_select" v-model="filterCategory" @change="filter" name="subCategory">
                        <option disabled selected value="">{{ $t('products.selectCategoey') }}</option>
                        <option :value="option.id" v-for="option in category" :key="option">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap5">
                            <span class="fontBold">{{ $t('products.view') }}</span>
                            <button type="button" class="btn grid p-0 height17 icon-btn" @click="graid">
                                <img :src="require('@/assets/images/gridIcon.png')" alt="">
                            </button>
                            <button type="button" class="btn list p-0 height17 icon-btn" @click="list">
                                <img :src="require('@/assets/images/listIcon.png')" alt="">
                            </button>
                        </div>
                        <button @click="sort" type="button"
                            class="btn p-0 height17 icon-btn d-flex align-items-center font13">
                            <span>{{ $t('products.sortByName') }}</span>
                            <div class="d-flex align-items-center flex-column">
                                <img :src="require('@/assets/images/Polygon1.png')" class="width10 actUp" alt="">
                                <img :src="require('@/assets/images/Polygon2.png')" class="width10 actDown" alt="">
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="loader" class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" v-for="item in 2" :key="item">
                    <Skeleton width="100%" height="200px" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                </div>
            </div>
            <div v-if="emptyData" class="">
                <div class="alert alert-danger text-center w-100" role="alert">
                    {{ $t('products.productNotFound') }}
                </div>
            </div>
            <div v-else class="grid-wrapper" ref="test" :class="toggleStatus">
                <router-link v-for="item in productsData" :key="item" class="default_link overflow_hid"
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
    </section>
</template>

<script>
import axios from 'axios'
import Skeleton from 'primevue/skeleton';
export default {
    components: { Skeleton },
    data() {
        return {
            loader: true,
            productsData: [],
            toggleStatus: sessionStorage.getItem("listed"),
            category: [],
            filterCategory: this.$route.params.id,
            emptyData: false,
            // mainCategoryName: '',
            subCategoryName: '',
        }
    },
    methods: {
        sort() {
            this.productsData.sort((a, b) => {
                if (a.name && b.name) {
                    return (-1)                    
                }
            })
        },
        graid() {
            sessionStorage.setItem("listed", "")
            this.toggleStatus = sessionStorage.getItem("listed")

        },
        list() {
            sessionStorage.setItem("listed", "inline--cards")
            this.toggleStatus = sessionStorage.getItem("listed")


        },
        async get_products_group() {
            await axios.get(`products?category_id=${this.$route.params.id}`)
                .then((res) => {
                    this.productsData = res.data.data.products
                    // this.mainCategoryName = res.data.data.mainCategoryName
                    this.subCategoryName = res.data.data.subCategoryName
                    if (this.productsData.length === 0) {
                        this.emptyData = true
                    } else {
                        this.emptyData = false
                    }
                    this.loader = false
                })
        },
        async filter() {
            this.loader = true
            await axios.get(`products?category_id=${this.filterCategory}`)
                .then((response) => {
                    console.log(response);
                    this.productsData = response.data.data.products
                    this.mainCategoryName = response.data.data.mainCategoryName
                    this.subCategoryName = response.data.data.subCategoryName
                    if (this.productsData.length === 0) {
                        this.emptyData = true
                    } else {
                        this.emptyData = false
                    }
                    this.loader = false
                }).catch(e => {
                    console.error(e);
                })
        },
        async get_category() {
            await axios.get(`mainCategory`)
                .then((res) => {
                    this.category = res.data.data.category
                    console.log(this.category);
                })
        }
    },

    mounted() {
        this.toggleStatus = sessionStorage.getItem("listed");
        this.get_products_group()
        this.get_category()
    },
}
</script>

<style lang="scss">
.bg-title {
    background: url('@/assets/images/bgTitle.png') no-repeat center;
    background-size: cover;
    height: 350px;
    padding: 40px;
    color: #fff;

    .flex--start--title {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
}

.default_select {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: 1px solid #1e368c;
    color: #1e368c;
    font-size: 13px;
    padding: 10px;

    &:focus-visible {
        outline: none;
    }
}

.icon-btn.btn {
    line-height: 0 !important;
}

.products-sec {
    background-color: #f5f5f5;
}

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
        height: 200px;
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