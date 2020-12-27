<template>
  <el-table :data="tableData" style="width: 100%" border stripe>
    <el-table-column
      v-for="item in Object.keys(tableData[0])"
      :key="item.id"
      :prop="item"
      :label="lineTitle[item]"
      min-width="120"
    >
    </el-table-column><el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
const lineTitle = {
    _id: "编号",
    account: "姓名",
    password: "密码",
    phone: "手机号",
    id_number: "就诊卡号",
    hospital_id: "医院",
    canceled: "账号是否有效",
    iscanceled: "账号是否有效",
    age: "年龄/岁",
    gender: "性别",
    weight: "体重/kg",
    height: "身高/cm",
    pregnancy: "是否妊娠",
    last_time: "上次就诊时间",
    last_disease_id: "上次就诊诊断结果",
    last_department_id: "上次就诊科室",
    patient_id: "患者",
    treat_id: "治疗方案",
    job_number: "工号",
    department_id: "工作科室",
    professional:"职称",
    treat_time: "就诊时间",
    symptom: "症状",
    doctor_id: "医生",
    disease_id: "疾病",
    cGrade: "初步诊断结果"
};
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [
        {
          _id: 6,
          account: "HHMPWYKMQL",
          phone: "14763536040",
          id_number: "3366470367",
          hospital_id: 15,
          canceled: 0,
          age: 7,
          gender: "female",
          weight: 185,
          height: 181,
          pregnancy: 0,
          last_time: "1974/1/26",
          last_disease_id: 156,
          last_department_id: 17,
        },
      ],
    },
  },
  data: () => {
    return {
      lineTitle,
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$router.push('./startDiagnosis');
      this.$store.commit('changeAfterCheck', true);// 记录这里是由表格跳转到开始诊断页面，与自己点击开始诊断页面不同
      // mounted的时候需要填好一些信息，并且默认步骤改为第二步
      /* 通过患者的id去进行查找，得到存储的基本信息：包括：{sex: "", age: "", occupation: "", symptomStr: "",
        cGrade: '',needChecks: [{name: "大隐静脉瓣膜功能试验",},],
        cardNumber: null,//导入电子病历时需要提供的信息
        name: "",
        department: "",}
      */

    }
  }
};
</script>

<style>
</style>