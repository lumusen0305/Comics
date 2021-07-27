<template>
          <div class="context">
            <div class="comic_introduce">
                <a-row > 
                  <a-col :span="5" :offset="1">
                    <img class="img"
                        alt="example"
                        :src="this.$store.state.comic.image"
                    />                        

                    </a-col>
                    <a-col :span="16" :offset="2">
                        <nav class="comic_intro_title">
                        {{this.$store.state.comic.name}}
                      </nav>
                        <!-- <a-rate class="comic_star" v-model="item.star"  disabled/> -->
                        <nav class="comic_context">
                          突然来到无人岛。逼近的神秘生物。100天的生存逃脱剧情！！ 什幺都没有，也失去了记忆。 注意到时，已经在不可思议的无人岛。 从未见过的生物。神秘的文明遗迹。 在个日 记里留下了不可思议的100天。
                        </nav>
                        <nav class="comic_btn">
                                <a-button type="primary" icon="read" v-on:click="getimg()">
                                  閱讀
                                </a-button>
                                <a-button icon="star" class="test" style="margin-left: 4vh;">
                                  關注
                                </a-button>
                        </nav>
                    </a-col>
                </a-row>
            </div>
            <a-card class="comic_list">
              <div>
                <div class="comic_item" v-for="item in chapter" v-on:click="goToComic(item)">
                      <a-row > 
                        <a-col :span="5" :offset="1">
                          <img class="chapter_img"
                            alt="example"
                            :src="item.image"
                          />
                          </a-col>
                        <a-col :span="17" :offset="1">
                          <nav class="comic_title">
                            {{ item.chapter }}
                          </nav>
                        </a-col>
                      </a-row>
                      
                </div>  
                <div class="load"  size="large" v-if="spinning == true"><a-spin :spinning="spinning" tip="Loading..."></a-spin></div>
              </div>  
            </a-card>
          </div>
</template>

<script>
import axios from "axios";
export default {
    name: "comic",
    data() {
    return {
        chapter:[],
        spinning: false,
        flag:true,
      };
    },
    mounted () {
      window.addEventListener('scroll', this.handleScrollToBottom, true);  
    },
    methods:{
      handleScrollToBottom(){
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
             //滚动条到底部的条件
        if(scrollTop+windowHeight==scrollHeight){
        this.getComicMoreList();
        }   
      },
      getimg(){
        console.log(this.$store.state.comic.image)
      },
      getComicMoreList(){
        if(this.flag){
          this.spinning=true;
          axios({
            method: 'post',
            baseURL: 'http://127.0.0.1:5000',
            url: '/comic/getComicMoreList',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
            'comic_url': this.$store.state.comic.url,
            },
            }).then((response) => {
              console.log("==========12313213=========")
                response.data.data.forEach(item => {
                    this.chapter.push(
                        {
                            chapter : item.chapter,
                            url : item.url,
                            image:item.image
                        })
                });
              this.spinning=false;
              this.flag=false;
            })
            .catch((err) => {
                console.log(err)
            }) 
        } 
      },
      getChapter(){
        this.spinning=true;
        axios({
          method: 'post',
          baseURL: 'http://127.0.0.1:5000',
          url: '/comic/getComicList',
          headers: {
              'Content-Type': 'application/json',
          },
          data: {
          'comic_url': this.$store.state.comic.url,
          },
          }).then((response) => {
            // console.log(response.data)
              response.data.data.forEach(item => {
                  this.chapter.push(
                      {
                          chapter : item.chapter,
                          url : item.url,
                          image:item.image
                      })
              });
            this.spinning=false;
          })
          .catch((err) => {
              console.log(err)
          })  
      },

    },
    created() {
    console.log("================")
    this.chapter=[];
    this.getChapter();
   }
}
</script>

<style>

.comic_btn{
        margin-top: 3vh;
}
.comic_btn>button{
    width:13vh;
    height:5vh;
    font-size:2vh;
    border-radius:2.5vh;
}
.comic_introduce{
    margin-top:20vh;
    /* background-color: brown; */
    height: 35vh;
}
.img{
    width: 120%;

}
.comic_list{
    margin-top: 3vh;
}
</style>