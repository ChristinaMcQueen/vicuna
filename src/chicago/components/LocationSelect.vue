<template>
    <div>
        <label class="select-item">
            <span class="select-label">省：</span>
            <el-select v-model="province" multiple placeholder="请选择省分">
                <el-option
                        v-for="item in provinceList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label class="select-item">
            <span class="select-label">市：</span>
            <el-select v-model="city" multiple placeholder="请选择市">
                <el-option
                        v-for="item in cityList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label class="select-item">
            <span class="select-label">区：</span>
            <el-select v-model="block" multiple placeholder="请选择区">
                <el-option
                        v-for="item in blockList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label class="select-item">
            <span class="select-label">街道：</span>
            <el-select v-model="district" multiple placeholder="请选择街道">
                <el-option
                        v-for="item in districtList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
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
.el-select
    width 200px
</style>
