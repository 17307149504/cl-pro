<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/knowledgePopularization/stomach">
            <span slot="title">胃静脉曲张</span>
          </el-menu-item>
          <el-menu-item index="/knowledgePopularization/varicocele">
            <span slot="title">精索静脉曲张</span>
          </el-menu-item>
          <el-menu-item index="/knowledgePopularization/lowerExtremities">
            <span slot="title">下肢静脉曲张</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.medicine {
  min-height: 50px;
  padding: 20px 10px;
  .el-tag {
    float: left;
    margin-right: 10px;
  }
}
.content {
  padding-left: 20px;
  h4 {
    margin-block-start: 0.5em;
    margin-block-end: 0;
  }
  h5 {
    margin-block-start: 0em;
    font-weight: normal;
  }
  p {
    text-indent: 2em;
    text-align: left;
  }
  li {
    list-style-type: decimal;
    span {
      font-weight: bold;
    }
    p {
      text-indent: 0;
    }
  }
}
.el-card__body {
  font-weight: bold;
  font-size: 1.5em;
}
</style>