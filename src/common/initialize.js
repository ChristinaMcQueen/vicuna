/* eslint-disable */
import 'normalize.css';
import 'animate.css';
import 'lib-flexible';
import 'mint-ui/lib/style.css';
import 'window.requestanimationframe';
import Vue from 'vue';
import Mint from 'mint-ui';
import Cookie from 'js-cookie';

import './assets/css/base.less';
import App from './App';
import bus from './bus';
import mixins from './minxins';
// import router from './router/index';
// import store from './store/index';
// import http from './utils/http';

require('smoothscroll-polyfill').polyfill();

Vue.config.silent = true;
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;
Vue.prototype.$cookies = Cookie;
Vue.prototype.$cookie = Cookie;
// Vue.prototype.$photoSheet = photoSheet;
// Vue.prototype.$http = http;
Vue.use(Mint);

mixins.forEach(mixin => Vue.mixin(mixin));

export default function (props) {
    const AppComponent = props.hackComponent ? props.hackComponent : App;
    const startRoute = +new Date();
    // if (props.store) {
    //     props.store.registerModule('commonStore', store);
    // }
    // if (props.router) {
    //     // props.router.addRoutes(router);
    //     props.router.beforeEach((to, from, next) => {
    //         startRoute = +new Date();
    //         bus.$emit('closeGuide');
    //         next();
    //     });
    //     const oldGo = props.router.go;
    //     const oldPush = props.router.push;
    //     const oldReplace = props.router.replace;
    //     props.router.go = (step) => {
    //         if (step > 0) {
    //             bus.$emit('routeBack', false);
    //         }
    //         return oldGo.call(props.router, step);
    //     };
    //     props.router.push = (param) => {
    //         bus.$emit('routeBack', (param || {}).isBack || false);
    //         return oldPush.call(props.router, param);
    //     };
    //     props.router.replace = (param) => {
    //         bus.$emit('routeBack', (param || {}).isBack || false);
    //         return oldReplace.call(props.router, param);
    //     };
    // }
    return new Vue({
        el: '#app',
        render(h) {
            return h('app-component');
        },
        components: { AppComponent },
        ...props,
        mounted() {
            // log('App loaded, spend', +new Date() - window.appStartAt, 'ms');
            // console.log('mounted');
            if (props.mounted) {
                props.mounted.call(this);
            }
        },
        resume() {
            // console.log('resume');
            bus.$emit('pageResume');
        }
    });
}
