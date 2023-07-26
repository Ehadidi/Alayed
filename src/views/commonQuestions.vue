<template>
    <section>
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">{{ $t('layout.header.fqs') }}</h1>
                    <!-- <p>هذا النص هو مثال لنص يمكن ان يستبدل</p> -->
                </div>
            </div>
        </div>
        <div class="container P_top_40 P_bottom_40">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="(item, index) in fqsData" :key="item" class="mb-3">
                    <v-expansion-panel-title class="font12 mainColor fontBold">{{ item.question }}</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="d-flex align-items-start gap30 position-relative">
                            <p class="txt_start expansion_txt" ref="para" :id="'txt'+index">
                                {{ item.answer }}
                            </p>
                            <button class="btn font10 show-more" @click="showToggle()"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel> 
            </v-expansion-panels>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            moreText: false,
            fqsData: []
        }
    },

    methods: {
        showToggle(){
            this.$refs.para.forEach(txt => {
                txt.classList.toggle('active')
            });
        },
        async get_fqs(){
            await axios.get('fqs')
            .then((res) => {
                this.fqsData = res.data.data
                console.log(res);
            })
        }
    },
    mounted(){
        this.get_fqs()
    }
}
</script>

<style lang="scss" scoped>
.bg-title {
    background: url('@/assets/images/Frame.png') no-repeat center;
    background-size: cover;
    height: 350px;
    gap: 25px;
    padding: 50px 0;
    color: #fff;

    .flex-end-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
}
.expansion_txt{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px;
    max-height: 40px;
    transition: .3s all ease;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    &.active{
        max-height: max-content;
        overflow: visible;
        display: block;
    }
}
.show-more{
    position: absolute;
    bottom: 0; 
    left: -5px;
}
</style>