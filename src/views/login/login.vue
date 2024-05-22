<template>
  <div class="bbb">
    <div class="box">
      <h1 style="font-weight: 300;">用户登录</h1>
      <p>
        青牛前端后台管理系统
      </p>
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
        class="demo-ruleForm" :size="formSize" status-icon>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="输入用户密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 610px;height: 32px;" type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/system/login'
import {useCounterStore} from '@/stores/counter'
const store=useCounterStore()
import router from "@/router";
interface RuleForm {
  username: string
  password: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: 'abc12345'
})


const rules = reactive<FormRules<RuleForm>>({

})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const res= await login(ruleForm)
        console.log(res);
        store.token=res.data
        router.push('/')
      } catch (error) {
         
      }
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}



</script>

<style lang="scss" scoped>
.bbb {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .box {
    width: 610px;
    height: 300px;
    text-align: center;
  }
}
</style>