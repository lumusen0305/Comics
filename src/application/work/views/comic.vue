<template>
          <div class="context">
            <div class="comic_introduce">
                <a-row > 
                  <a-col :span="5" :offset="1">
                    <img class="img"
                        alt="example"
                        src="https://cf.hamreus.com/cpic/b/19430.jpg"
                    />
                    </a-col>
                    <a-col :span="16" :offset="2">
                        <nav class="comic_intro_title">
                        鬼妹之刃
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
                          <img class="comic_img"
                            alt="example"
                            :src=" item.image"
                            referrerPolicy="no-referrer"
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
</template>

<script>
import axios from "axios";
export default {
    name: "comic",
    data() {
    return {
        chapter:[{
          "image":"https://i.hamreus.com/ps4/g/gmzr_wkhsq/第206话特别短篇/1601837420v2iIedaGEJj0CytS.jpg?e=1627860757&m=P9a3DgADpU1eaMchBhA_og"
        }]
      };
    },
    methods:{
    getimg(){
      axios.get("https://i.hamreus.com/ps4/g/gmzr_wkhsq/第206话特别短篇/1601837420v2iIedaGEJj0CytS.jpg?e=1627860757&m=P9a3DgADpU1eaMchBhA_og", {
        responseType: 'arraybuffer',
        headers:{"Referer":"https://www.manhuagui.com/"}
      }).then(response => {
        console.log('data:image/png;base64,' +btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')));
      }).then(data=>{
        that.$refs.img.src=data;
      });
      },
    },
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