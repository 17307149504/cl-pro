<template>
  <div>
     <search placeHolder="请输入实体名"></search>
     <div v-show="mapData.flag">
      <h3>知识图谱关系图</h3>
      <my-relationmap :data="mapData.data"></my-relationmap>
      </div>
  </div>
</template>

<script>
import search from "../components/common/search";
import relationmap from "../components/common/relationshipMap"
export default {
components:{
  search,
  'my-relationmap': relationmap
},
data() {
  return {
    mapData: {
      flag: false,
      data: {
        nodes: [],
        edges: []
      }
    }
  }
}
}
</script>

<style>

</style>