<template>
    <section class="products-sec">
        <div class="bg-title">
            <h1 class="font25 fontBold">القسم الرئيسي</h1>
            <h5>القسم الفرعي</h5>
        </div>
        <div class="container P_top_60 P_bottom_60">
            <div class="row justify-content-between align-items-center mb-4">
                <div class="col-lg-2 col-md-3 col-6">
                    <v-locale-provider rtl>
                        <v-select label="اختر القسم"
                            :items="['القسم الفرعي', 'القسم الفرعي 1', 'القسم الفرعي 2', 'القسم الفرعي 3']"
                            variant="outlined"></v-select>
                    </v-locale-provider>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap5">
                            <span class="fontBold">العرض</span>
                            <button type="button" class="btn grid p-0 height17 icon-btn">
                                <img :src="require('@/assets/images/gridIcon.png')" alt="">
                            </button>
                            <button type="button" class="btn list p-0 height17 icon-btn">
                                <img :src="require('@/assets/images/listIcon.png')" alt="">
                            </button>
                        </div>
                        <button type="button" class="btn p-0 height17 icon-btn d-flex align-items-center font13">
                            <span>الترتيب بالإسم</span>
                            <div class="d-flex align-items-center flex-column">
                                <img :src="require('@/assets/images/Polygon1.png')" class="width10 actUp" alt="">
                                <img :src="require('@/assets/images/Polygon2.png')" class="width10 actDown" alt="">
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid-wrapper" :class="{ 'inline--cards': gg }">
                <router-link class="default_link" to="/productDetails">
                    <div class="product_card">
                        <img :src="require('@/assets/images/products_sli.png')" alt="">
                        <div class="card-info">
                            <h6 class="mainDark fontBold">إسم المنتج</h6>
                            <span class="mainColor fontBold">اسم القسم</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },

}
</script>

<style lang="scss">
.bg-title {
    background: url('@/assets/images/bgTitle.png') no-repeat center;
    background-size: cover;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 40px;
    color: #fff;
}

.v-input__control {
    height: 40px;
    background-color: #fff;
}

.v-field--center-affix .v-label.v-field-label {
    font-size: 12px;
    color: #1e368c;
    opacity: 1;
    background-color: #fff;
    font-weight: 600;
    padding: 5px;
}

.v-field__input {
    min-height: unset;
    height: 40px !important;
    padding: 10px;
    font-size: 12px;
}

.v-field__outline {
    --v-field-border-width: 0 !important;
    --v-field-border-opacity: 1 !important;
    border: 1px solid #1e368c;
    border-radius: 0 !important;
}

.v-select__selection {
    color: #1e368c;
}

.icon-btn.btn {
    line-height: 0 !important;
}
.products-sec{
    background-color: #f5f5f5;
}
.product_card{
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 5px 0px #eee;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    flex-direction: column;
    width: 280px;
    height: 340px;
    padding: 0 0 30px 0;
    transition: .6s all ease;
    .card-info{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-direction: column;
    }
    img{
        width: 70%;
        margin-bottom: 30px;
    }
    &:hover{
        background-color: rgba(30, 54, 140, .17);
        border: 2px solid #1e368c;
    }
}
.grid-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    &.inline--cards{
        grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
        .product_card{
            flex-direction: row;
            justify-content: flex-start;
            width: 335px;
            height: 105px;
            background-color: transparent;
            padding: 0;
            border: 0;
            box-shadow: none;
            gap: 20px;
            img{
                width: 150px;
                margin: 0;
                height: 105px;
                padding: 13px;
                background-color: #fff;
                border-radius: 5px;
                transition: .6s all ease;
            }
            .card-info{
                align-items: flex-start;
            }
            &:hover{
                img{
                    background-color: rgba(30, 54, 140, .17);
                    border: 2px solid #1e368c;
                }
            }
        }
    }
}
</style>