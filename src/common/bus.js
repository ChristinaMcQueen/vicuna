/**
 * Created by zhouhua on 2016/12/21.
 */
import Vue from 'vue';
import { Indicator } from 'mint-ui';

const bus = new Vue();

export function on(el, type, func) {
    el.addEventListener(type, func);
}
export function off(el, type, func) {
    el.removeEventListener(type, func);
}

bus.$on('changeTitle', (title) => {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isAndroid) {
        document.title = title;
    } else if (isiOS) {
        document.title = title;
        const i = document.createElement('iframe');
        i.src = 'src/assets/logo.png'; // 需要一个错误的地址
        i.style.display = 'none';
        i.onload = () => {
            setTimeout(() => {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
});

bus.$on('indicatorShow', () => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
});

bus.$on('indicatorHide', () => {
    Indicator.close();
});

window.addEventListener('unhandledrejection', (err) => {
    err.preventDefault();
});

export default bus;
