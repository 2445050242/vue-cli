<template>
  <div>
    {{doneTodos}}
    <el-button type="primary" @click="testFunction">测试</el-button>
    <el-button type="primary" @click="testActions">Action</el-button>
  </div>
</template>

<script>
//  import axios from 'axios'
  import { mapGetters } from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        testValue:'',
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'doneTodos',
        // ...
      ])
    },
    created(){
      this.testValue = this.$store.state.Test.value
//      this.testValue = this.$store.getters.doneTodos
//      console.log(this.testValue);
    },
    methods:{
      testFunction(){
        var root = this;
        root.$store.dispatch('testFunction').then((res)=> {
//          console.log(root.testValue);
        });
      },
      testActions(){
        var root = this;
        root.$store.dispatch('actionB').then((res)=> {
//          console.log(root.testValue);
        });
      }
    }
  }
</script>

<style scoped>
</style>
