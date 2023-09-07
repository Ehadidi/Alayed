<template>
    <div>
        <section>
            <div class="bg-title">
                <div class="container h-100">
                    <div class="flex-end-content">
                        <h1 class="font25 fontBold">{{ $t('layout.FilesToDownload') }}</h1>
                        <!-- <p>هذا النص هو مثال لنص يمكن ان يستبدل</p> -->
                    </div>
                </div>
            </div>
        </section>
        <div class="container P_top_40 P_bottom_40">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel class="mb-3">
                    <v-expansion-panel-title class="font12 mainColor fontBold">{{ $t('layout.products')
                    }}</v-expansion-panel-title>
                    <v-expansion-panel-text class="nastedExpand">
                        <div class="d-flex align-items-start gap30 position-relative">
                            <v-expansion-panels variant="accordion">
                                <v-expansion-panel v-for="itemExpand in downloadFiles" :key="itemExpand" class="mb-3">
                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span class="M_end_15">{{
                                        itemExpand.category_name }}</span> <font-awesome-icon
                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="d-flex align-items-start gap30 position-relative">
                                            <v-expansion-panels class="nastedExpand" variant="accordion">
                                                <v-expansion-panel v-for="itemdownloadFiles in itemExpand.products"
                                                    :key="itemdownloadFiles" class="mb-3">
                                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span
                                                            class="M_end_15">{{ itemdownloadFiles.product_name }}</span>
                                                        <font-awesome-icon
                                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                                    <v-expansion-panel-text>
                                                        <div
                                                            class="d-flex flex-column align-items-start gap5 position-relative">
                                                            <span v-for="file in itemdownloadFiles.files" :key="file">
                                                                <a class="btn p-0 font12 default_link" :href="file"
                                                                    download>
                                                                    <span class="M_end_15">Download PDF</span>
                                                                    <font-awesome-icon :icon="['fas', 'file-pdf']" />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </v-expansion-panel-text>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-3">
                    <v-expansion-panel-title class="font12 mainColor fontBold">{{ $t('layout.generalInformation')
                    }}</v-expansion-panel-title>
                    <v-expansion-panel-text class="nastedExpand">
                        <div class="d-flex align-items-start gap30 position-relative">
                            <v-expansion-panels variant="accordion">
                                <v-expansion-panel v-for="itemExpand in profileFile" :key="itemExpand" class="mb-3">
                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span class="M_end_15">{{
                                        itemExpand.category_name }}</span> <font-awesome-icon
                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="d-flex align-items-start gap30 position-relative">
                                            <v-expansion-panels class="nastedExpand" variant="accordion">
                                                <v-expansion-panel v-for="itemdownloadFiles in itemExpand.products"
                                                    :key="itemdownloadFiles" class="mb-3">
                                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span
                                                            class="M_end_15">{{ itemdownloadFiles.product_name }}</span>
                                                        <font-awesome-icon
                                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                                    <v-expansion-panel-text>
                                                        <div
                                                            class="d-flex flex-column align-items-start gap5 position-relative">
                                                            <span v-for="file in itemdownloadFiles.files" :key="file">
                                                                <a class="btn p-0 font12 default_link" :href="file"
                                                                    download>
                                                                    <span class="M_end_15">Download PDF</span>
                                                                    <font-awesome-icon :icon="['fas', 'file-pdf']" />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </v-expansion-panel-text>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-3">
                    <v-expansion-panel-title class="font12 mainColor fontBold">{{ $t('layout.communicationFiles')
                    }}</v-expansion-panel-title>
                    <v-expansion-panel-text class="nastedExpand">
                        <div class="d-flex align-items-start gap30 position-relative">
                            <v-expansion-panels variant="accordion">
                                <v-expansion-panel v-for="itemExpand in communicationFile" :key="itemExpand" class="mb-3">
                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span class="M_end_15">{{
                                        itemExpand.category_name }}</span> <font-awesome-icon
                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="d-flex align-items-start gap30 position-relative">
                                            <v-expansion-panels class="nastedExpand" variant="accordion">
                                                <v-expansion-panel v-for="itemdownloadFiles in itemExpand.products"
                                                    :key="itemdownloadFiles" class="mb-3">
                                                    <v-expansion-panel-title class="font12 mainColor fontBold"><span
                                                            class="M_end_15">{{ itemdownloadFiles.product_name }}</span>
                                                        <font-awesome-icon
                                                            :icon="['fas', 'angle-double-down']" /></v-expansion-panel-title>
                                                    <v-expansion-panel-text>
                                                        <div
                                                            class="d-flex flex-column align-items-start gap5 position-relative">
                                                            <span v-for="file in itemdownloadFiles.files" :key="file">
                                                                <a class="btn p-0 font12 default_link" :href="file"
                                                                    download>
                                                                    <span class="M_end_15">Download PDF</span>
                                                                    <font-awesome-icon :icon="['fas', 'file-pdf']" />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </v-expansion-panel-text>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            expands: [],
            downloadFiles: [],
            profileFile: [],
            communicationFile: []
        }
    },
    methods: {
        async get_downloads() {
            await axios.get('product/files')
                .then((res) => {
                    this.expands = res.data.data
                    this.downloadFiles = res.data.data.download_files
                    this.profileFile = res.data.data.profile_file
                    this.communicationFile = res.data.data.communication_file
                    console.log(this.downloadFiles[0].products);
                })
        }
    },
    mounted() {
        this.get_downloads()
    }
}
</script>

<style lang="scss" scoped>.bg-title {
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
}</style>