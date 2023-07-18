<template>
    <div :class="width">
        <label class="fontBold txt_start d-block mb-2">{{ label }}</label>
        <div class="form__label">
            <textarea v-if="textarea == true" class="default_input" :name="name" :placeholder="placeholder"></textarea>
            <input v-else class="default_input" :type="type" :placeholder="placeholder" :v-model="vmodal" :name="name">
            <slot name="inputFile"></slot>
            <span class="form-icon" :class="{ 'areaIcon': textarea == true }">
                <slot name="img"></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'placeholder', 'icon', 'width', 'type', 'textarea' , 'vmodal' , 'name'],
}
</script>

<style>
</style>