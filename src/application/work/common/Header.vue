<template>
<div>
  <div   v-bind:class="{ 'navbar_top' : isTop, 'navbar': !isTop}">
    <div class="navbar_tool" >
      <a-row>
        <a-col :span="4" :offset="1" >
          <div class="title">R Heart</div>
        </a-col>
        <a-col :span="6" :offset="3" >
            <a-input ref="userNameInput" v-model="userName" placeholder="Search">
              <a-tooltip slot="suffix" title="Extra information">
              <a-icon type="search" style="color: rgba(0,0,0,.45)" />
            </a-tooltip>
          </a-input>
        </a-col>
        <a-col :span="10" class="container">
          <a-icon class="navbar_icon" type="menu-unfold" />
          <a-icon class="navbar_icon" type="book" />
          <a-icon class="navbar_icon" type="tag" />
          <div class="navbar_icon">          <a-avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
         </a-col>

      </a-row>
    </div>

  </div>
    <div>
    <a-back-top />
    <strong style="color: rgba(64, 64, 64, 0.6)">  </strong>
  </div>
</div>
</template>

<style>
.container{
  height: 100%;
  display: flex;
  justify-content: right; 
  align-items: center; 
}

html,body,#root{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  /* background-color:black; */
  background-color:rgb(247, 247, 247);
}
.navbar_icon{
  padding-right: 30px;
  padding-left: 20px;
}
.navbar {
  z-index:9999 ;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  /*border-top: 1px solid #ddd;*/
  border-bottom: 3px solid #ff0000;
    -webkit-transition: 0.5s;

}
.navbar_top{
  z-index:9999 ;
  overflow: hidden;
  color: white;
  /* background-color: white; */
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  -webkit-transition: 0.5s;
  /*border-top: 1px solid #ddd;*/
  /* border-bottom: 3px solid #ff0000;  */
}
.navbar_tool{
  width: 100%;
  height: 100%;
  font-size: 30px;
}



</style>
<script>
import bus from './bus';

export default {
  data() {
    return {
      visible: false,
      registerVisible:false,
      i : 0,
      isTop: true,
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);  

  },
  methods: {
    handleScroll(){
      // 頁面滾動距頂部距離
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                document.body.scrollTop
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if(scrollTop==0){
          this.isTop=true;
          console.log(this.isTop)
      }else{
          console.log(this.isTop)
          this.isTop=false;

    }
        },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
      });
    },
    jumpToWallpaper(){
      document.location.href = "/work";
    },
    jumpToSong(){
      document.location.href = "/work";

    },
    jumpToWine(){
      document.location.href = "/work";

    },
    showRegister() {
      this.visible=false;
      this.registerVisible = true;
    },
    hideRegister() {
      this.registerVisible = false;
    },
  },
};
</script>