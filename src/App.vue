<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import $ from 'jquery'

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created() {
    let openid = this.getUrlParam("openid");
    let local = window.location.href;
    // let local = 'http://192.168.101.16:8081/#/'
    console.log(local)

    if (openid === null || openid === '') {
      $.ajax({
        url: this.config.preUrl + '/robot-user/wechat/authorize?returnUrl=' + local,
        success: res => {

        }

      })
    }
  },
  methods: {
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      let url = window.location.href.split("#")[0];
      let search = url.split("?")[1];
      if (search) {
        var r = search.substr(0).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
