<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted () {
    this.getPhotos();
  }
  // async await 是ES7新特性，本质上是generator函数的语法糖
  async getPhotos() {
    // 这里用try catch包裹，请求失败的时候就执行catch里的
    try {
      const params = {
        page: 1,
        per_page: 1,
        order_by: 'latest',
      };
      console.log(this);
      const res = await this.$api.unsplash.viewPhotos(params);
      // this.photosList = res;
    } catch (e) {
      // console.warn(e);
    }
  }
}
</script>
