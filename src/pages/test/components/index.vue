<template>
  <div class="wrap">
    <el-row style="background: #324157;height: 60px">
      <el-col :span="4" style="border-right: 1px solid gray;height: 60px">
        <div  @click="tet" style="width: 100%;height: 100%">网站名称和logo</div>
      </el-col>
      <el-col :span="4" style="height: 60px;border-right: 1px solid gray;">
        公司名称和logo
      </el-col>

    <!--<div style="float:right">-->
      <el-menu theme="dark"class="el-menu-demo" style="float: right;padding-right: 30px" mode="horizontal" router :default-active="$route.path">
        <el-menu-item index="/hello">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">订单管理</el-menu-item>
        <el-menu-item index="4">个人中心</el-menu-item>
      </el-menu>
    </el-row>
      <el-col :span="24" class="main">
        <aside class="aside1">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" style="height: 100%" router :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="/hello/index">选项1</el-menu-item>
              <el-menu-item index="/home/main">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
          </aside>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="content-wrapper">
              <!--页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区 页面主显示区-->
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-col>
  </div>
</template>

<script>
  import axios from 'axios'
//  import http from 'api/http'
  import {prefix} from 'api/common'
  export default {
    name: 'hello',
    data () {
      return {
        isCollapse:true,
        test1:false
      }
    },
    created(){
//        this.loasd();
    },
    methods:{
      tet() {
        this.isCollapse=!this.isCollapse;
//        alert(12);
      },
//      loasd(){
//        axios.post('/index/index/data')
//        .then(function (response) {
//        console.log(response);
//        })
//        .catch(function (error) {
//        console.log(error);
//        });
//      }
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;}
  .aside1 {
    /*flex:0 0 227px;*/
    flex:10 0 50px;
  }
  /*.aside2 {*/
    /*flex:0 0 20px;}*/
  .content-container {
    display: flex;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  /*width: 100%;*/
  /*overflow-y: scroll;*/}
  .grid-content{
    min-width: 100%;
    flex: 0 0 1010px;
    background-color: #bbdbe6 ;}
  .content-wrapper {
    /*background-color: greenyellow;*/
    box-sizing: border-box;


  }
</style>
