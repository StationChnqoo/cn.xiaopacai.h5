<template>
  <div class="test-login">
    <n-card class="login-card" title="用户登录">
      <n-form ref="formRef" :model="formData" :rules="rules">
        <n-form-item label="手机号" path="mobile">
          <n-input
            v-model:value="formData.mobile"
            placeholder="请输入手机号"
            @keydown.enter="handleLogin"
          />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            v-model:value="formData.password"
            type="password"
            show-password-on="click"
            placeholder="请输入密码"
            @keydown.enter="handleLogin"
          />
        </n-form-item>
        <n-button type="primary" block :loading="loading" @click="handleLogin">
          登录
        </n-button>
      </n-form>
      <n-text
        depth="3"
        style="
          display: block;
          margin-top: 16px;
          text-align: center;
          font-size: 13px;
        "
      >
        提示：请输入手机号与密码登录
      </n-text>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NText,
  useMessage,
  type FormInst,
  type FormRules,
} from "naive-ui";
import UserService from "../../services/user";

const router = useRouter();
const message = useMessage();
const loading = ref(false);
const formRef = ref<FormInst | null>(null);
const userService = new UserService();

const formData = reactive({
  mobile: "",
  password: "",
});

const rules: FormRules = {
  mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const handleLogin = async () => {
  try {
    await formRef.value?.validate();
    loading.value = true;
    const result = await userService.login({
      mobile: formData.mobile,
      password: formData.password,
    });
    const token = result?.data;
    if (token) {
      localStorage.setItem("token", token);
      message.success("登录成功！");
      setTimeout(() => {
        router.push({ path: "/" });
      }, 1000);
    } else {
      message.error("登录失败");
    }
  } catch (error) {
    message.error("登录失败");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.test-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
