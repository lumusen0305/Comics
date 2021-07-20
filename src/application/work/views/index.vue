<template>
<div class="background">
          <div class="show_image" >
            <a-carousel autoplay effect="fade">
              <div>
                  <img class="preview" src="../assets/preview_1.jpg">
              </div>

              <div>
                  <img class="preview" src="../assets/preview_2.jpg">
              </div>

              <div>
                  <img class="preview" src="../assets/preview_3.png">
              </div>

              <div>
                  <img class="preview" src="../assets/preview_4.png">
              </div>
            </a-carousel>
          </div>
        </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>