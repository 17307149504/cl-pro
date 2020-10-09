<template>
  <div>
     <search placeHolder="请输入病情等信息"></search>
     <h3>知识图谱关系图</h3>
      <my-relationmap></my-relationmap>
  </div>
</template>

<script>
import search from "../components/common/search";
import relationmap from "../components/common/relationshipMap"
export default {
components:{
  search,
  'my-relationmap': relationmap
}
}
</script>

<style>

</style>