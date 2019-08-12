<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="choose1">选择1</button>
    <button @click="choose2">选择2</button>
    <button @click="goOther">去其他页面</button>
    <button @click="goOther1">去兄弟页面</button>
    <button @click="goback">访问后台</button>
    <component v-bind:is="currentTabComponent"></component>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  import  hellokind from "./HelloKind"
  import  hf from "./HelloKf"
  import net from "./net";
export default {
  name: 'HelloWorld',
  components:{hellokind,hf},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:{name:'老大'},
      currentTabComponent:"hf",
    }
  },
  methods:{
    choose1(){
      console.log(this.currentTabComponent)
      this.currentTabComponent ="hellokind";
      console.log(this.currentTabComponent)
    },
    choose2(){
      this.currentTabComponent ="hf";
    },
    goOther(){
      this.$router.push({name:'yougo'});
    },
    goOther1(){
      this.$router.push({name:'othergo'});
    },
    goback(){
      net.finduser()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
