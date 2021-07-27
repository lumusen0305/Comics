<template>
  <div class="context">
    <div class="page_btn" id="right_btn"  v-on:click="addPage()">
        >
    </div>
    <div class="page_btn" id="left_btn" v-on:click="reducePage()">
        <
    </div>
    <nav class="contex_title" style="font-size:3.5vh;">
      熱門漫畫
    </nav>
    <img
        class="img_context"
        alt="example"
        src="https://tn1.kkmh.com/image/c385819/210708/rA0v25PzG.webp-t.w640.jpg.h?sign=fbf04a30c70ff94710be602acfdd2464&t=610071d8"
    /> 
    <div class="bottom_page">
        <a-slider v-model="page" :min="1" :max="this.max_page" />
        <a-statistic :value=this.page>
            <template #suffix>
                
            </template>
        </a-statistic>
    </div>
  </div>
</template>

<script>
export default {
    name: "read",
    data() {
    return {
        page:1,
        max_page:"21",
      };
    },
    watch:{
        page:function(){
            console.log('page:'+this.page)
        }
    },
    methods:{
        addPage(){
            if(this.page<this.max_page){
                this.page=this.page+1;
            }
        },
        reducePage(){
            if(this.page>1){
                this.page=this.page-1;
            }
        },
        keyDown(e) {
        console.log(e.code)
        if(e.code=='ArrowRight'){
            this.addPage();
        }
        else if(e.code=='ArrowLeft'){
            this.reducePage();
        }
        },
    },
    mounted() {
        document.body.onkeydown = this.keyDown
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
    height: 100vh;
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