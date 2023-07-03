<template>
    <section class="our--massage">
        <div class="d-flex flex-column align-items-center gap20 w-75 M_auto">
          <h4 class="mainColor">اهدافنا</h4>
          <div class="row mb-5">
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt">
                    هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. 
                </p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt">
                    هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. 
                </p>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-2">
                <p class="our--massage--txt">
                    هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. 
                </p>
            </div>
          </div>
          <div class="quoted-txt">
                <p>
                    “ هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا.  “
                </p>
            </div>
            <v-img
            class="siteImg"
                cover
                :src="require('@/assets/images/siteImg2.png')"
            ></v-img>
            <!-- <img class="siteImg" :src="require('@/assets/images/siteImg2.png')" alt="site image"> -->
        </div>
    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
      .our--massage{
          background-color: #F5F5F5;
          padding: 100px 40px;
          h4{
              font-weight: 600;
          }
          .our--massage--txt{
              font-weight: 600;
              line-height: 30px;
              margin: 0;
              padding: 0;
          }
      }
    .siteImg{
        aspect-ratio: 16 / 4;
        width: 70%;
    }
  </style>