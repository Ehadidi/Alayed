<template>
    <div class="item_grid" v-for="item in products" :key="item">
        <router-link to="/product">
            <div class="categ_item">
                <span class="fontBold mainColor font15">{{ item.name }}</span>
                <span class="icon_round text-white">
                    <img :src="item.item" alt="product image">
                    <!-- {{ item.name }} -->
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['products'],
}
</script>

<style lang="scss" scoped>
.categ_item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    width: 150px;
    transition: .6s all ease;

    .icon_round {
        transition: .6s all ease;
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 150px;
        height: 100%;
        // box-shadow: 0 0 5px #eee;
    }

    &:hover {
        transform: translateY(-5px);

        .icon_round {
            box-shadow: 0px 5px 10px 0px rgba(30, 54, 140, .69);
        }
    }

    .icon_round {
        transition: .6s all ease;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            box-shadow: 0px 5px 10px 0px rgba(30, 54, 140, .69);
        }

        img {
            width: 60%;
        }
    }

}</style>