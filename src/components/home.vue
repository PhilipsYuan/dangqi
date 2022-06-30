<template>
  <div class="hello">
    <div class="content">
      <el-carousel class="carousel" :initial-index="current" trigger="click" :autoplay="false" @change="change">
        <el-carousel-item>
          <div class="all-content">
            <div class="first-line">
              <img class="first" src="../assets/small/logo1.jpg.png">
              <div class="flag-list">
                <img v-for="(item, index) in list.slice(0, 34)" :src="item.image" @click="goDetail(index)">
              </div>
            </div>
            <div class="flag-list">
              <img v-for="(item, index) in list.slice(34, 110)" :src="item.image" @click="goDetail(index + 34)">
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="all-content">
            <div class="first-line">
              <img class="first" src="../assets/small/logo1.jpg.png">
              <div class="flag-list">
                <img v-for="(item, index) in list.slice(110, 144)" :src="item.image" @click="goDetail(index + 110)">
              </div>
            </div>
            <div class="flag-list">
              <img v-for="(item, index) in list.slice(144)" :src="item.image" @click="goDetail(index + 144)">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import list from '../common/listSmall.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: list,
      current: 0
    }
  },
  mounted() {
    this.current = this.$route.params.current
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        name: 'detail',
        params: {
          index: index,
          current: this.current
        }
      })
    },
    change(value) {
      this.current = value
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
.carousel {
  width: 67em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
}
.all-content {
  background: #de280f;
  width: 67em;
  margin: auto;
}
.first-line {
  width: 67em;
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
  height: 13.6em;
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
<style>
.el-carousel__container {
  position: relative;
  height: 34em !important;
}
</style>
