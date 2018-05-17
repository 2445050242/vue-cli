<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 80%;margin: 20px auto">
      <el-table-column
        prop="nickname"
        label="昵称"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="抽奖次数"
        min-width="180">
      </el-table-column>
    </el-table>
    <div class="test">
      <button>主要按钮</button>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import http from 'api/http'
  import {prefix} from 'api/common'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData:[]
    }
  },
  created(){
    this.loasd();
  },
  methods:{
    loasd(){
      var root = this;
      http.post('/',{num:5})
        .then(function (res) {
//          root.tableData = res.data.data;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.test{
  padding: 50px;
  border: 1px solid #000;
  button{
    background: #409eff;
    border: none;
    width: 80px;
    padding: 0 10px;
    border-radius: 5px;
    color: #fff;
    height: 30px;
    line-height: 31px;
    &:hover{
      opacity: 0.8;
    }
  }
}
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
