<template>
    <div class="text-center">
        <v-locale-provider :rtl="$i18n.locale === 'ar'">
            <form ref="sendForm" @submit.prevent="submitSendForm">
                <v-menu v-model="menu" :close-on-content-click="false" location="top center">
                    <template v-slot:activator="{ props }">
                        <div v-bind="props">
                            <slot name="btn"></slot>
                        </div>
                    </template>
                    <v-card min-width="400">
                        <button type="button" class="btn" @click="menu = false"><img class="width20" :src="require('@/assets/images/remove.png')" alt=""></button>
                            <div class="p-4">
                                <slot></slot>
                            </div>
                    </v-card>
                </v-menu>
            </form>
        </v-locale-provider>
    </div>
</template>


<script>
export default {
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
    }),
}
</script>