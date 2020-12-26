<template>
  <div>
    <div class="container">
      <div class="map-container"><svg id="treeMap" /></div>
      <!-- <el-row type="flex" justify="space-between"> -->
        <h4>新增实体</h4>
        <el-form :model="form" label-width="80px">
          <el-form-item label="id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="症状">
            <!-- <el-input v-model="form.symptom"></el-input> -->
            <el-select v-model="form.symptom">
              <el-option
                v-for="item in symptomOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Pr">
            <!-- <el-input v-model="form.pr"></el-input>-->
            <el-cascader v-model="form.pr" :options="pOptions"> </el-cascader>
          </el-form-item>
          <el-form-item label="Po">
            <!-- <el-input v-model="form.po"></el-input> -->
            <el-cascader v-model="form.po" :options="pOptions"></el-cascader>
          </el-form-item>
          <el-form-item label="病因E">
            <!-- <el-input v-model="form.etilogy"></el-input> -->
            <el-select v-model="form.etilogy">
              <el-option
                v-for="item in etilogyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="易患年龄段">
            <!-- <el-input v-model="form.risk_factor_age"></el-input> -->
            <el-select v-model="form.risk_factor_age">
              <el-option
                v-for="item in ageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="易患性别">
            <!-- <el-input v-model="form.risk_factor_sex"></el-input> -->
            <el-select v-model="form.risk_factor_sex">
              <el-option
                v-for="item in sexOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="易患职业">
            <el-input v-model="form.risk_factor_occupation"></el-input>
          </el-form-item>
          <el-form-item label="治疗方式">
            <!-- <el-input v-model="form.cure_way"></el-input> -->
            <el-cascader v-model="form.cure_way" :options="cureWayOptions">
            </el-cascader>
          </el-form-item>
          <el-form-item label="需做检查">
            <!-- <el-input v-model="form.check"></el-input> -->
            <el-cascader v-model="form.check" :options="checkOptions">
            </el-cascader>
          </el-form-item>
          <el-form-item label="患病部位">
            <el-input v-model="form.part"></el-input>
          </el-form-item>
          <el-form-item label="并发症">
            <el-input v-model="form.accompany"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="addEntity">确认增加</el-button>
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";
import {symptomOptions, pOptions, etilogyOptions, ageOptions, sexOptions, cureWayOptions, checkOptions, getChildData} from '../../util/common'
export default {
  data() {
    return {
      symptomOptions, pOptions, etilogyOptions, ageOptions, sexOptions, cureWayOptions, checkOptions,
      form: {
        id: "",
        name: "",
        desc: "",
        symptom: "",
        pr: "",
        po: "",
        etilogy: "",
        risk_factor_age: "",
        risk_factor_sex: "",
        risk_factor_occupation: "",
        cure_way: "",
        check: "",
        part: "",
        accompany: "",
      },
      root: null,
      svg: null,
      duration: null,
      treeData: {
        name: "CEAP分类",
        children: [
          {
            name: "04",
            children: [
              {
                name: "id: 04",
              },
              {
                name:
                  "name: C3,4EsiAspdPr(Tel,Ret,CSVa,TPV)/Po(IVC,CIV,IIV,CPV)",
              },
              {
                name:
                  "描述：下肢静脉曲张伴有水肿，皮肤以及皮下组织的变化，起因于静脉内继发，静脉病 变涉及浅静脉，交通静脉，穿支静脉，其中毛细血管、网状静脉、膝上大隐静脉，大腿穿通静 脉出现反流，下腔静脉、髂总静脉、髂内静脉、小腿穿通静脉出现阻塞",
              },
              {
                name: "症状",
                children: [
                  {
                    name: "C3: 水肿",
                  },
                  {
                    name: "C4: 皮肤和皮下组织的变化",
                  },
                ],
              },
              {
                name: "Pr",
                children: [
                  {
                    name: "Tel",
                  },
                  {
                    name: "Ret",
                  },
                  {
                    name: "CSVa",
                  },
                  {
                    name: "TPV",
                  },
                ],
              },
              {
                name: "Po",
                children: [
                  {
                    name: "IVC",
                  },
                  {
                    name: "CIV",
                  },
                  {
                    name: "IIV",
                  },
                  {
                    name: "CPV",
                  },
                ],
              },
              {
                name: "病因E: Esi",
              },
              {
                name: "易患年龄段：40-50",
              },
              {
                name: "易患性别: 女",
              },
              {
                name: "易患职业：医生",
              },
              {
                name: "治疗方式",
                children: [
                  {
                    name: "手术治疗",
                    children: [
                      {
                        name: "大隐静脉高位结扎加剥脱术",
                      },
                      {
                        name: "交通静脉结扎术",
                      },
                    ],
                  },
                  {
                    name: "药物治疗",
                    children: [
                      { name: "爱脉朗" },
                      {
                        name: "迈之灵",
                      },
                    ],
                  },
                  {
                    name: "支持性治疗",
                    children: [
                      {
                        name: "平卧时抬高患肢，踝关节和小腿的规律运动",
                      },
                    ],
                  },
                ],
              },
              {
                name: "需做检查",
                children: [
                  {
                    name: "彩色多普勒超声检查",
                  },
                  {
                    name: "病史询问和体检",
                  },
                ],
              },
              {
                name: "患病部位",
                children: [
                  {
                    name: "大腿",
                  },
                  {
                    name: "小腿",
                  },
                ],
              },
              {
                name: "并发症",
                children: [
                  { name: '"淤积性皮炎' },
                  { name: "血栓性浅静脉炎" },
                  { name: "丹毒" },
                  { name: "急性蜂窝织炎" },
                ],
              },
            ],
          },
        ],
      },
      i: null,
      treemap: null,
      currentNode: {
        id: null,
        data: { name: "" },
      },
      newNode: {
        id: 0,
        name: "",
      },
      nodeObj: null,
    };
  },
  components: {
  },
  mounted() {
    var margin = { top: 0, right: 90, bottom: 30, left: 90 };
    var width = 960 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;
    this.svg = d3
      .select("#treeMap")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", [-10, -10, width, height])
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.nodeObj = d3.hierarchy.prototype.constructor;
    this.i = 0;
    // this.root = null
    this.duration = 750;

    // declares a tree layout and assigns the size
    this.treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(this.treeData, function (d) {
      return d.children;
    });
    this.root.x0 = height / 2;
    this.root.y0 = 0;
    // let zoomHandler = d3
    //   .zoom()
    //   .on("zoom", zoomActions)
    //   .scaleExtent([1 / 2, 8]);
    let inner = this.svg.select("g");
    let zoomHandler = d3.zoom().on("zoom", function () {
      inner.attr("transform", d3.event.transform);
    });
    this.svg.call(zoomHandler);
    // this.svg.call(zoomHandler).on("dblclick.zoom", null);
    // zoomHandler(this.svg);

    // Zoom functions
    // function zoomActions() {
    //   // gNode.attr('transform', d3.event.transform)
    //   // gLink.attr('transform', d3.event.transform)
    // }
    this.update(this.root);
  },
  methods: {
    addEntity() {
      console.log("addEntity");
      let parent = this.currentNode;
      let child = Object.assign(new this.nodeObj(), {
        parent,
        depth: parent.depth + 1,
      }); // eslint-disable-line
      if(this.form.id) {
        child.id = this.form.id;
        child.data = getChildData(this.form);
        if (parent.children) parent.children.push(child);
        else parent.children = [child];

        this.nodes.push(child);
        this.links.push({ source: parent, target: child });

        this.update(parent);
      }
    },
    addSomeNodes() {
      let addData = {
        name: "addFibonacciHeap3",
        id: 1767,
        children: [
          {
            name: "add333FibonacciHeap",
            id: 1,
            children: [
              {
                name: "335fff",
                id: 4,
                children: [
                  {
                    name: "666",
                    id: 6,
                  },
                  {
                    name: "777",
                    id: 7,
                    children: [
                      {
                        name: "9",
                        id: 9,
                      },
                      {
                        name: "10",
                        id: 10,
                      },
                      {
                        name: "1111",
                        id: 11,
                      },
                    ],
                  },
                  {
                    name: "888",
                    id: 8,
                    children: [
                      {
                        name: "12",
                        id: "12",
                      },
                    ],
                  },
                ],
              },
              {
                name: "vxfff",
                id: 5,
              },
            ],
          },
          {
            name: "add22FibonacciHeap2",
            id: 2,
          },
          {
            name: "add1FibonacciHeap3",
            id: 3,
          },
        ],
      };

      let arr = [];
      cycleData(addData);
      function cycleData(obj) {
        arr.push({
          id: obj.id,
          name: obj.name,
        });
        if (obj.children && obj.children.length > 0) {
          let len = obj.children.length;
          for (let i = 0; i < len; i++) {
            cycleData(obj.children[i]);
          }
        }
      }

      var self = this;

      addN(addData, this.currentNode);
      function addN(node, parent) {
        let nodeObj = d3.hierarchy.prototype.constructor;
        let child = Object.assign(new nodeObj(), {
          parent,
          depth: parent.depth + 1,
        }); // eslint-disable-line
        child.id = node.id;
        child.data = {
          name: node.name,
        };
        if (parent.children) parent.children.push(child);
        else parent.children = [child];

        self.nodes.push(child);
        self.links.push({ source: parent, target: child });

        self.update(parent);

        if (node.children && node.children.length > 0) {
          let len = node.children.length;
          for (let i = 0; i < len; i++) {
            addN(node.children[i], child);
          }
        }
      }
    },
    addNode() {
      let min = 100;
      let max = 999;
      let id = parseInt(Math.random() * (max - min + 1) + min, 10);
      let parent = this.currentNode;

      let child = Object.assign(new this.nodeObj(), {
        parent,
        depth: parent.depth + 1,
      }); // eslint-disable-line
      child.id = id;
      child.data = {
        name: this.newNode.name,
      };
      if (parent.children) parent.children.push(child);
      else parent.children = [child];

      this.nodes.push(child);
      this.links.push({ source: parent, target: child });

      this.update(parent);
    },
    renameNode() {
      this.currentNode.data.name = this.newNode.name;
      let parent = this.currentNode.parent;
      this.update(parent);
    },
    deleteNode() {
      let self = this;
      if (
        this.currentNode.parent &&
        this.currentNode.parent.children.length > 0
      ) {
        this.currentNode.parent.children.filter((item, i) => {
          if (item.id && item.id === self.currentNode.id) {
            self.currentNode.parent.children.splice(i, 1);
            if (this.currentNode.parent.children.length === 0) {
              delete this.currentNode.parent.children;
            }
            this.update(this.currentNode);
          }
        });
      } else {
        console.log("node is empty"); // eslint-disable-line
      }
    },
    update(source) {
      let self = this;
      // Assigns the x and y position for the nodes
      var treeMapData = this.treemap(this.root);

      // Compute the new tree layout.
      this.nodes = treeMapData.descendants();
      this.links = treeMapData.descendants().slice(1);

      // Normalize for fixed-depth.
      this.nodes.forEach(function (d) {
        d.y = d.depth * 180;
      });

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = this.svg.selectAll("g.node").data(self.nodes, function (d) {
        return d.id || (d.id = ++self.i);
      });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function () {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", self.click);

      // Add Circle for the nodes
      nodeEnter
        .append("circle")
        .attr("class", "node")
        .attr("r", 1e-6)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      // Add labels for the nodes
      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("x", function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function (d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
          return d.data.name;
        });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // update the text
      node
        .select("text")
        .attr("dy", ".35em")
        .attr("x", function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function (d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
          return d.data.name;
        });

      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .duration(self.duration)
        .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      // Update the node attributes and style
      nodeUpdate
        .select("circle.node")
        .attr("r", 10)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        })
        .attr("cursor", "pointer");

      // Remove any exiting nodes
      var nodeExit = node
        .exit()
        .transition()
        .duration(self.duration)
        .attr("transform", function () {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select("circle").attr("r", 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select("text").style("fill-opacity", 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = this.svg.selectAll("path.link").data(self.links, function (d) {
        return d.id;
      });

      // Enter any new links at the parent's previous position.
      var linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function () {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate
        .transition()
        .duration(self.duration)
        .attr("d", function (d) {
          return diagonal(d, d.parent);
        });

      // Remove any exiting links
      link
        .exit()
        .transition()
        .duration(self.duration)
        .attr("d", function () {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition.
      this.nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {
        let path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
        return path;
      }
    },
    // Toggle children on click.
    click(d) {
      this.currentNode = d;
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      this.update(d);
    },
  },
};
</script>
<style>
#treeMap circle {
  fill: pink;
  stroke: steelblue;
  stroke-width: 3px;
}

#treeMap .node text {
  font: 12px sans-serif;
}

#treeMap .link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>
<style scoped>
.container {
  /* display: flex; */
  margin: 10px 0;
  text-align: left;
  width: 100%;
}
.width-300 {
  width: 300px;
  margin: 0 10px;
}
.map-container {
  height: 80%;
  width: 80%;
}
svg {
  height: 100%;
  width: 100%;
}
</style>
