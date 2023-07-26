<template>
  <section class="P_top_60">
    <div class="container">
      <div class="title--sec">
        <h1 class="fontBold font25 mainColor">{{ title }}</h1>
        <p class="mb-0 font12 fontBold mb-5 P_top_40 P_bottom_50 w-50">{{ txt }}</p>
      </div>
    </div>
    <div class="categories">
      <div class="categories-content">
        <div class="container">
          <div class="d-flex align-items-center justify-content-center gap20" v-if="loader">
            <div class="d-flex flex-column gap15" v-for="i in 4" :key="i">
              <Skeleton width="10rem" class="mb-2"></Skeleton>
              <Skeleton shape="circle" size="10rem" class="mr-2"></Skeleton>
            </div>
          </div>
          <div v-else class="row justify-content-center">
            <div class="col-lg-2 col-md-4 col-6" v-for="item in products" :key="item">
              <div class="categ_item">
                <span class="fontBold mainColor font15">{{ item.name }}</span>
                <div class="d-flex flex-column align-items-center gap15">
                  <span class="icon_round">
                    <img :src="item.image" alt="product image">
                  </span>
                  <img class="sub--img" :src="item.icon" alt="product image">
                  <ul class="sections-list">
                    <li v-for="subItem in item.subCategories" :key="subItem">
                      <router-link class="default_link" :to="{name: 'productsGroup', params : { id: subItem.id}}">{{ subItem.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

export default {
  components:{
    Skeleton
  },
  data() {
    return {
      products: [],
      loader: true,
      title: '',
      txt: '',
      // mainCategory : ''
    }
  },
  methods: {
    async get_mainCategory() {
      await axios.get('mainCategory')
        .then((res) => {
          this.products = res.data.data.category
          this.title = res.data.data.paragraph.title
          this.txt = res.data.data.paragraph.paragraph
          this.loader = false
        })
    }
  },
  mounted() {
    this.get_mainCategory()
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 80px 0;

  .item_grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    z-index: 1;

    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      right: 0;
      width: 100%;
      height: 50%;
      background-color: #1E368C;
      z-index: -1;
      height: calc(100% - 320px);
    }
  }
}

.categories {
  position: relative;
  background-color: #1E368C;
  padding-top: 5%;
  padding-bottom: 70px;
  margin-top: 15%;

  .categories-content {
    margin-top: -20%;
  }
}

.sections-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 15px 0 35px 0;

  li {
    position: relative;
    border-bottom: 1px solid #fff;
    padding: 15px;
  }

  a {
    color: #fff;
    font-size: 15px;
  }
}

.categ_item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  transition: .6s all ease;

  .sub--img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0px 5px 10px 0px rgba(30, 54, 140, .69);
  }

  a {
    transition: .6s all ease;

    &:hover {
      transform: translateY(-4px);
    }
  }

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

  // &:hover {
  // transform: translateY(-5px);
  // .icon_round {
  //   box-shadow: 0px 5px 10px 0px rgba(30, 54, 140, .69);
  // }
  // }

}
</style>