<template>
  <div>
      <my-nav></my-nav>
      <div class="container">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      </div>
  </div>
</template>

<script>
import mynav from '../components/common/nav.vue'
export default {
    components: {
        'my-nav': mynav,
    }
}
</script>

<style>
.container {
  width: 90%;
  margin: 20px auto;
  min-height: 400px;
  max-width: 1300px;
}
h2,h3,h4,h5 {
    text-align: left;
    font-weight: 600;
    line-height: 2em;
    margin-block-end: 0;
}
h3::before {
    content: '';
    border-left: 20px solid #67C23A;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    position: relative;
}
ul,li {
    list-style: none;
    text-align: left;
}
li {
    line-height: 2em;
}
</style>