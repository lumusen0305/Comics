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
                        <a-col :span="5" :offset="1">
                          <img class="comic_img"
                            alt="example"
                            :src=" item.image"
                          />
                          </a-col>
                        <a-col :span="17" :offset="1">
                          <nav class="comic_title">
                            {{ item.name }}
                          </nav>
                            <a-rate class="comic_star" v-model="item.star"  disabled/>
                          <nav class="comic_context">
                            {{ item.update_time }}
                          </nav>
                        </a-col>
                      </a-row>
                      
                </div>  
                <div class="load"  size="large" v-if="spinning == true"><a-spin :spinning="spinning" tip="Loading..."></a-spin></div>
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
import axios from "axios";
export default {
name: "index",
  data() {
    return {
      value: 2,
      comics:[],
      page : 1,
      isBottom: false,
      spinning: false
    };
  },
  mounted () {
  window.addEventListener('scroll', this.handleScrollToBottom, true);  
  },
  methods: {
    handleScrollToBottom(){
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
           //滚动条到底部的条件
      if(scrollTop+windowHeight==scrollHeight){
      this.page=this.page+1;
      console.log(this.page)
      this.getComics();
      }   
    },
    getComics(){
    this.spinning=true;
      axios({
      method: 'post',
      baseURL: 'http://127.0.0.1:5000',
      url: '/comic/getComic',
      headers: {
          'Content-Type': 'application/json',
      },
      data: {
      'page': this.page,
      },
      }).then((response) => {
        // console.log(response.data)
          response.data.data.forEach(item => {
              this.comics.push(
                  {
                      name : item.name,
                      url : item.url,
                      image :item.image,
                      star:item.star,
                      update_time:item.update_time
                  })
              this.page+1;
          });
        this.spinning=false;
      })
      .catch((err) => {
          console.log(err)
      })  
    }
  },
  created() {
    this.getComics();
    this.page=1;
   }
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
