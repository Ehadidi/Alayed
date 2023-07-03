<template>
  <section class="P_top_60">
    <div class="container">
      <div class="title--sec">
        <h1 class="fontBold font25 mainColor">منتجاتنا</h1>
        <p class="mb-0 font12 fontBold mb-5 P_top_40 P_bottom_50 w-50">
          هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن
          استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر
          هذا.
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="item_grid" v-for="item in products" :key="item">
        <div class="categ_item">
          <span class="fontBold mainColor font15">{{ item.title }}</span>
          <div class="d-flex flex-column align-items-center gap15">
            <router-link to="/productsGroup">
              <span class="icon_round">
                <img :src="item.img1" alt="product image">
              </span>
            </router-link>
            <router-link to="/productsGroup">
              <img class="sub--img" :src="item.img2" alt="product image">
            </router-link>
            <ul class="sections-list">
              <li>
                <router-link class="default_link" to="/productsGroup">القسم الفرعي</router-link>
              </li>
              <li>
                <router-link class="default_link" to="/productsGroup">القسم الفرعي</router-link>
              </li>
              <li>
                <router-link class="default_link" to="/productsGroup">القسم الفرعي</router-link>
              </li>
              <li>
                <router-link class="default_link" to="/productsGroup">القسم الفرعي</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      products: [
        { img1: require('@/assets/images/Group1.png'), img2: require('@/assets/images/Ellipse1.png'), title: 'الماء و الحدائق' },
        { img1: require('@/assets/images/Group2.png'), img2: require('@/assets/images/Ellipse2.png'), title: 'الدفع' },
        { img1: require('@/assets/images/Group3.png'), img2: require('@/assets/images/Ellipse3.png'), title: 'الشفط' },
        { img1: require('@/assets/images/Group4.png'), img2: require('@/assets/images/Ellipse4.png'), title: 'التمديدات' },
        { img1: require('@/assets/images/Group5.png'), img2: require('@/assets/images/Ellipse5.png'), title: 'الغاز' },
        { img1: require('@/assets/images/Group6.png'), img2: require('@/assets/images/Ellipse6.png'), title: 'الهواء' },
        { img1: require('@/assets/images/Group7.png'), img2: require('@/assets/images/Ellipse7.png'), title: 'الحريق' },
        { img1: require('@/assets/images/Group8.png'), img2: require('@/assets/images/Ellipse8.png'), title: 'النيوماتيك' },
        { img1: require('@/assets/images/Group9.png'), img2: require('@/assets/images/Ellipse9.png'), title: 'الرش المحوري' },
        { img1: require('@/assets/images/Group10.png'), img2: require('@/assets/images/Ellipse10.png'), title: 'رش المبيدات' },
        { img1: require('@/assets/images/Group11.png'), img2: require('@/assets/images/Ellipse11.png'), title: 'الادوات و الاكسسوارات' },
        { img1: require('@/assets/images/Group4.png'), img2: require('@/assets/images/Ellipse12.png'), title: 'منتجات خاصه' },
      ]
    }
  },
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
    width: 150px;
    height: 150px;
    background-color: #1E368C;
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

  // &:hover {
  // transform: translateY(-5px);
  // .icon_round {
  //   box-shadow: 0px 5px 10px 0px rgba(30, 54, 140, .69);
  // }
  // }

}</style>