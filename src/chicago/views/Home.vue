<template>
    <el-container>
        <el-aside v-if="showAside" class="aside-wrap">Aside</el-aside>
        <el-container>
            <el-header><h1>全科医生管理</h1></el-header>
            <el-main>
                <doctor-select class="select-wrap"></doctor-select>
                <location-select class="select-wrap"></location-select>
                <time-select class="select-wrap"></time-select>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script type="text/javascript">
import { Container, Button } from 'element-ui';
import DoctorSelect from '../components/DoctorSelect';
import LocationSelect from '../components/LocationSelect';
import TimeSelect from '../components/TimeSelect';

export default {
    data() {
        return {
            showAside: false,
            doctorID: null,
            province: null,
            provinceList: [],
            city: null,
            cityList: [],
            block: null,
            blockList: [],
            district: null,
            districtList: []
        };
    },
    components: {
        Container,
        Button,
        DoctorSelect,
        LocationSelect,
        TimeSelect
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.aside-wrap
    width 200px
.select-wrap
    margin 0 auto
    min-width 520px
</style>
