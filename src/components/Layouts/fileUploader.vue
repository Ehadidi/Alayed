<template>
    <div :class="width">
        <div class="file-uploader">
            <span class="fontBold txt_start d-block mb-2">{{ label }}</span>
            <div class="form__label">
                <input id="file-upload" class="uploadCv" :name="name" :ref="refre" type="file" hidden accept="application/*"
                    @change="fileUploder" />
                <label for="file-upload" class="default_input txt_start d-flex align-items-center mainDark">
                    {{ placeholder }}
                </label>
                <span class="form-icon">
                    <slot name="img"></slot>
                </span>
            </div>
            <div class="holder-area" :ref="refreArea" v-if="showmark">
                {{ fileName }}
                <button type="button" @click="removeFile">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['width', 'label', 'placeholder' , 'name' , 'refre'],
    data() {
        return {
            fileName: null,
            fileObject: null,
            showmark: false,
        }
    },
    methods: {
        fileUploder(e) {
            let selectedFiles = e.target.files;
            if (e.target.files.length > 0) {
                this.showmark = true
            }
            this.fileName = selectedFiles[0].name
            this.fileObject = selectedFiles
        },
        removeFile() {
            this.fileName = null
            this.showmark = false
            this.$refs.uploadCv.value = ""
        },
    }
}
</script>

<style lang="scss" scoped>
.holder-area {
    width: fit-content;
    padding: 15px;
    background-color: #1e368c;
    color: #fff;
    border-radius: 5px;
    position: relative;
    button{
        position: absolute;
        top: -1px;
        left: -5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        padding: 0;
        background-color: crimson;
        color: #fff;
    }
}
</style>