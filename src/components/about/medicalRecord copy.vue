<template>
  <div>
      <h3>病历管理</h3>
      <my-table :tableData="tableData"></my-table>
  </div>
</template>

<script>
import caseData from '../../mock/hospital_case.js'
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
    this.tableData = caseData.RECORDS.map( item => {
      let obj = {
        _id: item._id,
        patient_id: item.patient_id,
        treat_id: item.treat_id
      };
      return obj;
    });
  }
}
</script>

<style>

</style>