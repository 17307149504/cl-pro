<template>
  <div>
    <h3>今日接诊</h3>
    <my-table :tableData="tableData"></my-table>
  </div>
</template>

<script>
import table from '../components/common/table'
export default {
  components: {
    'my-table': table,
  },
  data() {
    return {
      tableData:[
        {
          id: '01',
          account: '张月',
          id_number: "3366470367",
          cGrade: 'C1'
        }
      ],
    }
  },
  
}
</script>

<style>

</style>