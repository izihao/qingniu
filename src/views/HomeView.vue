<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <asidelist></asidelist>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import  asidelist  from '../views/aside/asidelist.vue'

</script>

<style lang="scss" scoped>
.el-aside {
    width: 200px;
    height: 100vh;
    background-color: #001529;
}

.el-header {
    height: 15vh;
    background-color: skyblue;
}
</style>
