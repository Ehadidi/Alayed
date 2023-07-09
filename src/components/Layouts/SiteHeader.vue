<template>
    <div class="header" :class="{ 'activeHome': isIndexPage }">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
                    <img :src="require('@/assets/images/header_logo.png')" alt="">
                </div>
                <div class="navBar">
                    <ul>
                        <li><router-link class="default_link" to="/">الرئيسية</router-link></li>
                        <li>
                            <v-locale-provider rtl>
                                <v-menu open-on-hover :offset-y="false">
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props">
                                            <div class="d-flex align-items-center drop-label">
                                                <span class="M_end_5 default_link drop-label">من نحن</span>
                                                <span class="mt-1"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
                                            </div>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item v-for="(item, i) in items" :key="i">
                                            <v-list-item-title class="dropList">
                                                <router-link class="default_link" to="/about">{{ item.title }}</router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-locale-provider>
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
                        <li class="dropList">
                            <v-locale-provider rtl>
                                <v-menu open-on-hover>
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props">
                                            <div class="d-flex align-items-center drop-label">
                                                <span class="M_end_5 default_link drop-label">الدعم</span>
                                                <span class="mt-1"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
                                            </div>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title class="dropList">
                                                <router-link class="default_link" to="/commonQuestions">الاسئلة الشائعه</router-link>
                                            </v-list-item-title>
                                            <v-list-item-title class="dropList">
                                                <router-link class="default_link" to="/downloadSource">ملفات للتحميل</router-link>
                                            </v-list-item-title>
                                            <v-list-item-title class="dropList">
                                                <router-link class="default_link" to="/B2B">B2B</router-link>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-locale-provider>
                        </li>
                        <li>
                            <router-link class="default_link" to="/contact">تواصل معنا</router-link>
                        </li>
                        <li>
                            <router-link class="default_link" to="/humanResources">الموارد البشرية</router-link>
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
                                                    <form action="" method="post">
                                                        <div class="position-relative">
                                                            <input type="text" class="field_input_search"
                                                                @click:append-inner="loadingSearch"
                                                                placeholder="البحث عن منتج">
                                                            <button
                                                                class="btn float_btn text-white font19"><font-awesome-icon
                                                                    :icon="['fas', 'caret-left']" /></button>
                                                            <button type="button" class="btn float_icon text-white font15"
                                                                @click="closeModal"><font-awesome-icon
                                                                    :icon="['fas', 'x']" /></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Transition>
                                        </v-overlay>
                                    </div>
                                </v-locale-provider>
                                <v-btn icon="$vuetify" color="#1E368C" class="width30 height30" size="x-small">
                                    <router-link to="" class="text-white"><font-awesome-icon class="font10" :icon="['fas', 'user']" /></router-link>
                                </v-btn>
                                <v-btn icon="$vuetify" color="#1E368C" class="width30 height30" size="x-small">
                                    <router-link to="" class="text-white"><font-awesome-icon class="font10" :icon="['fas', 'cart-shopping']" /></router-link>
                                </v-btn>
                            </div>
                        </li>
                    </ul>
                </div>
                <v-locale-provider rtl>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" :class="{ 'text-white': isIndexPage }" v-bind="props">
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                                <span class="M_end_7 fontBold font11">العربيه</span>
                                <font-awesome-icon :icon="['fas', 'earth-americas']" />
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>
                                    <button class="btn p-0 fontBold font11">English</button>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-locale-provider>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'من نحن ' },
            { title: 'رسالتنا' },
            { title: 'قيمنا ' },
            { title: 'هوايتنا' },
            { title: 'تاريخنا' },
            { title: 'اهدافنا' },
            { title: 'النشاط الاقتصادي' },
            { title: 'الشؤون القانونيه' },
        ],
        overlay: false,
        loaded: false,
        loading: false,
        showModalSearch: false,
        overlayModal: '',
        dialog: false,
        // isHomePage: null
    }),

    methods: {
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