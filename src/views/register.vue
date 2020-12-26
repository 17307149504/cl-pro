<template>
  <div class="login_box">
    <div class="header">
      <h4>欢迎注册静脉曲张辅助诊断系统</h4>
    </div>
    <div class="login_form">
      <el-radio-group v-model="user_identify" size="small" class="form_tab">
        <el-radio-button label="医生">我是医生</el-radio-button>
        <el-radio-button label="患者">我是患者</el-radio-button>
    </el-radio-group>
    <h4>您好，{{ user_identify }}</h4>
      <el-form
        :model="ruleForm_doctor"
        :rules="rules"
        ref="ruleForm"
        status-icon
        label-position="right"
        v-if="user_identify === '医生'"
      >
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm_doctor.name"></el-input>
        </el-form-item>
        <el-form-item label="您的工号" prop="jobNumber">
          <el-input v-model="ruleForm_doctor.jobNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属医院" prop="hospital">
          <el-input v-model="ruleForm_doctor.hospital"></el-input>
        </el-form-item>
        <el-form-item label="所属科室" prop="department">
          <el-input v-model="ruleForm_doctor.department"></el-input>
        </el-form-item>
        <el-form-item label="输入密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm_doctor.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm_doctor.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :model="ruleForm_patient"
        :rules="rules"
        ref="ruleForm"
        status-icon
        label-position="right"
        v-else
      >
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm_patient.name"></el-input>
        </el-form-item>
        <el-form-item label="就诊卡号" prop="jobNumber">
          <el-input v-model="ruleForm_patient.cardNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属医院" prop="hospital">
          <el-input v-model="ruleForm_patient.hospital"></el-input>
        </el-form-item>
        <el-form-item label="所属科室" prop="department">
          <el-input v-model="ruleForm_patient.department"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumber">
          <el-input v-model="ruleForm_patient.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="输入密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm_patient.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm_patient.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round>立即注册</el-button>
      <div class="register">
        <router-link to="/login">已有账号，去登录</router-link>
      </div>
      <div class="footer">
        <span>首页</span
        >|<span>简体</span>|<span>English</span>|<span>常见问题</span>|<span
          >隐私政策</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else { callback();}
    };
    return {
      user_identify: "医生",
      ruleForm_doctor: {
        name: "",
        pass: "",
        checkPass: "",
        jobNumber: '',
        hospital: '',
        department: '',
      },
      ruleForm_patient: {
        name: "",
        pass: "",
        checkPass: "",
        cardNumber: '',
        hospital: '',
        department: '',
        phoneNumber: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        department: [{required: true, message: "请输入您所属科室", trigger: "blur"}],
        jobNumber: [{required: true, message: "请输入您的工号", trigger: "blur"}],
        hospital:[{required: true, message: "请输入您所在医院", trigger: "blur"}],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        phoneNumber: [{required: true, message: "请输入您的手机号码", trigger: "blur"}]
      },
    };
  },
};
</script>

<style lang="less">
@import url("../assets/login.less");
.el-form-item {
  margin-bottom: 22px;
  width: 80%;
  margin: 10px auto;
}
.el-input {
  width: 100%;
}
</style>