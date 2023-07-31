<template>
    <section class="pb-5">
        <Toast />
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
                                    <form ref="joinForm" @submit.prevent="submitJoinForm">
                                        <div class="form__label">
                                            <span class="fontBold">{{ $t('layout.userName') }}</span>
                                            <input class="default_input" type="text" v-model="name" name="name" :placeholder="$t('layout.writeUserName')">
                                        </div>
                                        <div class="form__label">
                                            <span class="fontBold">{{ $t('layout.email') }}</span>
                                            <input class="default_input" type="text" v-model="email" name="email" :placeholder="$t('layout.writeEmail')">
                                        </div>
                                        <div class="d-flex justify-content-cneter">
                                            <button class="btn main_btn fill up font14 w-50 M_auto">
                                                {{ $t('layout.send') }}
                                            </button>
                                        </div>
                                    </form>
                                </topMenu>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-12 d-lg-block d-none">
                            <div class="navBar">
                                <ul>
                                    <li><router-link class="default_link" to="/">{{ $t('layout.header.home')
                                    }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/about">{{
                                            $t('layout.header.howWe') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/product">{{
                                            $t('layout.header.products') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/ChairmanSpeech">{{
                                            $t('layout.header.wordOfBoard') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/news">{{
                                            $t('layout.header.news') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/commonQuestions">{{
                                            $t('layout.header.Support') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/contact">{{
                                            $t('layout.header.Contact') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link class="default_link" to="/humanResources">{{
                                            $t('layout.header.HumanResources') }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <topMenu>
                        <template #btn>
                            <button type="button" class="btn radiuBtn up font11">
                                {{ $t('layout.footer.sendToUs') }}
                            </button>
                        </template>
                        <form ref="sendForm" @submit.prevent="submitSendForm">
                            <div class="form__label">
                                <span class="fontBold">{{ $t('layout.userName') }}</span>
                                <input class="default_input" v-model="name" name="name" type="text"
                                    :placeholder="$t('layout.writeUserName')">
                            </div>
                            <div class="form__label">
                                <span class="fontBold">{{ $t('layout.email') }}</span>
                                <input class="default_input" v-html="email" name="email" type="text"
                                    :placeholder="$t('layout.writeEmail')">
                            </div>
                            <div class="form__label">
                                <span class="fontBold">{{ $t('layout.yourMassage') }}</span>
                                <textarea class="default_input" v-model="message" name="message" type="text"
                                    :placeholder="$t('layout.writeYourMassge')"></textarea>
                            </div>
                            <div class="d-flex justify-content-cneter">
                                <button class="btn main_btn fill up font14 w-50 M_auto">
                                    {{ $t('layout.send') }}
                                </button>
                            </div>
                        </form>
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
            <img class="partener-img" v-for="Partner in Partners" :key="Partner" :src="Partner.image">
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import topMenu from '@/components/Layouts/topMenu.vue'
export default {
    props: ['socials', 'Partners'],
    components: {
        topMenu
    },
    data() {
        return {
            vadlid: '',
            loading: false
        }
    },
    methods: {
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: '', detail: `${this.vadlid}`, life: 3000 })
        },
        showFail() {
            this.$toast.add({ severity: 'error', summary: '', detail: `${this.vadlid}`, life: 3000 })
        },
        async submitSendForm() {
            this.loading = true
            const formData = new FormData(this.$refs.sendForm)

            await axios.post(`message`, formData)
                .then((response) => {
                    this.vadlid = response.data.msg

                    if (response.data.key == 'success') {
                        this.showSuccess()
                        this.loading = false
                        this.$refs.sendForm.reset();
                    }
                    else {
                        this.showFail()
                        this.loading = false
                    }
                }).catch(e => {
                    console.error(e);
                })
        },
        async submitJoinForm() {
            this.loading = true
            const formData = new FormData(this.$refs.joinForm)

            await axios.post(`joinUs`, formData)
                .then((response) => {
                    this.vadlid = response.data.msg

                    if (response.data.key == 'success') {
                        this.showSuccess()
                        this.loading = false
                        this.$refs.joinForm.reset();
                    }
                    else {
                        this.showFail()
                        this.loading = false
                    }
                }).catch(e => {
                    console.error(e);
                })
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

    .social-icon {
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

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
}

.partener-img {
    width: 45px;
    filter: grayscale(100%) opacity(0.5);
    transition: .5s all ease;

    &:hover {
        filter: grayscale(0%) opacity(1);
    }
}
</style>