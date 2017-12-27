<template>
    <div id="app">
        <transition name="slide" :leave-active-class="leaveActiveClass" :enter-active-class="enterActiveClass">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" class="page"></router-view>
            </keep-alive>
        </transition>
        <transition name="slide" :leave-active-class="leaveActiveClass" :enter-active-class="enterActiveClass">
            <router-view class="page" v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">

export default {
    data() {
        return {
            enterActiveClass: 'fadeIn',
            leaveActiveClass: 'fadeOut',
            isBack: true
        };
    },
    created() {
    },
    watch: {
    }
};
</script>

<style lang="less" rel="stylesheet/less">
*,
*:before,
*:after {
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
}
input:focus,
textarea:focus,
button {
    outline: none !important;
}

#app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    height: 100%;
}

.page {
    min-height: 100%;
    width: 100%;
    position: relative;
}
.page{
    &.animated{
        position: fixed;
        animation-duration: 0.28s !important;
        z-index: 2;
    }
    &.fix{
        z-index: 1;
    }
}
</style>
