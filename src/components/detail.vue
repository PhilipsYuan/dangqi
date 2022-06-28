<template>
  <div class="content">
    <div class="page">
      <div class="back" @click="backHome">< 返回</div>
      <div class="detail">
        <img :src="image">
        <div class="desc">{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '../common/list.js'
export default {
  name: 'detail',
  data() {
    return {
      image: null,
      text: null
    }
  },
  mounted() {
    let item = list[this.$route.params.index]
    this.image = item.image
    this.text = item.content
  },
  methods: {
    backHome() {
      this.$router.push({
        name: 'home'
      })
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
.page {
  background: #de280f;
  width: 60em;
  overflow: hidden;
  margin: auto;
}
.back {
  width: 5em;
  height: 1.5em;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 1em;
  line-height: 1.5em;
  border-radius: 0.25em;
  margin-top: 1em;
  cursor: pointer;
  position: absolute;
  bottom: 2em;
  opacity: 0.2
}
.back:hover {
  color: #44f3f3;
  border: 1px solid #44f3f3;
}
.detail {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
}
img {
  border: 6px solid #ffffff;
  border-radius: 6px;
  width: 18em;
  height: 18em;
  margin-left: 4em;
}
.desc {
  width: 20em;
  margin-left: 5em;
  color: #ffffff;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
}
</style>
