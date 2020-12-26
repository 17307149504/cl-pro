<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in Object.keys(tableData[0])"
      :key="item.id"
      :prop="item"
      :label="lineTitle[item]"
      min-width="120"
    >
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
    disease_id: "疾病"
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
};
</script>

<style>
</style>