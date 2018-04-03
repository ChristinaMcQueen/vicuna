<script src="../../build/webpack.dev.conf.js"></script>
<template>
    <div id="app">
        <transition name="slide" :leave-active-class="leaveActiveClass" :enter-active-class="enterActiveClass">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" class="page" :key="$route.name"></router-view>
            </keep-alive>
        </transition>
        <transition name="slide" :leave-active-class="leaveActiveClass" :enter-active-class="enterActiveClass">
            <router-view class="page" v-if="!$route.meta.keepAlive" :key="$route.name"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
