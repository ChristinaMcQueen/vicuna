<template>
    <div id="toolbar">
        <button class="ql-bold"></button>
        <button class="ql-header" value="1"></button>
        <button class="ql-header" value="2"></button>
        <select class="ql-align">
            <option selected="selected"></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
        </select>
        <button class="ql-image"></button>
        <span class="icon-wrap" @click="uploadMenu">
            <!-- <img :src="uploadIcon" class="upload-icon"/> -->
        </span>
    </div>
</template>

<script>
export default {
    // props: ['text'],
    data() {
        return {
            // uploadIcon: require('../assets/logo.png')
        };
    },
    created() {
        // console.log(this.text);
    },
    methods: {
        uploadMenu() {
            console.log('------------------------------------');
            console.log('show menu');
            console.log('------------------------------------');
        }
    },
    computed: {
    }
};
</script>

<style scoped lang="less" rel="stylesheet/less">
.icon-wrap {
    height: 24px;
    display: flex;
    /* align-items: center; */
    padding: 2px 5px;
    .upload-icon {
        width: 20px;
        height: 20px;
    }
}
</style>
