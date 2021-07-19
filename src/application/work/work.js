import 'ant-design-vue/dist/antd.css';
import router from './router';
import axios from 'axios'
import http from './api/config.js';
import Vue from 'vue'
import App from './work.vue'
import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Col } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';
import { Card } from 'ant-design-vue';
import { Input } from 'ant-design-vue';
import { Select } from 'ant-design-vue';
import { Carousel} from 'ant-design-vue';
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$http = http

Vue.use(Carousel);
Vue.use(Input);
Vue.use(Select);
Vue.use(Modal);
Vue.use(Card);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Layout);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


