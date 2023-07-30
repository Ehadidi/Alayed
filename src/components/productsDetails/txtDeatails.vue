<template>
    <div class="txt-sec">
        <div class="container">
            <h5 class="fontBold mainColor">
                <slot name="title"></slot>
            </h5>
            <div class="d-flex align-items-start gap6 mb-3 mt-3">
                <span
                    class="width20 height20 text-white round bgMain font12 d-flex align-items-center justify-content-center">
                    <font-awesome-icon :icon="['fas', 'check']" />
                </span>
                <p class="mb-0 txt_start">
                    <slot name="txt"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.txt-sec {
    background-color: #fff;
    margin: 15px 0;
    padding: 40px 0;
}

h5 {
    position: relative;
    width: fit-content;
    text-align: start;
    margin-bottom: 40px;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 25%;
        height: 3px;
        background-color: #ccc;
        border-radius: 5px;
    }
}

body.ltr {
    h5 {
        &::after {
            content: "";
            right: unset;
            left: 0;
        }
    }
}
</style>