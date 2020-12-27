<template>
  <el-menu
    default-active="startDiagnosis"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    style="padding-right:20px"
  >
    <el-menu-item v-if="isDoctor || isAdmin" index="/startDiagnosis">开始诊断</el-menu-item>
    <el-menu-item index="/knowledgePopularization">知识科普</el-menu-item>
    <el-menu-item index="/entityQuery">实体查询</el-menu-item>
    <el-menu-item index="/admissions" v-if="isDoctor || isAdmin">我的接诊</el-menu-item>
    <el-menu-item v-show="isAuthenticated" style="float:right">
      <div class="text" @click="logout">退出登录</div>
    </el-menu-item>
    <el-menu-item :index="isAuthenticated ? '/about' : '/login'" style="float:right">
      <div class="text" v-if="isAuthenticated"><i class="el-icon-user-solid"></i>个人中心</div>
      <div class="text" v-else>请登录</div>
    </el-menu-item>
  </el-menu>
</template>

<script>
// import {logout} from '../../api/auth-service'
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isDoctor() {
      return this.$store.getters.isDoctor;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  },
  methods: {
    async logout() {
      // let res = await logout();
      // if(res.code == 0) {
        this.$store.commit('setRole', '');
        this.$store.commit('setBasicInfo', {
          sex: '',
          age: '',
          occupation: ''
        });
        this.$router.push('/login');
      // } else {
      //   console.log("登出失败？");
      // }
    }
  },
};
</script>

<style>
.login-btn {
  float: right;

}
</style>