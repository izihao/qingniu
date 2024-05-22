<template>
    <div class="box1">
        <div class="box2">
            <img src="http://qnadmin.9yuecloud.com/assets/eye-logo-04jUtJVT.png" alt="">
        </div>
        <div class="box3">
            <h1>青牛前端</h1>
        </div>
    </div>
    <el-menu active-text-color="#fff" background-color="transparent" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" router>
        <el-menu-item index="/dashboard/mb">
            <el-icon><icon-menu /></el-icon>
            <span>面板</span>
        </el-menu-item>
        <el-sub-menu :index="item.link" v-for="(item, index) in menulist" :key="index">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>{{ item.menuname }}</span>
            </template>
            <el-menu-item-group v-for="(itm, index) in item.children" :key="index">
                <el-menu-item :index="itm.link">{{ itm.menuname }}</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { usermenus } from '@/api/system/usermenus'
import router from "@/router";
const menulist = ref<any[]>([])
const unsemenus = async () => {
    try {
        const res = await usermenus()
        menulist.value = res.data
        console.log(res);
    } catch (error) {

    }
}
unsemenus()
</script>

<style lang="scss" scoped>
.box1 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-self: space-between;
    align-items: center;

    .box2 {
        width: 50px;
        height: 30px;

        img {
            width: 50px;
            height: 30px;
        }

    }

    h1 {
        color: #fff;
        margin-left: 10px;
    }
}
</style>