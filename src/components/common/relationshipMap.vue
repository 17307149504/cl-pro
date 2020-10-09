<template>
  <div class="relation-map">
    <div class="left-map" id="main">
    </div>
    <div class="right-info">
        <h4>相关说明</h4>
        <p>
            一开始，这里是关于整张图的说明，点击相应节点之后，这里是关于点选的节点的说明
        </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    var echarts = require("echarts");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style lang="less">
.relation-map {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  h4 {
      font-weight: bold;
       margin-block-end: 0;

  }
}
.left-map {
  border-right: 1px solid #ccc;
  min-height: 600px;
  flex-basis: 70%;
}
.right-info {
  min-height: 200px;
  flex-basis: 30%;
  padding-left: 20px;
}
p {
    text-align: left;
    text-indent: 2em;
}
</style>