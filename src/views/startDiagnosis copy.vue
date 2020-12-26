<template>
  <div>
    <search placeHolder="请输入病情等信息"></search>
    <div class="result" v-show="resultData.length !== 0">
      <h2>以下为搜索结果</h2>
      <h3>治疗方案推荐</h3>
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
      <h3>知识图谱树状图</h3>
      <treemap></treemap>
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
import treemap from '../components/common/treeMap'
import Vue from "vue";
Vue.filter("money", function (val) {
  return val.toFixed(2) + " 元";
});
export default {
  components: {
    search,
    'my-relationmap': relationmap,
    treemap,
  },
  data: () => {
    return {
      textarea: '',
      resultData: [
        {
          recommended: 5,
          reason: "因工作需要长期站立",
          treatmentMethod: "穿戴静脉曲张袜",
          medicine: [],
          cost: 188,
          steps: [{
            main: '穿戴静脉曲张袜进行治疗',
            sub: '根据患者发病部位和病情严重情况来选择合适的弹力袜，需要专业人员通过多点测量患肢的周径决定需要的型号以及压力等级。'
          },
          {
            main: '每天早上起床前穿戴弹力袜，持续穿戴时间为8-12小时，夜间休息时脱下。',
            sub: '不建议穿着弹力袜入睡。'
          },
          ],
        },
        {
          recommended: 4,
          reason: "因工作需要长期站立",
          treatmentMethod: "手术治疗：大隐静脉、小隐静脉高位结扎术",
          medicine: [],
          cost: 2000,
          steps: [{
            main: '手术治疗为侵入式治疗，需要先进行手术前体检',
            sub: ''
          },
          {
            main: '进行麻醉',
            sub: '腰麻或者全身麻醉'
          },
          {
            main: '进行剥脱手术',
            sub: '专业手术请专科医生进行'
          },{
            main: '利用弹力绷带进行加压',
            sub: '根据患者发病部位和病情严重情况来选择合适的弹力袜，需要专业人员通过多点测量患肢的周径决定需要的型号以及压力等级。'
          }],
        },
      ],
    };
  },
  mounted() {
    
  }
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