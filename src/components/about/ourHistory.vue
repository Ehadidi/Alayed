<template>
    <section class="P_top_50 P_bottom_50">
        <div class="container">
            <div class="title-sec">
                <h4>تاريخنا</h4>
                <div v-if="aboutData">
                    <p v-html="aboutData.history"></p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-4 col-md-6 col-12 mb-2">
                    <h6 class="txt_start fontBold">البداية</h6>
                    <div v-if="aboutData">
                        <p v-html="aboutData.beginning"></p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-2">
                    <ul class="map-list">
                        <li class="left-list-item">
                            <span class="date-hint">1992</span>
                        </li>
                        <li class="right-list-item">
                            <span class="date-hint">1996</span>
                        </li>
                        <li class="photo-hint">
                            <div class="img-box">
                                <a data-fancybox="gallery" :href='require("@/assets/images/siteImg.png")'>
                                    <span class="show--img"><font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" /></span>
                                    <img :src='require("@/assets/images/siteImg.png")' alt="site image">
                                </a>
                            </div>
                        </li>
                        <li class="left-list-item">
                            <span class="date-hint">2004</span>
                        </li>
                        <li class="photo-hint">
                            <div class="img-box">
                                <a data-fancybox="gallery" :href='require("@/assets/images/siteImg.png")'>
                                    <span class="show--img"><font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" /></span>
                                    <img :src='require("@/assets/images/siteImg.png")' alt="site image">
                                </a>
                            </div>
                        </li>
                        <li class="right-list-item">
                            <span class="date-hint">2008</span>
                        </li>
                        <li class="left-list-item">
                            <span class="date-hint">2016</span>
                        </li>
                        <li class="photo-hint">
                            <div class="img-box">
                                <a data-fancybox="gallery" :href='require("@/assets/images/siteImg.png")'>
                                    <span class="show--img"><font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" /></span>
                                    <img :src='require("@/assets/images/siteImg.png")' alt="site image">
                                </a>
                            </div>
                        </li>
                        <li class="right-list-item">
                            <span class="date-hint">2023</span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-2">
                    <h6 class="txt_start fontBold">الحاضر</h6>
                    <div v-if="aboutData">
                        <p v-html="aboutData.present"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props : ['aboutData']
}
</script>

<style lang="scss" scoped>
.title-sec {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
        font-weight: 600;
    }

    p {
        font-weight: 600;
        line-height: 35px;
    }
}

.txt-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        font-size: 10px;
        font-weight: 600;

        p {
            margin: 0;
            text-align: start;
            line-height: 30px;
        }
    }
}

.map-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        width: 3px;
        background-color: #1E368C;
        height: 100px;
        position: relative;

        .date-hint {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 70px;
            height: 30px;
            color: #fff;
            background-color: #1E368C;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            font-size: 18px;
            font-weight: 600;
        }

        &.left-list-item {
            .date-hint {
                right: 0;
            }
        }

        &.right-list-item {
            .date-hint {
                left: 0;
            }
        }
        &.photo-hint{
            height: 150px;
            .img-box{
                position: absolute;
                top: 0;
                right: -50px;
                left: 0;
                bottom: 0;
                margin: auto;
                width: 100px;
                height: 100px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 3px solid #1E368C;
                }
                a{
                    position: relative;
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    display: block;
                    .show--img{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-size: 18px;
                        transition: .5s all ease;
                        background-color: #1e368c5b;
                        visibility: hidden;
                        opacity: 0;
                    }
                    &:hover{
                        .show--img{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>