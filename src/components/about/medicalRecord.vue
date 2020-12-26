<template>
  <div>
    <h3>我的基本信息</h3>
    <div class="info-box">
      <span class="title">姓名:</span>
      <span>{{ data.name }}</span>
      <span class="title">年龄:</span>
      <span>{{ data.age }}</span>
      <span class="title">就诊卡号:</span>
      <span>{{ data.idNumber }}</span>
      <span class="title">体重:</span>
      <span>{{ data.weight }}</span>
      <span class="title">身高:</span>
      <span>{{ data.height }}</span>
    </div>
    <el-button type="primary">修改</el-button>
    <el-button type="primary">保存修改</el-button>
    <h3>我的就诊信息</h3>
    <my-table :tableData="tableData"></my-table>
  </div>
</template>

<script>
import treatmentData from '../../mock/hospital_treatment'
import mytable from '../common/table';
export default {
  components: {
    'my-table': mytable,
  },
  data: () => {
    return {
      data: {
        name: "zzz",
        age: 25,
        idNumber: "2879436739",
        weight: 98,
        height: 150,
      },
      tableData: [

      ]
    };
  },
  mounted() {
    this.tableData = treatmentData.RECORDS;
  }
};
</script>

<style lang="less">
.info-box{
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  span {
    flex-basis: 25%;
    text-align: left;
    line-height: 20px;
  }
}
span.title {
  display: inline-block;
  font-weight: bold;
  text-align: center;
}
</style>