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
                                <a-button type="primary" icon="read">
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

      };
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