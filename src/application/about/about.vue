
<template>
  <div class="bg">
    <a-layout id="components-layout-demo-basic">
      <a-layout-sider width="40%">
        <img src="../../assets/anemia_1.png">
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <a-row>
            <a-col :span="3" :offset="7">
              <a-icon class="icon" type="github"/>
            </a-col>
            <a-col :span="3" :offset="1">
              <a-icon class="icon" type="android" theme="filled" />
            </a-col>

            <a-col :span="3" :offset="1">
              <div @click="showModal" class="login_style">
                <a-icon type="user" class="icon"/>
                <a-modal v-model="visible" title="Modal" ok-text="確認" cancel-text="取消" @ok="hideModal">
                  <div>
                    <div class="login">
                      <a-input ref="userNameInput" v-model="userName" placeholder="Your username">
                        <a-icon slot="prefix" type="user" />
                      </a-input>
                      <br />
                      <br />
                      <a-input ref="passwordinput" v-model="password" placeholder="Your password">
                        <a-icon slot="prefix" type="fire" />
                      </a-input>
                      <br />
                      <br />

                      <div name="register">
                        <a @click="showRegister">
                          沒有帳號？...
                        </a>
                        <a-modal v-model="registerVisible" title="Basic Modal" ok-text="确认" cancel-text="取消" @ok="hideRegister">
                          <a-input ref="userNameInput" v-model="userName" placeholder="Register Your username">
                            <a-icon slot="prefix" type="user" />
                          </a-input>
                          <br />
                          <br />
                          <a-input ref="passwordinput" v-model="password" placeholder="Enter Your password">
                            <a-icon slot="prefix" type="fire" />
                          </a-input>
                          <br />
                          <br />
                          <div>
                            <a-select default-value="+86" style="width: 120px" @change="handleChange" class="verified" >
                              <a-select-option value="+86">
                                CHINA +86
                              </a-select-option>
                              <a-select-option value="+81">
                                JAPAN +81
                              </a-select-option>
                              <a-select-option value="+1">
                                AMERICA +1
                              </a-select-option>
                            </a-select>
                            <a-input ref="passwordinput" v-model="password" placeholder="Enter Your Phone number" class="verifiedcode" style="width: 340px">
                              <a-icon slot="prefix" type="bell" />
                            </a-input>
                          </div>
                          <br />
                          <br />
                          <a-input-search
                              placeholder="Enter your verfied code"
                              enter-button="Get Your verfied code"
                              size="default"
                              @search="onSearch"
                          />
                          <a-icon slot="prefix" type="user" />
                        </a-modal>
                      </div>

                    </div>
                  </div>
                </a-modal>
              </div>
            </a-col>
            <a-col :span="5" :offset="1">
              <div class="title"  v-on:click="showIntroduce">R Heart</div>
            </a-col>
          </a-row>
        </a-layout-header>

        <a-layout-content>
          <div class="show_image" >
            <a-carousel autoplay effect="fade">
              <div>
                  <img class="preview" src="../../assets/preview_1.jpg">
              </div>

              <div>
                  <img class="preview" src="../../assets/preview_2.jpg">
              </div>

              <div>
                  <img class="preview" src="../../assets/preview_3.png">
              </div>

              <div>
                  <img class="preview" src="../../assets/preview_4.png">
              </div>
            </a-carousel>
          </div>
            <div class="siber_btn">
              <button class="btn" v-on:click="jumpToSong">Start</button>
            </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      registerVisible:false,
    };
  },
  created() {
    window.onresize = () => {
      fun()
      // 重置 animation 保证变量加载
      this.$refs.bg.classList.remove('animation')
      setTimeout(() => {
        this.$refs.bg.classList.add('animation')
      }, 100)
    }
    fun()
  },
  methods: {
    showIntroduce(){
      document.location.href = "/about";
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
        okText: '確認',
        cancelText: '取消',
      });
    },
    jumpToWallpaper(){
    },
    jumpToSong(){
      document.location.href = "/work#/Index";
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

<style scoped>
.siber_btn{
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top:10%;
  margin-right: 6%;
}

.show_image{
  margin-top: 2%;
  margin-right: 6%;
  height: 55%;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  margin-top: 40px;
  /* height: 160px; */
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.preview{
  height: 100%;
  width: 100%;
}
html,body {
  height: 100%;
  padding: 0;
  margin: 0;

}
@font-face {
  font-family: dahot2;
  src: url("../../assets/font/dahot2.Filxgirl.ttf")
}

.title{
  font-size: 45px;
  font-family: dahot2;
  color:black;
}

.icon {
  margin-top: 10px;
  margin-right: 6px;
  font-size: 30px;
  color: black;
}

.ant-layout-sider,.ant-layout-header,.ant-layout{
  background-color: #F3CD05;
}
#components-layout-demo-basic .ant-layout-sider img {
  min-height: 100%;
  width: 100%;
}
#components-layout-demo-basic {
  text-align: center;
  height: 100vh;
  width: 100%;
}
#components-layout-demo-basic .ant-layout-header{
  color: #fff;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.btn, .btn::after {
  width: 380px;
  height: 86px;
  font-size: 36px;
  font-family: 'Bebas Neue', cursive;
  background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  line-height: 88px;
  box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
}

.btn::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: 'Start';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}

.btn:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>