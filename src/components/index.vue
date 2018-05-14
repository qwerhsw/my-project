<template>
  <div class="index">
    <router-view></router-view>
    <ul class="tab-list">
      <li class="item" :class="{active: i === currIndex}" v-for="(item, i) in tabList" :key="i+'tabList'" @click="btnAction(item, i)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      currIndex: 0,
      tabList: [
        {
          routerName: 'home',
          text: '首页'
        },
        {
          routerName: 'setting',
          text: '设置'
        }
      ]
    }
  },
  methods: {
    btnAction (item, i) {
      this.currIndex = i
      let name = item.routerName
      this.$router.push({ name })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.index {
  background-color: #ddd;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.tab-list{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #9fb0f3;
  display: flex;
  line-height: 54px;
}
.item {
  flex: 1;
  color: #fff;
  border-right: #ccc solid 1px;
}
.item.active{
  background-color: #6986f5;
}
.item:last-child {
  border-right: none;
}
</style>
