<template>
    <section class="how-we-are">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 col-12">
                  <div class="aboutTxt">
                      <h5>هويتنا</h5>
                      <p>
                          هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخرهذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر هذا. هذا النص يمكن استبداله بنص اخر هذا النص يمكن استبداله بنص اخر.
                      </p>
                  </div>
              </div>
              <div class="col-lg-6 d-lg-block d-none">
                  <img :src="require('@/assets/images/alayed-logo.png')" alt="">
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
      .how-we-are{
          background: url('@/assets/images/1.png') no-repeat center;
          background-size: cover;
          img{
            width: 350px;
            height: 184px;
          }
          .aboutTxt{
              padding: 40px 0;
              h5{
                  font-size: 20px;
                  color: #fff;
                  margin-bottom: 18px;
                  text-align: start;
                  font-weight: 600;
              }
              p{
                  color: #fff;
                  line-height: 35px;
                  margin: 0;
                  text-align: start;
                  padding: 0;
              }
          }
      }
  </style>