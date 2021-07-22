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
          <div class="context">
            <nav class="contex_title">
              熱門漫畫
            </nav>
            <a-card >
              <div>
                <div class="comic_item" v-for="item in comics">
                      <a-row >
                        <a-col :span="5">
                          <img class="comic_img"
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                          />
                          </a-col>
                        <a-col :span="17" :offset="2">
                          <nav class="comic_title">
                            {{ item.title }}
                          </nav>
                            <a-rate class="comic_star" v-model="value"  disabled/>
                          <nav class="comic_context">
                            {{ item.context }}
                          </nav>
                        </a-col>
                      </a-row>
                </div>  
              </div>  
            </a-card>
          </div>
          <div class="bottom_introduce">
            <div class="bottom_context">
              <a-row>
                  <a-col :span="5" class="bottom_title">
                    <nav>說明</nav>
                    <nav>
                      <a class="bottom_item">說明中心</a>
                    </nav>
                    <nav>
                      <a class="bottom_item">說明論壇 </a>
                    </nav>
                    <nav>
                      <a class="bottom_item">影片教學 </a>
                    </nav>
                  </a-col>
                  <a-col :span="5" class="bottom_title">
                    <nav>社群</nav>
                    <nav>
                      <a class="bottom_item">RHeart Discord</a>
                    </nav>
                  </a-col>
                  <a-col :span="5" class="bottom_title">
                    <nav>開發者</nav>
                    <nav>
                      <a class="bottom_item" href="https://github.com/lumusen0305">Lumusen</a>
                    </nav>
                  </a-col>
                  <a-col :span="12" >
                  </a-col>
              </a-row>
            </div>
            <div style="  margin-left: 15%; margin-right: 15%;">
              <a-row>
                <a-col :span="2" class="bottom_bottom">
                  <a>服務條款</a>
                </a-col>
                <a-col :span="2" class="bottom_bottom">
                  <a>隱私權</a>
                </a-col>
                <a-col :span="2" class="bottom_bottom">
                  <a>內容政策</a>
                </a-col>
              </a-row>
            </div>
          </div>
          
        </div>

</template>

<script>
export default {
name: "index",
  data() {
    return {
      value: 2,
      comics:[
        {
        title: '打火英雄之霸道狗子愛上我',
        context: '死刑犯·风见多鹤在短短数年里杀害了89人。在她手下丧命的尸体，被她的追随者们尊崇为艺术，其本人的绰号亦是将ARTIST（艺术家）和MURDER（杀人狂）结合的词语『MURDIST』。'
        },
        {
        title: '農村英雄傳之二狗崛起',
        context: '死刑犯·风见多鹤在短短数年里杀害了89人。在她手下丧命的尸体，被她的追随者们尊崇为艺术，其本人的绰号亦是将ARTIST（艺术家）和MURDER（杀人狂）结合的词语『MURDIST』。'
        }
      ]
    };
  },}
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