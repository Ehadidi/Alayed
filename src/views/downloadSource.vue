<template>
    <section>
        <div class="bg-title">
            <div class="container h-100">
                <div class="flex-end-content">
                    <h1 class="font25 fontBold">ملفات للتحميل</h1>
                    <p>هذا النص هو مثال لنص يمكن ان يستبدل</p>
                </div>
            </div>
        </div>
    </section>
    <div class="container P_top_40 P_bottom_40">
        <v-expansion-panels variant="accordion">
            <v-expansion-panel v-for="expand in expands" :key="expand" class="mb-3">
                <v-expansion-panel-title class="font12 mainColor fontBold">{{ expand }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <div class="d-flex align-items-start gap30 position-relative">
                        <v-expansion-panels variant="accordion">
                            <v-expansion-panel v-for="expand in expands" :key="expand" class="mb-3">
                                <v-expansion-panel-title class="font12 mainColor fontBold">{{ expand }}</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div class="d-flex align-items-start gap30 position-relative">
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expands: ['المنتجات', 'معلومات عامة', 'ملفات التواصل']
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-title {
    background: url('@/assets/images/bgtitle10.png') no-repeat center;
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
</style>