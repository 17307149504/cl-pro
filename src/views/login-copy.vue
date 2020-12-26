<template>
  <div class="login_box">
    <div class="header">
        <h4>欢迎登录静脉曲张辅助诊断系统</h4>
    </div>
    <el-form class="login_form">
        <template v-if="!!type">
            <el-form-item>
                <el-input v-model="account" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="password" autocomplete="off" placeholder="密码"></el-input>
            </el-form-item>
        </template>
        <template v-else>
            <el-form-item>
                <el-input v-model="account" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item class="validate_item">
                <el-input type="password" v-model="password" autocomplete="off" placeholder="短信验证码">
                </el-input>
                <a class="validate_number"  @click="getCode">
                    {{isRun ? `${runTime}秒后重新获取` : "获取验证码"}}
                </a>
            </el-form-item>
        </template>
        <el-button type="primary" round>立即登录</el-button>
        <el-button class="message_login_btn" round @click="changeLoginWay">{{type ? '工号/就诊卡号登录':'用户名密码登录'}}</el-button>
        <div class="register">
          <router-link to="/register">立即注册</router-link>
          |
          <a>忘记密码</a>
        </div>
        <div class="other">
          <span>其他登录方式</span>
          <div>
            <a class='iconfont icon-xinlang'></a>
            <a class='iconfont icon-zhifubao'></a>
            <a class='iconfont icon-gongzhonghao'></a>
          </div>
        </div>
        <div class="footer">
          <span>首页</span>|<span>简体</span>|<span>English</span>|<span>常见问题</span>|<span>隐私政策</span>
        </div>
    </el-form>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            type: 1,
            account: '',
            password: '',
            isRun: false,
            runTime:30,
            timer: null,
        }
    },
    methods: {
      changeLoginWay() {
        this.type = !this.type;
        this.account = '';
        this.password = '';
      },
      getCode() {
        if(this.isRun) return;
        this.isRun = true;
        this.timer = setInterval(() => {
          this.runTime --;
          if(this.runTime == 0){
            clearInterval(this.timer)
            this.isRun = false;
            this.runTime = 30
          }
        }, 1000);
      }
    }
};
</script>

<style lang="less">
@import url('../assets/login.less');
</style>