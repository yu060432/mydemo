<template>
  <div class="hello">
     我是兄弟页码
  </div>
</template>

<script>
export default {
  name: 'OtherGo',
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
