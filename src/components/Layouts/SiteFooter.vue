<template>
    <section class="pb-5">
        <footer>
            <div class="container">
                <div class="footer--content">
                    <img class="width100 height55" :src="require('@/assets/images/logo.png')" alt="">
                    <div class="row w-100 align-items-center">
                        <div class="col-lg-3 col-12">
                            <div class="d-flex justify-content-lg-start justify-content-center">
                                <topMenu>
                                    <template #btn>
                                        <button class="btn text-white font11">
                                            {{ $t('layout.footer.subscription') }}
                                        </button>
                                    </template>
                                    <div class="form__label">
                                        <span class="fontBold">{{ $t('layout.userName') }}</span>
                                        <input class="default_input" type="text" :placeholder="$t('layout.writeUserName')">
                                    </div>
                                    <div class="form__label">
                                        <span class="fontBold">{{ $t('layout.email')}}</span>
                                        <input class="default_input" type="text" :placeholder="$t('layout.writeEmail')">
                                    </div>
                                </topMenu>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-12 d-lg-block d-none">
                            <div class="navBar">
                                <ul>
                                    <li><router-link class="default_link" to="/">{{ $t('layout.header.home')}}</router-link></li>
                                    <li>
                                        <router-link class="default_link" to="/about">{{ $t('layout.header.howWe')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/product">{{ $t('layout.header.products')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/ChairmanSpeech">{{ $t('layout.header.wordOfBoard')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/news">{{ $t('layout.header.news')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/commonQuestions">{{ $t('layout.header.Support')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/contact">{{ $t('layout.header.Contact')}}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/humanResources">{{ $t('layout.header.HumanResources')}}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <topMenu>
                        <template #btn>
                            <button class="btn radiuBtn up font11">
                                {{ $t('layout.footer.sendToUs') }}
                            </button>
                        </template>
                        <div class="form__label">
                            <span class="fontBold">{{ $t('layout.userName') }}</span>
                            <input class="default_input" type="text" :placeholder="$t('layout.writeUserName')">
                        </div>
                        <div class="form__label">
                            <span class="fontBold">{{ $t('layout.email') }}</span>
                            <input class="default_input" type="text" :placeholder="$t('layout.writeEmail')">
                        </div>
                        <div class="form__label">
                            <span class="fontBold">{{ $t('layout.yourMassage') }}</span>
                            <textarea class="default_input" type="text" :placeholder="$t('layout.writeYourMassge')"></textarea>
                        </div>
                    </topMenu>
                    <div class="d-flex align-items-center justify-content-center gap15 w-100 pt-5">
                        <span v-for="item in socials" :key="item">
                            <a :href="item.link" class="social-icon default_link">
                                <i :class="item.icon"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        <div class="d-flex align-items-center justify-content-center gap15 w-100 pt-5">
             <img class="partener-img" 
                v-for="Partner in Partners" 
                :key="Partner" 
                :src="Partner.image"
             >
        </div>
    </section>
</template>

<script>
import topMenu from '@/components/Layouts/topMenu.vue'
export default {
    props:['socials' , 'Partners'],
    components: {
        topMenu
    },
    data(){
        return{
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
            padding: 0 40px;

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
        font-size: 18px;
        color: #fff;
        &:hover{
            background-color: #fff;
            color: #000;
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