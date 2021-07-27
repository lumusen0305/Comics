<template>
  <div class="context">
    <div class="page_btn" id="right_btn"  v-on:click="addPage()">
        >
    </div>
    <div class="page_btn" id="left_btn" v-on:click="reducePage()">
        <
    </div>
    <nav class="contex_title" style="font-size:3.5vh;">
      {{this.$store.state.chapter.chapter}}
    </nav>
    <img
        class="img_context"
        alt="example"
        :src="this.comic_image[this.page].image"
    /> 
    <div class="bottom_page">
        <a-slider v-model="page" :min="1" :max="this.comic_image.length" />
        <a-statistic :value=this.page>
            <template #suffix>
                
            </template>
        </a-statistic>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "read",
    data() {
    return {
        page:1,
        max_page:"21",
        comic_image:[],
      };
    },
    watch:{
        // page:function(){
        //     console.log('page:'+this.page)
        // }
    },
    methods:{
        addPage(){
            if(this.page<this.comic_image.length){
                this.page=this.page+1;
                console.log(this.comic_image[0].image)
            }
        },
        reducePage(){
            if(this.page>1){
                this.page=this.page-1;
            }
        },
        keyDown(e) {
        // console.log(e.code)
        if(e.code=='ArrowRight'){
            this.addPage();
        }
        else if(e.code=='ArrowLeft'){
            this.reducePage();
        }
        },
        getImage(){
          axios({
            method: 'post',
            baseURL: 'http://127.0.0.1:5000',
            url: '/comic/getReadPage',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
            'read_page': this.$store.state.chapter.url,
            },
            }).then((response) => {
                // console.log(response.data.data)
                response.data.data.forEach(item => {
                    this.comic_image.push(
                        {
                            image:item.image
                        })
                });
            })
            .catch((err) => {
                console.log(err)
            }) 

        },
    },
    mounted() {
        document.body.onkeydown = this.keyDown
    },
　　activated () {
    this.comic_image=[];
    this.getImage();
　　}
}
</script>

<style>
#left_btn{
position: fixed;
  right: 0;
  top: 50%;
  left:10%;
  margin-top: -2.5em;
}
#right_btn{
  position: fixed;
  right: 0;
  top: 50%;
  right:10%;
  margin-top: -2.5em;
}
.page_btn{
    cursor: pointer;  /*鼠标悬停变小手*/
    color: white;
    font-size: 3vh;
    border-radius:50%;
    background-color: rgb(151, 151, 151);
    text-align: center;
    line-height: 6vh; /*设置line-height与父级元素的height相等*/
    height:6vh;
    width: 6vh;
      -webkit-transition: 0.5s;

}
.page_btn:hover{
    background-color: rgb(100, 100, 100);
      -webkit-transition: 0.5s;

}
.page_btn:active{
    background-color: rgb(58, 58, 58);

}
.read_img{
    height: 70vh;
    background-color: rgba(180, 6, 6, 0.253)
}
.img_context{
    width: 100%;
}
.bottom_page{
    text-align: center;
    margin-top: 3vh;
}
</style>