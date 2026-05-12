<template>
    <section class="details-sec">
        <img class="product--cover" :src="productDetails.banner" alt="">
        <product-define :icons="icons" :product_icon="product_icon" :categoryName="categoryName"
            :productName="productName"></product-define>
        <div class="advantages-sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="txt-sec">
                            <div class="container">
                                <h5 class="fontBold mainColor txt_start">
                                    {{ $t('products.advantages') }}
                                </h5>
                                <div v-for="item in advantages" :key="item" class="d-flex align-items-start gap6 mb-3 mt-3">
                                    <span
                                        class="width20 height20 text-white round bgMain font12 d-flex align-items-center justify-content-center">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </span>
                                    <p class="mb-0 txt_start">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="txt-sec">
                            <div class="container">
                                <h5 class="fontBold mainColor txt_start">
                                    {{ $t('products.uses') }}
                                </h5>
                                <div v-for="item in uses" :key="item" class="d-flex align-items-start gap6 mb-3 mt-3">
                                    <span
                                        class="width20 height20 text-white round bgMain font12 d-flex align-items-center justify-content-center">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                    </span>
                                    <p class="mb-0 txt_start">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="txt-sec">
            <div class="container">
                <h5 class="fontBold mainColor txt_start">
                    {{ $t('products.useTemperature') }}
                </h5>
                <div v-for="item in useTemperatures" :key="item" class="d-flex align-items-start gap6 mb-3 mt-3">
                    <span
                        class="width20 height20 text-white round bgMain font12 d-flex align-items-center justify-content-center">
                        <font-awesome-icon :icon="['fas', 'check']" />
                    </span>
                    <p class="mb-0 txt_start">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>{{ $t('layout.product_imgs') }}</h5>
                </div>
                <div v-for="img in images" :key="img" class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="fancy-link mt-2 mb-2 w-100">
                        <a data-fancybox="gallery" :href='img'>
                            <span class="show--img"><font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" /></span>
                            <img class="w-100 h-100 radius5" style="height: 200px;" :src="img" alt="products">
                        </a>
                    </div>
                </div>
            </div>
            <div class="grid-row">
                <div v-for="tic in tickets" :key="tic" class="grid-item">
                    <div class="fancy-link mt-2 mb-2 w-100 height120">
                        <a data-fancybox="gallery" :href='tic'>
                            <span class="show--img"><font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" /></span>
                            <img class="w-100 h-100 radius5" style="height: 200px;" :src="tic" alt="products">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-5 pb-15">
            <h5 class="dash-title fontBold mainColor">{{ $t('products.StandardDetails') }}</h5>
            <div class="imageDetails" v-if="imageDetails">
                <img :src="imageDetails" alt="">
            </div>
            <v-locale-provider rtl v-if="!imageDetails">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <!-- <th class="text-center"> # </th> -->
                            <th class="text-center">
                                {{ $t('products.productNumber') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.weight') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.workPressure') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.color') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.height') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.thickness') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.explosive_pressure') }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in details" :key="item">
                            <td>{{ item.product_number }}</td>
                            <td>{{ item.weight }}</td>
                            <td>{{ item.work_pressure }}</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.thickness }}</td>
                            <td>{{ item.height }}</td>
                            <td>{{ item.explosive_pressure }}</td>

                            <!-- <td v-for="val in item" :key="val">{{ val }}</td> -->
                        </tr>
                    </tbody>
                </v-table>
            </v-locale-provider>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import productDefine from '@/components/productsDetails/productDefine.vue'
export default {
    components: {
        productDefine,
    },
    data() {
        return {
            productDetails: [],
            advantages: [],
            useTemperatures: [],
            uses: [],
            details: [],
            icons: [],
            images: [],
            tickets: [],
            categoryName: '',
            product_icon: '',
            // mainCategoryName: '',
            productName: '',
            imageDetails: '',
        }
    },
    methods: {
        async get_product_details() {

            await axios.get(`product/detail?id=${this.$route.params.id}`)
                .then((res) => {
                    this.productDetails = res.data.data
                    this.advantages = this.productDetails.advantages
                    this.useTemperatures = this.productDetails.use_temperatures
                    this.uses = this.productDetails.uses
                    this.details = res.data.data.details
                    this.imageDetails = res.data.data.imageDetails
                    this.icons = res.data.data.icons
                    this.images = res.data.data.images
                    this.tickets = res.data.data.tickets
                    this.categoryName = res.data.data.category_name
                    this.product_icon = res.data.data.product_icon
                    console.log(this.product_icon);
                    this.productName = res.data.data.name
                })
        },
    },
    mounted() {
        this.get_product_details()
    },
}
</script>

<style lang="scss" scoped>
.imageDetails {
    img {
        width: 100%;
    //    height: 350px;
    }
}

.advantages-sec {
    background-color: #fff;
}

.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 37.5px 50px;
    padding: 30px 0;

    .grid-item {
        width: 100%;
        height: 120px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.dash-title {
    position: relative;
    width: fit-content;
    text-align: start;
    margin-bottom: 40px;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 25%;
        height: 3px;
        background-color: #ccc;
        border-radius: 5px;
    }
}

.product--cover {
    width: 100%;
    // height: 350px;
}

.details-sec {
    background-color: #f5f5f5;
}

thead {
    th {
        background-color: #1e368c !important;
        color: #fff !important;
        font-size: 14px;
        font-weight: 600;
    }
}

.txt-sec {
    background-color: #fff;
    margin: 15px 0;
    padding: 40px 0;
}

h5 {
    position: relative;
    width: fit-content;
    text-align: start;
    margin-bottom: 40px;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 25%;
        height: 3px;
        background-color: #ccc;
        border-radius: 5px;
    }
}

body.ltr {
    h5 {
        &::after {
            content: "";
            right: unset;
            left: 0;
        }
    }
}

.fancy-link {
    position: relative;
    width: 200px;
    // height: 150px;
    display: block;
    border-radius: 5px;

    .show--img {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 18px;
        transition: .5s all ease;
        background-color: #1e368c5b;
        visibility: hidden;
        opacity: 0;
        border-radius: 5px;
    }

    &:hover {
        .show--img {
            visibility: visible;
            opacity: 1;
        }
    }
}</style>