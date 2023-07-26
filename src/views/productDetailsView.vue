<template>
    <!-- :productName="productName" :category="category" :subSection="subSection" -->
    <section class="details-sec">
        <img class="product--cover" :src="productDetails.cover" alt="">
        <product-define :icons="icons" :categoryName="categoryName" :mainCategoryName="mainCategoryName" :productName="productName"></product-define>
        <txt-deatails>
            <template #title>{{ $t('products.advantages') }}</template>
            <template #txt>
                {{ advantages }}
            </template>
        </txt-deatails>
        <txt-deatails>
            <template #title>{{ $t('products.useTemperature') }}</template>
            <template #txt>
                {{ useTemperatures }}
            </template>
        </txt-deatails>
        <txt-deatails>
            <template #title>{{ $t('products.uses') }}</template>
            <template #txt>
                {{ uses }}
            </template>
        </txt-deatails>
        <div class="container">
            <div class="row">
                <div v-for="img in images" :key="img" class="col-lg-3 col-md-4 col-6">
                    <a data-fancybox="gallery" :href='img'>
                        <img class="w-75" :src="img" alt="products">
                    </a>
                </div>
            </div>
            <div class="grid-row">
                <div v-for="tic in tickets" :key="tic" class="grid-item">
                    <img :src="tic" alt="products">
                </div>
            </div>
        </div>
        <div class="container pt-5 pb-5">
            <h5 class="dash-title fontBold mainColor">{{ $t('products.StandardDetails') }}</h5>
            <v-locale-provider rtl>
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th class="text-center">
                                {{ $t('products.productNumber') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.weight') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.thickness') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.color') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.workPressure') }}
                            </th>
                            <th class="text-center">
                                {{ $t('products.height') }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in details" :key="item">
                            <!-- <td>{{ item.product_id }}</td> -->
                            <td>{{ item.product_number }}</td>
                            <td>{{ item.weight }}</td>
                            <td>{{ item.height }}</td>
                            <td>{{ item.thickness }}</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.work_pressure }}</td>
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
import txtDeatails from '@/components/productsDetails/txtDeatails.vue'
export default {
    components: {
        productDefine,
        txtDeatails
    },
    data() {
        return {
            productDetails: [],
            advantages: '',
            useTemperatures:'',
            uses:'',
            details: [],
            icons: [],
            images: [],
            tickets:[],
            categoryName: '',
            mainCategoryName: '',
            productName: '',
        }
    },
    methods: {
        async get_product_details() {

            await axios.get(`product/detail?id=${this.$route.params.id}`)
                .then((res) => {
                    this.productDetails = res.data.data
                    this.advantages = this.productDetails.advantages[0]
                    this.useTemperatures = this.productDetails.use_temperatures[0]
                    this.uses = this.productDetails.uses[0]
                    this.details = res.data.data.details
                    this.icons = res.data.data.icons
                    this.images = res.data.data.images
                    this.tickets = res.data.data.tickets
                    this.categoryName = res.data.data.category_name
                    this.mainCategoryName = res.data.data.main_category_name
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
.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 37.5px 50px;
    padding: 30px 0;

    .grid-item {
        width: 150px;
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
    height: 350px;
}

.details-sec {
    background-color: #f5f5f5;
}
thead{
    th{
        background-color: #1e368c !important;
        color: #fff !important;
        font-size: 14px;
        font-weight: 600;
    }
}
</style>