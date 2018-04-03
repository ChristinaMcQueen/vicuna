<template>
    <div>
        <label class="select-item">
            <span class="select-label">医生ID：</span>
            <el-input  placeholder="请输入医生ID" v-model="doctorID"></el-input>
        </label>
        <label class="select-item">
            <span class="select-label">医生姓名：</span>
            <el-input placeholder="请输入医生姓名" v-model="doctorName"></el-input>
        </label>
        <label class="select-item">
            <span class="select-label">医生账号：</span>
            <el-input placeholder="请输入医生账号" v-model="doctorAccount"></el-input>
        </label>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {};
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.select-item
    display inline-block
    margin 10px 10px
    height 40px
    line-height 40px
.select-label
    display inline-table
    width 60px
    overflow hidden
    text-align right
    line-height 40px
.el-input
    width 200px
</style>
