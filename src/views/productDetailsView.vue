<template>
    <section class="details-sec">
        <div class="bg-title"></div>
        <product-define></product-define>
        <txt-deatails>
            <template #title>المميزات</template>
            <template #txt>
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
            </template>
        </txt-deatails>
        <txt-deatails>
            <template #title>درجة حرارة الاستخدام</template>
            <template #txt>
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
            </template>
        </txt-deatails>
        <txt-deatails>
            <template #title>الاستخدامات</template>
            <template #txt>
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
                هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص
                يمكن استبداله بنص اخر
            </template>
        </txt-deatails>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-6">
                    <a data-fancybox="gallery" :href='require("@/assets/images/products_sli2.png")'>
                        <img class="w-75" :src="require('@/assets/images/products_sli2.png')" alt="products">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a data-fancybox="gallery" :href='require("@/assets/images/products_sli2.png")'>
                        <img class="w-75" :src="require('@/assets/images/products_sli2.png')" alt="products">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a data-fancybox="gallery" :href='require("@/assets/images/products_sli2.png")'>
                        <img class="w-75" :src="require('@/assets/images/products_sli2.png')" alt="products">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a data-fancybox="gallery" :href='require("@/assets/images/products_sli2.png")'>
                        <img class="w-75" :src="require('@/assets/images/products_sli2.png')" alt="products">
                    </a>
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-item">
                    <img :src="require('@/assets/images/pf_tecno1.png')" alt="products">
                </div>
                <div class="grid-item">
                    <img :src="require('@/assets/images/pf_tecno2.png')" alt="products">
                </div>
                <div class="grid-item">
                    <img :src="require('@/assets/images/pf_tecno3.png')" alt="products">
                </div>
                <div class="grid-item">
                    <img :src="require('@/assets/images/pf_tecno4.png')" alt="products">
                </div>
                <div class="grid-item">
                    <img :src="require('@/assets/images/pf_tecno5.png')" alt="products">
                </div>
            </div>
        </div>
        <div class="container pt-5 pb-5">
            <h5 class="dash-title fontBold mainColor">تفاصيل قياسية</h5>
            <v-locale-provider rtl>
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th class="text-center">
                                رقم المنتج
                            </th>
                            <th class="text-center">
                                الوزن
                            </th>
                            <th class="text-center">
                                السمك
                            </th>
                            <th class="text-center">
                                اللون
                            </th>
                            <th class="text-center">
                                ضغط العمل
                            </th>
                            <th class="text-center">
                                الطول
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-locale-provider>
        </div>
    </section>
</template>

<script>
import productDefine from '@/components/productsDetails/productDefine.vue'
import txtDeatails from '@/components/productsDetails/txtDeatails.vue'
export default {
    components: {
        productDefine,
        txtDeatails
    },
    data() {
        return {
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
            ],
        }
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
.bg-title {
    background: url('@/assets/images/tube.png') no-repeat center;
    background-size: cover;
    height: 350px;
    padding: 40px;
    color: #fff;
}

.details-sec {
    background-color: #f5f5f5;
}
</style>