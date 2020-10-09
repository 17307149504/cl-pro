<template>
<el-card class="search">
    <el-input v-model="input" :placeholder="placeHolder"></el-input>
      <el-button type="primary">开始查询</el-button>
</el-card>
 
</template>

<script>
export default {
    props: {
        placeHolder:{
            type: String,
            default: '请输入内容'
        }
    },
    data: () => {
        return {
            input: '',
        }
    }
}
</script>

<style>
.search {
    min-height: 200px;
    margin: 0 auto;
    width: 100%;
    padding: 80px 0 0;
}
.el-input {
    width: 50%;
    margin-right: 20px;
}
</style>