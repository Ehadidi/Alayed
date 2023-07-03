<template>
    <section class="pb-5">
        <footer>
            <div class="container">
                <div class="footer--content">
                    <img class="width100 height55" :src="require('@/assets/images/logo.png')" alt="">
                    <div class="row w-100 align-items-center">
                        <div class="col-md-3 col-sm-12">
                            <div class="d-flex justify-content-start">
                                <topMenu>
                                    <template #btn>
                                        <button class="btn text-white font11">
                                            اشترك في البريد
                                        </button>
                                    </template>
                                    <div class="form__label">
                                        <span class="fontBold">الإسم</span>
                                        <input class="default_input" type="text" placeholder="يرجي كتابة الاسم هنا">
                                    </div>
                                    <div class="form__label">
                                        <span class="fontBold">البريد الإلكتروني</span>
                                        <input class="default_input" type="text" placeholder="يرجي كتابة البريد الإلكتروني">
                                    </div>
                                </topMenu>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12">
                            <div class="navBar">
                                <ul>
                                    <li><router-link class="default_link" to="/">الرئيسية</router-link></li>
                                    <li>
                                        <router-link class="default_link" to="/about">من نحن</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/product">منتجاتنا</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/ChairmanSpeech">كلمة مجلس الادارة</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/news">الاخبار</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="">الدعم</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/contact">تواصل معنا</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/HR">الموارد البشرية</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <topMenu>
                        <template #btn>
                            <button class="btn radiuBtn up font11">
                                ارسل لنا الان
                            </button>
                        </template>
                        <div class="form__label">
                            <span class="fontBold">الإسم</span>
                            <input class="default_input" type="text" placeholder="يرجي كتابة الاسم هنا">
                        </div>
                        <div class="form__label">
                            <span class="fontBold">البريد الإلكتروني</span>
                            <input class="default_input" type="text" placeholder="يرجي كتابة البريد الإلكتروني">
                        </div>
                        <div class="form__label">
                            <span class="fontBold">رسالتك</span>
                            <textarea class="default_input" type="text" placeholder="يرجي كتابة رسالتك هنا"></textarea>
                        </div>
                    </topMenu>
                    <div class="d-flex align-items-center justify-content-center gap15 w-100 pt-5">
                        <span v-for="item in social" :key="item">
                            <router-link to="" class="social-icon default_link">
                                <img :src="item.src" :alt="item.alt">
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        <div class="d-flex align-items-center justify-content-center gap15 w-100 pt-5">
             <img class="partener-img" 
                :class="partener.width" 
                v-for="partener in parteners" 
                :key="partener" 
                :src="partener.src" 
                :alt="partener.alt"
             >
        </div>
    </section>
</template>

<script>
import topMenu from '@/components/Layouts/topMenu.vue'
export default {
    components: {
        topMenu
    },
    data(){
        return{
            social :[
                {src : require('@/assets/images/youtube.png') , alt : 'youtube'},
                {src : require('@/assets/images/FacebookIcon.png') , alt : 'Facebook'},
                {src : require('@/assets/images/TwitterIcon.png') , alt : 'Twitter'},
                {src : require('@/assets/images/instegram.png') , alt : 'instegram'},
                {src : require('@/assets/images/snap.png') , alt : 'snap'},
            ],
            parteners :[
                {src : require('@/assets/images/Asset10.png') , alt : 'partener' , width : 'width55'},
                {src : require('@/assets/images/Asset9.png') , alt : 'partener'},
                {src : require('@/assets/images/Asset8.png') , alt : 'partener'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    padding: 15px;
    background-image: url('@/assets/images/slashsBg.png');
    background-color: #5b5a5a;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .footer--content {
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: center;
        justify-content: center;
    }

    .navBar {
        .dropBtnNav {
            position: relative;
            box-shadow: none;
        }

        ul {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 0;
            padding: 0;

            li {
                a {
                    color: #fff;
                }
            }
        }
    }
    .social-icon{
        width: 30px;
        height: 30px;
        align-content: center;
        justify-content: center;
        display: grid;
        border-radius: 50%;
        background-color: transparent;
        transition: .5s all ease;
        img{
            transition: .5s all ease;
        }
        &:hover{
            background-color: #fff;
            img{    
               filter: invert(1);
            }
        }
    }
}
.partener-img{
    width: 45px;
    filter: grayscale(100%) opacity(0.5);
    transition: .5s all ease;
    &:hover{
        filter: grayscale(0%) opacity(1);
    }
}
</style>