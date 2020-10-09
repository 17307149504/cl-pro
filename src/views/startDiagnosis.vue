<template>
  <div>
    <search placeHolder="请输入病情等信息"></search>
    <div class="result" v-show="resultData.length !== 0">
      <h2>以下为搜索结果</h2>
      <h3>治疗方案推荐（前三）</h3>
      <div class="result-ways">
        <ul v-for="(item, index) in resultData" :key="index" class="list">
          <li>
            <span>推荐指数：</span>
            <el-rate
              v-model="item.recommended"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </li>
          <li>
            <span>病因：</span>
            <span>{{ item.reason }}</span>
          </li>
          <li>
            <span>治疗方法：</span>
            <span>{{ item.treatmentMethod }}</span>
          </li>
          <li>
            <span>治疗所需药品：</span>
            <el-tag
              v-for="(med, ind) in item.medicine"
              :key="ind"
              type="success"
              >{{ med }}</el-tag
            >
          </li>
          <li>
            <span>预计花费金额：</span>
            <span>{{ item.cost | money }}</span>
          </li>
          <li>
            <span>具体步骤：</span>
            <el-steps direction="vertical">
              <el-step v-for="(step, index) in item.steps" :key="index"
                :title="step.main"
                :description="step.sub"
              ></el-step>
            </el-steps>
          </li>
        </ul>
      </div>
      <h3>知识图谱关系图</h3>
      <my-relationmap></my-relationmap>
      <h3>您的诊疗方案</h3>
      <el-input
        type="textarea"
        :rows="2"
        v-model="textarea"
        placeholder="请输入您对于该病人的诊疗建议，众多领域专家将与您一起为静脉曲张疾病的智慧化医疗贡献自己的力量。">
      </el-input>
      <el-button type="primary">提交方案</el-button>
    </div>
  </div>
</template>

<script>
import search from "../components/common/search";
import relationmap from "../components/common/relationshipMap"
import Vue from "vue";
Vue.filter("money", function (val) {
  return val.toFixed(2) + " 元";
});
export default {
  components: {
    search,
    'my-relationmap': relationmap,
  },
  data: () => {
    return {
      textarea: '',
      resultData: [
        {
          recommended: 5,
          reason: "病因",
          treatmentMethod: "手术治疗",
          medicine: ["阿莫西林", "感冒灵"],
          cost: 188,
          steps: [{
            main: '主要是要做什么1',
            sub: '详细做什么什么'
          },
          {
            main: '主要是要做什么2',
            sub: '详细做什么什么'
          },
          {
            main: '主要是要做什么3',
            sub: '详细做什么什么'
          }],
        },
        {
          recommended: 4,
          reason: "病因",
          treatmentMethod: "手术治疗",
          medicine: ["阿莫西林", "感冒灵"],
          cost: 188,
          steps: [{
            main: '主要是要做什么1',
            sub: '详细做什么什么'
          },
          {
            main: '主要是要做什么2',
            sub: '详细做什么什么'
          },
          {
            main: '主要是要做什么3',
            sub: '详细做什么什么'
          }],
        },
      ],
    };
  },
};
</script>

<style lang="less">
.result-ways {
  ul.list {
    margin-bottom: 20px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
    padding-top: 20px;
    padding-bottom: 20px;
    li {
      span:nth-child(1) {
        font-weight: bold;
      }
    }
  }
}
.el-rate {
  display: inline-block;
}
.el-tag {
  margin-right: 10px;
}
.el-steps {
  padding-left: 20px;
}
.el-step__title.is-wait {
  color: #2c3e50;
}
.el-step__description.is-wait {
  color: #bbb
}
.el-textarea {
  width: 100%;
  display: block;
  margin: 20px 0;
}
</style>