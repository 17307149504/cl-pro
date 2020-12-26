<template>
  <div class="about">
      <el-row class="tac">
      <el-col :span="3">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item v-for="(item,key) in navArr" :key="key" :index="item.index">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="about-right">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data:() => {
    return {
      tableData: [],
    }
  },
  computed:{
    navArr(){
      switch(this.$store.state.userIdentify) {
        case 'PATIENT': return [
          {title: '病历管理', index:'/about/medicalRecord'},
        ];
        case 'DOCTOR': return [
          {title: '患者管理', index: '/about/patient'},
        ];
        case 'ADMIN':return [ 
          {title: '知识图谱管理', index: '/about/kgGraph'},
          {title: '患者管理', index: '/about/patient'},
          {title: '医生管理', index: '/about/doctor'},
        ];
        default: return [
          {title: '病历管理', index:'/about/medicalRecord'},
          {title: '知识图谱管理', index: '/about/kgGraph'},
          {title: '患者管理', index: '/about/patient'},
          {title: '用户管理', index: '/about/users'},
        ];
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less">
.about{
  h4 {
    
  }
}
.about-right{
  padding-left: 20px;
}
</style>