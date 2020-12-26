<template>
  <div>
    <h3>患者列表</h3>
    <my-table :tableData="tableData"></my-table>
  </div>
</template>

<script>
import patientData from '../../mock/hospital_patient.js'
import mytable from '../common/table';
export default {
  components: {
    'my-table': mytable,
  },
  data: () => {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.tableData = patientData.RECORDS.map( item => {
      let obj = {
        _id: item._id,
        account: item.account,
        phone: item.phone,
        id_number: item.id_number,
        hospital_id: item.hospital_id,
        age: item.age,
        gender: item.gender === 'female' ? "男性" : "女性",
        weight: item.weight/2,
        height: item.height,
        pregnancy: item.pregnancy ? '妊娠' : "未妊娠",
        last_time: item.last_time,
        last_disease_id: item.last_disease_id,
        last_department_id: item.last_department_id,
        canceled: item.canceled  ? "有效" : "已注销",
      };
      return obj;
    });
  }
}
</script>

<style>

</style>