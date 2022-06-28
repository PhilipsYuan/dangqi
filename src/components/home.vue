<template>
  <div class="hello">
    <div class="content">
      <div class="all-content">
        <div class="first-line">
          <img class="first" src="../assets/small/logo1.jpg.png">
          <div class="flag-list">
            <img v-for="(item, index) in list.slice(0, 30)" :src="item.image" @click="goDetail(index)">
          </div>
        </div>
        <div class="flag-list">
          <img v-for="(item, index) in list.slice(31)" :src="item.image" @click="goDetail(index + 31)">
        </div>
      </div>
      <div class="back" @click="backHome">< 返回</div>
    </div>
  </div>
</template>

<script>
import list from '../common/listSmall.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: list
    }
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        name: 'detail',
        params: {
          index: index
        }
      })
    },
    backHome() {
      window.location.href = 'http://localhost/'
    }
  }
}
</script>

<style scoped>
.content {
  background: #de280f;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.all-content {
  background: #de280f;
  width: 60em;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
}
.first-line {
  width: 63em;
  display: flex;
  align-items: flex-end;
}
.flag-list {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
img {
  border: 3px solid #000000;
  border-radius: 3px;
  width: 3em;
  height: 3em;
  margin-right: 0.3em;
  margin-top: 1em;
  cursor: pointer;
}
.first {
  width: 6.8em;
  height: 6.8em;
  border: none;
}
.back {
  width: 5em;
  height: 4em;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 1em;
  line-height: 1.5em;
  border-radius: 0.25em;
  margin-top: 1em;
  cursor: pointer;
  position: absolute;
  bottom:2em;
  opacity: 0;
}
</style>
