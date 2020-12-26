<template>
  <div>
    <el-steps :active="activeStep" finish-status="success" class="steps">
      <el-step title="步骤1"></el-step>
      <el-step title="步骤2"></el-step>
      <el-step title="步骤3"></el-step>
    </el-steps>
    <div class="content">
      <div class="step1-content" v-if="activeStep === 0">
        <h4>请输入一些基本信息，或直接导入电子病历：</h4>
        <el-form :inline="true" class="step1-form">
          <el-input
            placeholder="请输入职业"
            v-model="formData.occupation"
            class="input-with-select"
          >
            <el-select
              v-model="formData.sex"
              placeholder="请选择性别"
              slot="prepend"
            >
              <el-option label="男性" value="male"></el-option>
              <el-option label="女性" value="female"></el-option>
            </el-select>
            <el-select
              v-model="formData.age"
              placeholder="请选择年龄"
              slot="prepend"
            >
              <el-option
                v-for="item in ageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-input>
          <el-button
            type="info"
            icon="el-icon-s-order"
            class="dialog-btn"
            @click="dialogFormVisible = true"
            >导入电子病历</el-button
          >
        </el-form>
      </div>
      <div class="step2-content search" v-if="activeStep === 1">
        <div class="tabs-box" @click="getInput">
          <el-tag v-for="(item, key) in tagsArr" :key="key">{{ item }}</el-tag>
        </div>
        <el-input
          v-model="symptomStr"
          placeholder="请输入症状"
          class="symptom-input"
        ></el-input>
        <el-button type="primary" @click="getChecks">
          解析
        </el-button>
        <div v-show="cGrade.length != 0" class="check-box">
          <h4>初步诊断，该症状属于{{cGrade}}等级，需做以下检查</h4>
          <span
            v-for="check in needChecks"
            :key="check.name"
            class="check-span"
            >{{ check.name }}</span
          >
        </div>
        
      </div>
      <div class="step3-content" v-if="activeStep === 2">
        <h4>请根据检查结果给出以下信息</h4>
        <el-form :model="step3Form" :inline="true">
          <el-form-item label="P等级：病理生理">
            <el-select v-model="step3Form.p">
              <el-option value="pr" label="出现反流"></el-option>
              <el-option value="po" label="出现阻塞"></el-option>
              <el-option value="pn" label="无明显反流阻塞"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="A等级：解剖部位">
            <div class="p-box">
              <div class="p-title">
                <span>反流位置：</span>
                <div class="inner-box">
                  <!-- <span v-for="(item, index) in prPositionArr" :key="index"> {{item}}</span> -->
                  <el-tag v-for="(tag,index) in prPositionArr" :key="index" closable @close="delPrPosition">
                    {{ tag }}
                  </el-tag>
                </div>
              </div>
              <div class="p-content" @click="getPrPosition">
                <div class="anatomy-box">
                  <span>深静脉：</span>
                  <el-tag v-for="tag in anatomyArrS" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
                <div class="anatomy-box">
                  <span>浅静脉：</span>
                  <el-tag v-for="tag in anatomyArrP" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
                <div class="anatomy-box">
                  <span>穿支静脉：</span>
                  <el-tag v-for="tag in anatomyArrD" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
              </div>
            </div>
            <div class="p-box">
              <div class="p-title">
                <span>阻塞位置：</span>
                <div class="inner-box">
                  <!-- <span v-for="(item, index) in prPositionArr" :key="index"> {{item}}</span> -->
                  <el-tag v-for="(tag,index) in poPositionArr" :key="index" closable @close="delPoPosition">
                    {{ tag }}
                  </el-tag>
                </div>
              </div>
              <div class="p-content" @click="getPoPosition">
                <div class="anatomy-box">
                  <span>深静脉：</span>
                  <el-tag v-for="tag in anatomyArrS" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
                <div class="anatomy-box">
                  <span>浅静脉：</span>
                  <el-tag v-for="tag in anatomyArrP" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
                <div class="anatomy-box">
                  <span>穿支静脉：</span>
                  <el-tag v-for="tag in anatomyArrD" :key="tag.value">
                    {{ tag.label }}
                  </el-tag>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="E等级：病因">
            <el-select v-model="step3Form.e">
              <el-option value="Ep" label="原发性"></el-option>
              <el-option value="Es" label="继发性"></el-option>
              <el-option value="Esi" label="静脉内继发"></el-option>
              <el-option value="Ese" label="静脉外继发"></el-option>
              <el-option value="Ec" label="先天性"></el-option>
              <el-option value="En" label="不确定原因"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" class="next-btn" @click="previous" :disabled="activeStep === 0">上一步</el-button
      >
      <el-button type="primary" class="next-btn" @click="next" :disabled="activeStep === 3">下一步</el-button
      >
      <div class="result-box" v-if="activeStep === 3">
        <h3>以下是所有输入的信息</h3>
        <el-table :data="totalInput" class="result-table" border highlight-current-row>
          <el-table-column prop="title" label="信息" width="150"></el-table-column>
          <el-table-column prop="content" label="内容">
            <!-- <template scope="scope">
              <el-input size="small" v-model="scope.row.content" placeholder="可补充内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
            </template> -->
          </el-table-column>
        </el-table>
        <h3>诊断结果</h3>
        <ul v-for="(item, index) in resultData" :key="index" class="list">
          <li>
            <span style="font-weight: bold;font-size: 24px">CEAP分级：</span>
            <span style="font-weight: bold;font-size: 24px">{{ item.name }}</span>
          </li>
          <li>
            <span>匹配度：</span>
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
        </ul>
        <h3>知识图谱关系图</h3>
        <my-relationmap></my-relationmap>
        <h3>知识图谱树状图</h3>
        <treemap></treemap>
      </div>
    </div>
    <el-dialog title="导入电子病历" :visible.sync="dialogFormVisible">
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
        <el-button type="primary" @click="handleDialogForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import relationmap from "../components/common/relationshipMap"
import treemap from '../components/common/treeMap'
import { ageOptions, pOptions } from "../util/common";
export default {
   components: {
    'my-relationmap': relationmap,
    treemap,
  },
  data() {
    return {
      resultData: [
        {
          recommended: 5,
          name: 'C23EAP',
          reason: "因工作需要长期站立",
          treatmentMethod: "穿戴静脉曲张袜,每天早上起床前穿戴弹力袜，持续穿戴时间为8-12小时，夜间休息时脱下，不建议穿着弹力袜入睡。",
        },
        {
          recommended: 5,
          name: 'C23EAP',
          reason: "因工作需要长期站立",
          treatmentMethod: "穿戴静脉曲张袜,每天早上起床前穿戴弹力袜，持续穿戴时间为8-12小时，夜间休息时脱下，不建议穿着弹力袜入睡。",
        },
      ],
      dialogFormVisible: false,
      activeStep: 0,
      ageOptions,
      symptomStr: "",
      cGrade: '',
      formData: {
        sex: "",
        age: "",
        occupation: "",
      },
      form: {
        //导入电子病历时需要提供的信息
        cardNumber: "",
        name: "",
        department: "",
      },
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
      needChecks: [
        {
          name: "大隐静脉瓣膜功能试验",
        },
        {
          name: "深静脉通畅试验",
        },
        {
          name: "彩色多普勒超声检查",
        },
      ],
      step3Form: {
        p: "",
        pr: "",
        po: "",
        e: "",
      },
      prPositionArr: [],
      poPositionArr: []
    };
  },
  computed: {
    anatomyArrS() {
      return pOptions[0].children.map((item) => item);
    },
    anatomyArrP() {
      return pOptions[1].children.map((item) => item);
    },
    anatomyArrD() {
      return pOptions[2].children.map((item) => item);
    },
    totalInput() {
      return [
        {
          title: '年龄',
          content: this.formData.age
        },
        {
          title: '性别',
          content: this.formData.sex=='male' ? '男' : '女'
        },
        {
          title: '职业',
          content: this.formData.occupation
        },
        {
          title: 'C',
          content: this.cGrade
        },
        {
          title: 'E',
          content: this.step3Form.e
        },
        {
          title: 'A',
          content: `反流部位：${this.poPositionArr.length > 0? this.poPositionArr.join('、') : '无'}; 阻塞部位：${this.poPositionArr.length > 0 ? this.poPositionArr.join('、') : '无'}`
        },
        {
          title: 'P',
          content: this.step3Form.p,
        }
      ]
    }
  },
  methods: {
    getChecks() {
      // 根据当前的症状输入和基本信息获取到需要做的检查以及C的等级
      this.cGrade = 'C3';
    },
    handleEdit(index, row) {
        console.log(index, row);
      },
    previous() {
      this.activeStep--;
    },
    next() {
      if(this.activeStep === 1) {
        this.$confirm('需要检查结果以进行下一步操作', '提示', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认下一步',
          cancelButtonText: '先进行检查',})
          .then(() => {
            this.$message({
              type: 'info',
              message: `已确认检查`
            });
            this.activeStep++;
          })
          .catch(() => {});
        } else {
        this.activeStep++;
      }
    },
    handleDialogForm() {
      this.dialogFormVisible = false;
      // 后端获取性别，年龄，职业信息。
    },
    getInput(e) {
      let target = e.target;
      if (target.localName === "span") {
        this.symptomStr += " " + target.innerText;
      }
    },
    getPrPosition(e) {
      // 获取所有的反流位置
      let target = e.target;
      if(target.localName === 'span') {
        let text = target.innerText.trim();
        if(this.prPositionArr.indexOf(text) == -1)this.prPositionArr.push(text);
      }
    },
    delPrPosition(e) {
      let target = e.target;
      if(target.localName === 'i') {
        let text = target.previousSibling.nodeValue.trim();
        this.prPositionArr = this.prPositionArr.filter(
          item => item !== text
        )
      }
    },
    delPoPosition(e) {
      let target = e.target;
      if(target.localName === 'i') {
        let text = target.previousSibling.nodeValue.trim();
        this.poPositionArr = this.poPositionArr.filter(
          item => item !== text
        )
      }
    },
    getPoPosition(e) {
      // 获取所有的阻塞位置
      let target = e.target;
       if(target.localName === 'span') {
        let text = target.innerText.trim();
        if(this.poPositionArr.indexOf(text) == -1)this.poPositionArr.push(text);
      }
    }
  },
};
</script>

<style lang="less">
.check-box {
  width: 90%;
  margin: 20px auto 0;
}
.result-table {
  width: 60%;
}
.result-box {
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
  .el-rate {
  display: inline-block;
}
}
.p-box {
  border: 1px solid #ccc;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  span {
    // flex-basis: 10%;
  }
  .p-title {
    flex-basis: 30%;
    background-color: #9cb88e;
    font-weight: bold;
    text-align: center;
  }
  .p-content {
    flex-basis: 70%;
    padding: 0 20px 10px;
  }
}
.content {
  h4 {
    line-height: 2em;
    margin-bottom: 10px;
  }
}
.steps {
  min-height: 100px;
  padding: 20px 10px;
}
.el-select .el-input {
  width: 180px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input-group > .el-input__inne {
  width: 200px;
}
.step1-content {
  width: 60%;
  margin: 20px auto 80px;
  position: relative;
  .step1-form {
    margin-top: 40px;
  }
}
.dialog-btn {
  position: absolute;
  right: 0;
  top: 0;
}
.next-btn {
  margin: 20px;
}
.search {
  min-height: 200px;
  margin: 0 auto;
  width: 100%;
  padding: 112px 0 0;
  position: relative;
}
.tabs-box {
  margin-bottom: 20px;
  position: absolute;
  top: 26px;
  left: 45px;
  text-align: left;
}
.el-tag {
    cursor: pointer;
    margin-right: 10px;
  }
.step2-content {
  .symptom-input {
    width: 80%;
  }
  span.check-span {
    display: block;
    text-align: left;
    padding: 10px;
  }
  span.check-span::before {
    content: "";
    border-left: 10px solid #67c23a;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
.step3-content {
  text-align: left;
  .anatomy-box {
    display: block;
    text-align: left;
    
  }
  .el-form-item__label::before {
    content: "";
    border-left: 10px solid #67c23a;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
</style>