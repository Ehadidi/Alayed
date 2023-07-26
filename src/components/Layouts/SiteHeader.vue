<template>
    <div class="header" :class="{ 'activeHome': isIndexPage }">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
                    <img :src="require('@/assets/images/header_logo.png')" alt="">
                </div>
                <div class="navBar" :class="{ 'open': sideStatus }">
                    <ul>
                        <li><router-link @click="inActive" class="default_link" to="/">{{ $t('layout.header.home')}}</router-link></li>
                        <li>
                            <v-locale-provider rtl>
                                <v-menu :offset-y="false">
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props">
                                            <div class="d-flex align-items-center drop-label">
                                                <span class="M_end_5 default_link drop-label">{{ $t('layout.header.howWe')
                                                }}</span>
                                                <span class="mt-1"><font-awesome-icon
                                                        :icon="['fas', 'angle-down']" /></span>
                                            </div>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item @click="routeRef(item.ref)" v-for="(item, i) in items" :key="i">
                                            <v-list-item-title class="dropList">
                                                <router-link @click="inActive" class="default_link" to="/about">{{ item.title }}</router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-locale-provider>
                        </li>
                        <li>
                            <router-link @click="inActive" class="default_link" to="/product">{{ $t('layout.header.products') }}</router-link>
                        </li>
                        <li>
                            <router-link @click="inActive" class="default_link" to="/ChairmanSpeech">{{ $t('layout.header.wordOfBoard') }}</router-link>
                        </li>
                        <li>
                            <router-link @click="inActive" class="default_link" to="/news">{{ $t('layout.header.news')}}</router-link>
                        </li>
                        <li class="dropList">
                            <v-locale-provider rtl>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props">
                                            <div class="d-flex align-items-center drop-label">
                                                <span class="M_end_5 default_link drop-label">{{ $t('layout.header.Support')}}</span>
                                                <span class="mt-1"><font-awesome-icon
                                                        :icon="['fas', 'angle-down']" /></span>
                                            </div>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title class="dropList">
                                                <router-link @click="inActive" class="default_link"
                                                    to="/commonQuestions">{{ $t('layout.header.fqs')}}</router-link>
                                            </v-list-item-title>
                                            <v-list-item-title class="dropList">
                                                <router-link @click="inActive" class="default_link"
                                                    to="/downloadSource">{{ $t('layout.header.DownloadFiles')}}</router-link>
                                            </v-list-item-title>
                                            <v-list-item-title class="dropList">
                                                <router-link @click="inActive" class="default_link" to="/B2B">B2B</router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-locale-provider>
                        </li>
                        <li>
                            <router-link @click="inActive" class="default_link" to="/contact">{{ $t('layout.header.Contact') }}</router-link>
                        </li>
                        <li>
                            <router-link @click="inActive" class="default_link" to="/humanResources">{{ $t('layout.header.HumanResources') }}</router-link>
                        </li>
                        <li>
                            <div class="user_option">
                                <v-locale-provider rtl>
                                    <div class="text-center" @click="showField">
                                        <v-btn size="x-small" variant="text" icon="$vuetify"
                                            :class="{ 'text-white': isIndexPage }" @click="overlay = !overlay">
                                            <font-awesome-icon class="font17" :icon="['fas', 'magnifying-glass']" />
                                        </v-btn>

                                        <v-overlay v-model="overlay" class="modalSearch">
                                            <Transition name="slide-fade">
                                                <div class="modal_content" v-if="showModalSearch">
                                                    <form @submit.prevent="searchRoute">
                                                        <div class="position-relative">
                                                            <input type="text" class="field_input_search"
                                                                @keyup="searchData" v-model="query"
                                                                :placeholder="$t('layout.header.searchForProduct')">
                                                            <button
                                                                class="btn float_btn text-white font19"><font-awesome-icon
                                                                    :icon="['fas', 'caret-left']" /></button>
                                                            <button type="button" class="btn float_icon text-white font15"
                                                                @click="closeModal"><font-awesome-icon
                                                                    :icon="['fas', 'x']" /></button>
                                                        </div>
                                                        <ul v-if="query" class="autoCompleteList">
                                                            <li v-for="i in searchDataArray" :key="i">
                                                                <router-link @click="clear"
                                                                    :to="'/productDetails/' + i.id">{{ i.name
                                                                    }}</router-link>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                </div>
                                            </Transition>
                                        </v-overlay>
                                    </div>
                                </v-locale-provider>
                                <v-btn icon="$vuetify" color="#1E368C" class="width30 height30" size="x-small">
                                    <router-link to="" class="text-white"><font-awesome-icon class="font10"
                                            :icon="['fas', 'user']" /></router-link>
                                </v-btn>
                                <v-btn icon="$vuetify" color="#1E368C" class="width30 height30" size="x-small">
                                    <router-link to="" class="text-white"><font-awesome-icon class="font10"
                                            :icon="['fas', 'cart-shopping']" /></router-link>
                                </v-btn>
                            </div>
                        </li>
                    </ul>
                </div>
                <span class="nav-layer" :class="{ 'open': sideStatus }" @click="openSideOption"></span>
                <div class="d-flex align-items-center gap10">
                    <v-locale-provider rtl>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" :class="{ 'text-white': isIndexPage }" v-bind="props">
                                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                                    <span class="M_end_7 fontBold font11">{{ $t('layout.header.lang') }}</span>
                                    <font-awesome-icon :icon="['fas', 'earth-americas']" />
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-if="$i18n.locale == 'en'">
                                    <v-list-item-title>
                                        <button class="btn p-0 fontBold font11" @click="switchLang">العربيه</button>
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item v-else-if="$i18n.locale == 'ar'">
                                    <v-list-item-title>
                                        <button class="btn p-0 fontBold font11" @click="switchLang">English</button>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-locale-provider>
                    <div class="bars d-lg-none d-block mb-2 ml-3 mr-3" :class="{ 'x-bars': sideStatus }"
                        @click="openSideOption">
                        <span class="bar-1"></span>
                        <span class="bar-2"></span>
                        <span class="bar-3"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data: () => ({
        // items: [
        //     { title: this.$t('layout.header.howWe'), ref: 'howWe' },
        // ],
        overlay: false,
        loaded: false,
        loading: false,
        showModalSearch: false,
        overlayModal: '',
        dialog: false,
        query: null,
        sideStatus: null,
        searchDataArray: [],
        falseList: false,
    }),

    methods: {
        // switch lang     
        switchLang() {
            let lang = 'ar';
            if (this.$i18n.locale == 'ar') {
                lang = 'en';
                this.arabic = false;
            }

            if (localStorage.getItem('locale')) {
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale', lang);
            this.arabic = true;

            location.reload()
        },
        routeRef(targetRef) {
            this.Reffre = targetRef
            console.log(this.$route);
            if (this.$route === '/about') {
                document.getElementById(`${targetRef}`).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                });
            } else {
                setTimeout(() => {
                    document.getElementById(`${targetRef}`).scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest',
                    });
                }, 400);
            }

        },
        openSideOption() {
            this.sideStatus = !this.sideStatus
        },
        inActive() {
            this.sideStatus = false
        },
        async searchData() {
            await axios.get(`search?name=${this.query}`)
                .then((resData) => {
                    this.searchDataArray = resData.data.data
                    if (this.searchDataArray) {
                        this.falseList = true
                    } else {
                        this.falseList = false
                    }
                })
        },
        searchRoute() {
            if (this.query) {
                this.$router.push({ name: 'searchView', params: { key: `${this.query}` } })
                this.query = ''
                this.closeModal()
            }
        },
        clear() {
            this.query = ''
            this.closeModal()
        },
        loadingSearch() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
        showField() {
            this.showModalSearch = true
        },
        closeModal() {
            this.overlay = false
            this.showModalSearch = false
        }

    },

    computed: {
        items() {
            return [
                { title: this.$t('layout.header.howWe'), ref: 'howWe' },
                { title: this.$t('layout.header.ourMassage'), ref: 'ourMassage' },
                { title: this.$t('layout.header.ourValues'), ref: 'ourValues' },
                { title: this.$t('layout.header.ourIdentity'), ref: 'ourIdentity' },
                { title: this.$t('layout.header.ourHistory'), ref: 'ourHistory' },
                { title: this.$t('layout.header.ourTarget'), ref: 'ourTarget' },
                { title: this.$t('layout.header.economicActivity'), ref: 'economicActivity' },
                { title: this.$t('layout.header.legalAffairs'), ref: 'legalAffairs' },
            ]
        },
        isIndexPage() {
            return this.$route.path === '/';
        }
    },
}
</script> 


<style lang="scss">
.v-list-item--density-default.v-list-item--one-line {
    min-height: unset !important;
}

.v-list-item-title {
    a {
        color: #000 !important;
        font-size: 13px;
        font-weight: 600;
    }
}

.modalSearch {
    .v-overlay__content {
        left: 0;
        right: 0;
        margin: auto;
        top: 130px;
        display: flex;
        justify-content: center;
        height: fit-content;
        width: 50%;

        .modal_content {
            width: 100%;

            .field_input_search {
                background-color: rgba(0, 0, 0, .70) !important;
                width: 100%;
                height: 55px;
                color: #fff;
                padding: 10px;

                &:focus {
                    outline: none;
                }

                &::placeholder {
                    color: #fff;
                }
            }

            .float_btn {
                left: 8%;
            }

            .float_icon {
                position: absolute;
                top: 0;
                left: 4%;
                height: 100%;
                background-color: var(--main);
                color: #fff;
                border-radius: 4px 0 0 4px;
            }
        }
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(170px);
    opacity: 0;
}
</style>