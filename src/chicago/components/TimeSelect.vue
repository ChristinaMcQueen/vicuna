<template>
    <label class="select-item">
        <span class="select-label">认证时间：</span>
        <el-date-picker
                v-model="start"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <span class="select-label center">至</span>
        <el-date-picker
                v-model="end"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
    </label>
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
    &.center
        text-align center
        width 40px
.el-input
    width 200px
</style>
