<template>
  <el-card class="search">
    <div class="tabs-box" @click="getInput"  v-show="placeHolder != '请输入实体名'">
      <el-tag v-for="(item, key) in tagsArr" :key="key">{{ item }}</el-tag>
    </div>
    <div class="input-box">
      <el-input v-model="input" :placeholder="placeHolder"></el-input>
      <el-button
        type="info"
        icon="el-icon-s-order"
        @click="dialogFormVisible = true"
        v-show="placeHolder != '请输入实体名'"
        >导入电子病历</el-button
      >
      <el-button type="primary">开始查询</el-button>
    </div>
    <el-dialog title="导入电子病历" :visible.sync="dialogFormVisible" v-show="placeHolder != '请输入实体名'">
      <el-form :model="form">
        <el-form-item label="病人就诊卡号" label-width="200px">
          <el-input v-model="form.cardNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="病人姓名" label-width="200px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="就诊科室" label-width="200px">
          <el-input v-model="form.department" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  props: {
    placeHolder: {
      type: String,
      default: "请输入内容",
    },
  },
  data: () => {
    return {
      input: "",
      tagsArr: [
        "无明显或可触及的静脉疾病现象",
        "毛细血管扩张",
        "静脉曲张",
        "复发性静脉曲张",
        "水肿",
        "皮肤湿疹",
        "环状静脉扩张",
        "康复的静脉性溃疡",
        "活动性静脉溃疡",
        "复发性活动性静脉溃疡",
        "皮肤色素沉着",
        "皮下组织纤维化",
        "皮肤溃疡",
      ],
      dialogFormVisible: false,
      form: {
          cardNumber: '',
          name: '',
          department: ''
        },
    };
  },
  methods: {
    getInput(e) {
      let target = e.target;
      console.dir(target);
      if (target.localName === "span") {
        this.input += " " + target.innerText;
      }
    },
  },
  mounted() {
    console.log("this.placeHolder", this.placeHolder, this.placeHolder != '请输入实体名');
  }
};
</script>

<style lang="less">
.search {
  min-height: 200px;
  margin: 0 auto;
  width: 100%;
  padding: 112px 0 0;
  position: relative;
}
.el-input {
  width: 50%;
  margin-right: 20px;
}
.tabs-box {
  margin-bottom: 20px;
  position: absolute;
  top: 26px;
  left: 45px;
  text-align: left;
  .el-tag {
    cursor: pointer;
  }
}
</style>