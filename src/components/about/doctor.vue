<template>
  <div>
    <h3>医生列表</h3>
    <my-table :tableData="tableData"></my-table>
  </div>
</template>

<script>
import doctorData from '../../mock/hospital_doctor.js'
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
    this.tableData = doctorData.RECORDS.map( item => {
      let obj = {
        _id: item._id,
        job_number: item.job_number,
        account: item.account,
        department_id: item.department_id,
        hospital_id: item.hospital_id,
        phone: item.phone,
        professional: item.professional,
        iscanceled: item.iscanceled ? "有效" : "已注销",
      };
      return obj;
    });
  }
}
</script>

<style>

</style>