<template>
  <el-menu
    default-active="startDiagnosis"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/startDiagnosis">开始诊断</el-menu-item>
    <el-menu-item index="/knowledgePopularization">知识科普</el-menu-item>
    <el-menu-item index="/entityQuery">实体查询</el-menu-item>
    <el-menu-item index="/instructionsForUse">使用说明</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style>
</style>