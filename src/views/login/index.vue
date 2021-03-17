<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Coding Tonight</h3>
        <div class="robot-container"></div>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >Login</el-button
      ></el-form
    >
    <div class="desc-container">
      <div class="desc-1"><span>丰富的编程学习和实践教程</span></div>
      <div class="desc-2"><span>在线代码编辑</span></div>
      <div class="desc-3"><span>丰富的面试题分类汇总</span></div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import SocialSign from "./components/SocialSignin";
export default {
  name: "Login",
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("用户名称不正确"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      debugger;
      if (value.length < 6) {
        callback(new Error("密码长度不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    test: () => {
      return "";
    },
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 3px solid #beb49a;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg_img: url("~@/assets/images/login/bg.jpg");
$desc_img1: url("~@/assets/images/login/desc1.png");
$desc_img2: url("~@/assets/images/login/desc2.png");
$desc_img3: url("~@/assets/images/login/desc3.png");
$robot: url("~@/assets/images/login/logo.png");
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  min-width: 1024px;
  background-image: $bg_img;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
.desc-container {
  text-align: center;
  width: 650px;
  height: 200px;
  margin: 0 auto;
  color: #000;
  font-size: 18px;
  text-align: center;
  .desc-1 {
    background-image: $desc_img1;
  }
  .desc-2 {
    background-image: $desc_img2;
  }
  .desc-3 {
    background-image: $desc_img3;
  }
  & > div {
    text-align: center;
    width: 30%;
    margin-right: 10px;
    height: 100%;
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 76px 0px;
    vertical-align: middle;
    transition: transform 1s;
    &:hover {
      transform: rotateZ(360deg) scale(0.8);
    }
  }
}
@keyframes robot {
  0% {
    background-position-x: 0;
  }
  25% {
    background-position-x: 200px;
  }
  50% {
    background-position-x: 400px;
  }
  75% {
    background-position-x: 200px;
  }
  100% {
    background-position-x: 0;
  }
}
.robot-container {
  width: 100%;
  height: 47px;
  background-size: 50px 50px;
  background-position-x: 0;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-image: $robot;
  animation: robot 10s linear infinite;
}
</style>
